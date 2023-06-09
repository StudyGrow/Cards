import { Component, OnInit, ViewChild, OnDestroy, HostListener, isDevMode } from '@angular/core';
import { Card } from '../../models/Card';

import { Subscription, Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { fadeInOnEnterAnimation, shakeAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Store } from '@ngrx/store';

import {
  setFormMode,
  changeTab,
  changeSorting,
  updateCarouselInfo,
  resetFilter,
  showNewCard,
} from 'src/app/store/actions/StateActions';

import { delay, distinctUntilChanged, distinctUntilKeyChanged, filter, map, withLatestFrom } from 'rxjs/operators';

import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'src/app/services/notifications.service';
import { WarnMessage } from 'src/app/models/Notification';
import { AppState, CardFormMode } from 'src/app/models/state';

import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { sortOptions } from './sortOptions';
import { SortType } from 'src/app/models/SortType';
import {
  ACTIVE_TAGS,
  AUTHORIZED,
  SORTED_CARDS,
  FORM_MODE,
  SORTED_AND_FILTERED_CARDS,
  CARD_TO_SHOW_NEXT,
  USER_ID,
  SELECTED_TAB,
  SORT_TYPE,
  LAST_CARD_CHANGE,
} from 'src/app/store/selectors/selector';
import { CarouselInfo } from 'src/app/models/CarouselInfo';
import { TranslateService } from '@ngx-translate/core';
import { carouselStateKey } from 'src/app/store/reducers/carousel.reducer';
import { dataReducerKey } from 'src/app/store/reducers/data.reducer';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
})
export class BottomSheetComponent {
  options: {
    key: SortType;
    value: string;
    icon?: string;
  }[];

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>, private translate: TranslateService) {
    this.options = sortOptions;
  }
  sort(key: SortType) {
    this._bottomSheetRef.dismiss(key);
  }
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [fadeInOnEnterAnimation({ duration: 500 }), fadeOutOnLeaveAnimation({ duration: 100 }), shakeAnimation()],
})
export class CarouselComponent implements OnInit, OnDestroy {
  private inTypingField: boolean; // check if user is in input field
  private uid: string; // user id

  // private allCards: Card[]; //array of all the cards
  cardsToShowInCarousel: Card[]; // array of cards to show in carousel
  private readonly carouselInfo$ = new BehaviorSubject<CarouselInfo>(new CarouselInfo());
  currentCard$ = this.carouselInfo$.asObservable().pipe(map((info) => info.currentCard));

  loading: boolean;
  shortTypeHasChanged$ = this.store
    .select(SORT_TYPE)
    .pipe(filter((sortType) => !!sortType))
    .subscribe(() => {
      this.handleNewCard();
    });
  newCardToSet$ = this.store.select(CARD_TO_SHOW_NEXT);
  filters$: Observable<string[]> = this.store.select(ACTIVE_TAGS);
  filters: string[];
  // cards: Card[];

  cardCount = 0; // counts the cards that are displayed in the carousel
  lastRefresh: number; // holds the timestamp at which the carousel was last updated
  activeSlide = 0; // holds the slide which is currently shown
  readonly chunkSize = 20;
  start: number;
  end: number;

  formMode = CardFormMode.ADD; // mode in which the form is displayed either add or edit
  notallowed = true; // wether an action is allowed or not
  authorized$ = this.store.select(AUTHORIZED);

  subscriptions$: Subscription[] = []; // holds all subscriptions from observables they are unsubscribed in ngOnDestroy
  currentTab = 0;

  sortOption$: BehaviorSubject<{
    type: SortType;
    date: Date;
  }> = new BehaviorSubject({ type: undefined, date: undefined }); // subject which holds the type of sorting for the cards. undefined if the user has done no selection

  @ViewChild('mycarousel', { static: false }) public carousel: NgbCarousel; // ref to the ngbootsrap carousel

  @HostListener('window:keyup', ['$event']) handleKeyDown(event: KeyboardEvent) {
    if (!this.inTypingField) {
      // allow arrow keys navigation if user is not in an input field
      switch (event.key) {
        case 'ArrowRight':
          this.goToNext();
          break;
        case 'ArrowLeft':
          this.goToPrev();
          break;
      }
    }
  }
  @HostListener('swipeleft', ['$event']) public swipePrev() {
    this.goToNext();
  }
  @HostListener('swiperight', ['$event']) public swipeNext() {
    this.goToPrev();
  }

  constructor(
    private store: Store<AppState>,
    private _bottomSheet: MatBottomSheet,
    private notifs: NotificationsService,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  ngOnInit(): void {
    // Form Mode, depending on the mode different actions are not allowed
    let sub = this.store.select(FORM_MODE).subscribe((mode) => {
      this.formMode = mode || CardFormMode.ADD;
    });
    this.subscriptions$.push(sub);
    // see if user is in a typing field. (If so we disable carousel navigation with arrows)
    sub = this.store
      .select(carouselStateKey)
      .pipe(
        map((state) => state?.typingMode),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        this.inTypingField = val;
      });
    this.subscriptions$.push(sub);

    sub = this.store
      .select(SELECTED_TAB)
      .pipe(distinctUntilChanged())
      .subscribe((tab) => {
        this.currentTab = tab || 0;
      });

    // get the user id to check if user has the rigth to edit the card
    sub = this.store
      .select(USER_ID)
      .pipe(distinctUntilChanged())
      .subscribe((id) => {
        if (this.uid !== id) {
          this.uid = id;
        }
      });
    this.subscriptions$.push(sub);

    sub = this.route.fragment.pipe(distinctUntilChanged()).subscribe((fragment) => {
      // we might need to change this to handle resetting the filter if card is not in the current selection
      if (fragment && this.cardsToShowInCarousel) {
        this.refreshCarouselCards(fragment);
      }
    });
    this.subscriptions$.push(sub);

    const last_filtered$ = this.store.select(LAST_CARD_CHANGE);
    const last_added$ = this.store.select(dataReducerKey).pipe(map((state) => state.cards.lastUpdated)); // observable of timestamp at the cards were last modified

    // observable which holds the maximum of filtered$ and added$ which represents the date at which last changes were made
    const lastChanges$ = combineLatest([last_filtered$, last_added$]).pipe(
      map(([d1, d2]) => (!d1 && !d2 ? 0 : Math.max(d1?.getTime() || 0, d2?.getTime())))
    );

    sub = this.carouselInfo$.pipe(distinctUntilKeyChanged('updateAt')).subscribe((newState: CarouselInfo) => {
      this.store.dispatch(updateCarouselInfo({ info: newState })); // sends an update to the store whenever the info has updated
    });

    sub = combineLatest([this.store.select(SORTED_CARDS), this.store.select(SORTED_AND_FILTERED_CARDS), lastChanges$])
      .pipe(withLatestFrom(this.route.fragment.pipe(distinctUntilChanged())))
      .subscribe(([[allCardsSorted, allCardsSortedAndFiltered, changes], cardid]) => {
        if (!allCardsSorted || !allCardsSortedAndFiltered) {
          return;
        }
        const carouselState = { ...this.carouselInfo$.getValue() };
        if (!carouselState.updateAt || carouselState.updateAt.getTime() < changes) {
          // cards have changed
          carouselState.updateAt = new Date(); // update the last refresh time
          carouselState.allCardsSorted = allCardsSorted;
          carouselState.allCardsSortedAndFiltered = allCardsSortedAndFiltered;
          if (!this.cardsToShowInCarousel) {
            // if cards were not initialized, we set the initial card to show
            // this if statement is necessary because we do not want to change the card from the route if cards sorted change
            carouselState.currentCard = allCardsSorted?.find((card) => card._id === cardid);
          }

          this.carouselInfo$.next(carouselState);
          this.refreshCarouselCards(carouselState.currentCard?._id);
        }
      });
    this.subscriptions$.push(sub);

    sub = this.newCardToSet$
      .pipe(
        delay(50),
        filter((card) => !!card)
      )
      .subscribe((card) => this.handleNewCard(card));

    this.subscriptions$.push(sub);
  }

  /**
   * Initializes cards for the carousel.
   * @param cardid the id of the card which should be set as first card
   * Pass index of card which should be displayed initially in reference to the allCards array
   */

  refreshCarouselCards(cardid: string) {
    const state = { ...this.carouselInfo$.getValue() }; // copy state
    let index = state.allCardsSortedAndFiltered?.findIndex((card) => card._id === cardid);
    if (index == undefined || index < 0) index = 0;

    const filteredCards = state.allCardsSortedAndFiltered;

    state.start = index;
    if (index + this.chunkSize < filteredCards?.length) {
      state.end = index + this.chunkSize;
    } else {
      state.end = filteredCards?.length;
    }

    if (filteredCards?.length > index) {
      state.currentCard = filteredCards[index];
      state.currentIndex = state.start;
    }
    state.updateAt = new Date();

    this.carouselInfo$.next(state);

    this.cardsToShowInCarousel = null;
    setTimeout(() => {
      this.cardsToShowInCarousel = filteredCards?.slice(state.start, state.end);
      let indexInCardsToShowInCarousel: number;
      if (filteredCards) {
        indexInCardsToShowInCarousel = this.cardsToShowInCarousel?.indexOf(filteredCards[index]);
      }
      this.activeSlide = indexInCardsToShowInCarousel || 0;

      if (this.carousel) {
        this.carousel.select(this.activeSlide.toString());
      }
    }, 10);
    // this timeout is needed because the carousel is not properly resetting if there is not delay. However, this means that other actions might need to wait longer than this timeout
  }

  // this function updates the current slide index in the store and for the component
  onSlide(slideEvent: NgbSlideEvent) {
    const currSlideIndex: number = Number.parseInt(slideEvent.current);
    this.activeSlide = currSlideIndex;

    const newState: CarouselInfo = {
      ...this.carouselInfo$.getValue(),
      currentIndex: currSlideIndex,
      currentCard: this.cardsToShowInCarousel[currSlideIndex],
      updateAt: new Date(),
    };
    newState.absoluteIndex = this.carouselInfo$
      .getValue()
      .allCardsSortedAndFiltered.findIndex((card) => card._id === newState.currentCard._id);

    this.store.dispatch(updateCarouselInfo({ info: newState }));

    this.carouselInfo$.next(newState);
  }

  // function to calculate random index and select the slide with that index
  showRandomCard() {
    const state = { ...this.carouselInfo$.getValue() }; // copy state
    let rand: number = this.activeSlide;
    // prevent infinite recalculations
    for (let count = 0; count < 5 && rand == this.activeSlide; count++) {
      rand = Math.floor(Math.random() * state.allCardsSorted.length); // random Cardindex
    }
    this.selectSlide(rand);
  }

  // select the previous slide
  async goToPrev() {
    /*
     * REPLACE allCards with {...this.carouselInfo$.getValue()}.allCardsSorted or {...this.carouselInfo$.getValue()}.allCardsSortedAndFiltered
     */
    if (this.formMode === 'edit' || this.currentTab !== 0 || !this.carousel || !this.cardsToShowInCarousel)
      return this.showRejection();

    const state = { ...this.carouselInfo$.getValue() };
    if (state.currentIndex === 0 || this.cardsToShowInCarousel.indexOf(state.currentCard) < 0) {
      this.showRejection();
      return;
    }

    const indexOfCurrentCardInCarousel = this.cardsToShowInCarousel.indexOf(state.currentCard);
    const indexOfCurrentCardInAllCardsSortedAndFiltered = state.allCardsSortedAndFiltered.indexOf(state.currentCard);

    const predecessorInCarousel = this.cardsToShowInCarousel[indexOfCurrentCardInCarousel - 1];
    const desiredPredecessor = state.allCardsSortedAndFiltered[indexOfCurrentCardInAllCardsSortedAndFiltered - 1];
    if (predecessorInCarousel?._id === desiredPredecessor?._id) {
      // check if prev card is already present in cardsToShowInCarousel, then go simply prev in carousel
      this.carousel.prev();
    }
    // check if current card is the first one so that going prev should go to the last card. We dont want to cycle the carousel so we show rejection
    else if (
      state.allCardsSortedAndFiltered.indexOf(
        this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard)]
      ) == 0
    ) {
      this.showRejection();
    }
    // else load new chunk and go prev
    else {
      const end = state.allCardsSortedAndFiltered.indexOf(state.currentCard);
      let newChunk;
      if (end - this.chunkSize < 0) {
        newChunk = state.allCardsSortedAndFiltered.slice(0, end);
      } else {
        newChunk = state.allCardsSortedAndFiltered.slice(end - this.chunkSize, end);
      }
      newChunk = this.cardsToShowInCarousel.concat(newChunk);
      newChunk = [...new Set(newChunk)];
      const sortedReference = state.allCardsSortedAndFiltered;
      newChunk = newChunk.sort((a: any, b: any) => sortedReference.indexOf(a) - sortedReference.indexOf(b));
      this.cardsToShowInCarousel = newChunk;

      const newIndex = this.cardsToShowInCarousel.indexOf(state.currentCard);

      this.carousel.activeId = String(newIndex);
      setTimeout(() => {
        this.carousel.prev();
        // this.store.dispatch(updateCarouselInfo({ info })); // this is used to update the active index in the store
      }, 150);
    }
  }
  // select the next slide
  async goToNext() {
    /*
     * REPLACE allCards with {...this.carouselInfo$.getValue()}.allCardsSorted or {...this.carouselInfo$.getValue()}.allCardsSortedAndFiltered
     */
    if (
      !this.carousel ||
      !this.cardsToShowInCarousel ||
      this.cardsToShowInCarousel.length <= 1 ||
      this.formMode === 'edit' ||
      this.currentTab !== 0
    )
      return this.showRejection();

    const state = { ...this.carouselInfo$.getValue() };
    const successorInCarousel = this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard) + 1];
    const desiredSuccessorInAllCards =
      state.allCardsSortedAndFiltered[state.allCardsSorted.indexOf(state.currentCard) + 1];
    const indexOfLastCardInAllCards = state.allCardsSortedAndFiltered.length - 1;
    const currentCardIndexAccordingToAllCard = state.allCardsSortedAndFiltered.indexOf(
      this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard)]
    );
    if (successorInCarousel !== undefined && successorInCarousel._id == desiredSuccessorInAllCards?._id) {
      this.carousel.select(String(this.cardsToShowInCarousel.indexOf(state.currentCard) + 1));
    } else if (currentCardIndexAccordingToAllCard == indexOfLastCardInAllCards) {
      this.showRejection();
    } else {
      const begin = state.allCardsSortedAndFiltered.indexOf(state.currentCard) + 1;
      let end = 0;
      if (begin + this.chunkSize > state.allCardsSortedAndFiltered.length) {
        end = state.allCardsSortedAndFiltered.length;
      } else {
        end = begin + this.chunkSize;
      }
      let newChunk = state.allCardsSortedAndFiltered.slice(begin, end);
      newChunk = this.cardsToShowInCarousel.concat(newChunk);
      newChunk = [...new Set(newChunk)];
      const sortedReference = state.allCardsSortedAndFiltered;
      newChunk = newChunk.sort(function (a, b) {
        return sortedReference.indexOf(a) - sortedReference.indexOf(b);
      });
      this.cardsToShowInCarousel = newChunk;
      setTimeout(() => {
        this.carousel.next();
      }, 10);
    }
  }

  // opens bottom sheet with sort options. Handles the selected sort type
  openBottomSheet(): void {
    const ref = this._bottomSheet.open(BottomSheetComponent);
    ref.afterDismissed().subscribe((key: SortType) => {
      if (key) {
        this.store.dispatch(changeSorting({ sortType: key }));
      }
    });
  }

  isDisabled() {
    if (this.formMode == 'edit' || this.cardsToShowInCarousel?.length === 0) return true;

    const currCard = this.cardsToShowInCarousel ? this.cardsToShowInCarousel[this.activeSlide] : new Card(); // get the card that is currently showing

    if (currCard && currCard?.authorId && currCard.authorId !== this.uid)
      // there is an author and it is not the current user
      return true;
  }

  enableEdit() {
    if (this.formMode != 'edit') {
      this.store.dispatch(setFormMode({ mode: CardFormMode.EDIT }));
      this.store.dispatch(changeTab({ tab: 1 }));
    }
  }

  checkLatexState() {
    if (this.cardsToShowInCarousel?.length === 0) return;
    const currCard = this.cardsToShowInCarousel[this.activeSlide]; // current card being shown

    if (currCard?.latex === 1) return 'primary';
  }

  /**
   * handles setting new card from store
   * @param newCard card which should be displayed in carousel
   * @param cards available cards (currently filtered by tags)
   */
  handleNewCard(newCard?: Card) {
    const currCarouselInfo = this.carouselInfo$?.getValue();
    if (!(currCarouselInfo?.allCardsSorted?.length > 0)) {
      return isDevMode() && console.error('Cannot set new card as no cards are present in the carousel info');
    }
    if (!newCard) {
      setTimeout(() => {
        this.selectSlide(0);
      }, 40);
      return;
    }

    const cards = currCarouselInfo.allCardsSortedAndFiltered;
    const index = cards?.findIndex((card) => card._id === newCard._id);
    if (index === -1) {
      const card = currCarouselInfo.allCardsSorted?.find((card) => card._id === newCard._id);
      if (!card) return console.error('card not found in allcards');
      this.store.dispatch(resetFilter());
      return this.store.dispatch(showNewCard({ card: card })); // dirty trick it would be cleaner here to wait for resetFilter and then find the index and use selectSlide
    }
    this.selectSlide(index);
  }

  selectSlide(n?: number) {
    const currCarouselInfo = this.carouselInfo$.getValue();
    if (n === undefined) n = currCarouselInfo.allCardsSortedAndFiltered?.length - 1;

    if (!this.carousel || !this.cardsToShowInCarousel || n < 0) return;
    if (this.formMode == 'edit') {
      this.showRejection('Du musst erst die Bearbeitung der Karteikarte abschließen');
      return;
    }
    const slideIndex = this.cardsToShowInCarousel.indexOf(currCarouselInfo.allCardsSortedAndFiltered[n]);
    if (slideIndex >= 0) {
      this.carousel.select(slideIndex.toString());
    } else {
      const cardid = currCarouselInfo.allCardsSortedAndFiltered[n]?._id;
      this.refreshCarouselCards(cardid);
    }
  }

  isFirst() {
    const current = this.carouselInfo$.getValue().currentCard;
    const all = this.carouselInfo$.getValue().allCardsSortedAndFiltered;
    return all.indexOf(current) == 0;
  }

  isLast() {
    const current = this.carouselInfo$.getValue().currentCard;
    const all = this.carouselInfo$.getValue().allCardsSortedAndFiltered;
    return all.indexOf(current) == all.length - 1;
  }

  isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
  }

  // function which displays infos to the user that an action is not allowed
  private showRejection(message?: string) {
    if (!message) {
      message = 'Unerlaubt';
    }
    if (this.formMode == 'edit') {
      setTimeout(() => {
        this.store.dispatch(changeTab({ tab: 1 }));
        this.notifs.addNotification(new WarnMessage(message));
      }, 200);
    } else {
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
    }
  }
}
