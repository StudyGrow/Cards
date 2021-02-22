import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { Card } from '../../models/Card';

import { Subscription, Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { fadeInOnEnterAnimation, shakeAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Store } from '@ngrx/store';

import { setFormMode, changeTab, changeSorting, updateCarouselInfo } from 'src/app/store/actions/StateActions';

import { debounceTime, distinctUntilChanged, distinctUntilKeyChanged, map, withLatestFrom } from 'rxjs/operators';

import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'src/app/services/notifications.service';
import { WarnMessage } from 'src/app/models/Notification';
import { AppState, Data, Mode } from 'src/app/models/state';

import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { sortOptions } from './sortOptions';
import { SortType } from 'src/app/models/SortType';
import {
  ActiveTags,
  authorized,
  CardsSorted,
  FormMode,
  CardsSortedAndFiltered,
  CardToShow,
  DisplayedCards,
  UserId,
} from 'src/app/store/selector';
import { CarouselInfo } from 'src/app/models/CarouselInfo';
import { D, Y } from '@angular/cdk/keycodes';

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

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {
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
  private inTypingField: boolean; //check if user is in input field
  private uid: string; //user id

  allCards: Card[]; //array of all the allCards
  cardsToShowInCarousel: Card[]; //array of cards to show in carousel
  readonly carouselInfo$ = new BehaviorSubject<CarouselInfo>(new CarouselInfo());

  loading: boolean;

  public cardsData$: Observable<[Card[], number]>;
  newCardToSet$ = this.store.select(CardToShow);
  filters$: Observable<string[]> = this.store.select(ActiveTags);
  filters: string[];
  // cards: Card[];

  cardCount = 0; //counts the cards that are displayed in the carousel
  lastRefresh: number; // holds the timestamp at which the carousel was last updated
  activeSlide = 0; //holds the slide which is currently shown
  readonly chunkSize = 5;
  start: number;
  end: number;

  formMode: string; // mode in which the form is displayed either add or edit
  notallowed: boolean = false; //wether an action is allowed or not
  authorized$ = this.store.select(authorized);

  subscriptions$: Subscription[] = []; //holds all subscriptions from observables they are unsubscribed in ngOnDestroy

  sortOption$: BehaviorSubject<{
    type: SortType;
    date: Date;
  }> = new BehaviorSubject({ type: undefined, date: undefined }); //subject which holds the type of sorting for the cards. undefined if the user has done no selection

  @ViewChild('mycarousel', { static: false }) public carousel: NgbCarousel; //ref to the ngbootsrap carousel

  @HostListener('window:keyup', ['$event']) handleKeyDown(event: KeyboardEvent) {
    if (!this.inTypingField) {
      //allow arrow keys navigation if user is not in an input field
      if (event.key == 'ArrowRight') {
        this.goToNext();
      } else if (event.key == 'ArrowLeft') {
        this.goToPrev();
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
    //Form Mode, depending on the mode different actions are not allowed
    let sub = this.store.select(FormMode).subscribe((mode) => {
      this.formMode = mode;
    });
    this.subscriptions$.push(sub);
    //see if user is in a typing field. (If so we disable carousel navigation with arrows)
    sub = this.store
      .select('mode')
      .pipe(
        map((state) => state.typingMode),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        this.inTypingField = val;
      });
    this.subscriptions$.push(sub);

    //get the user id to check if user has the rigth to edit the card
    sub = this.store
      .select(UserId)
      .pipe(distinctUntilChanged())
      .subscribe((id) => {
        if (this.uid !== id) {
          this.uid = id;
        }
      });
    this.subscriptions$.push(sub);

    let filtered$ = this.store.select('mode').pipe(map((state) => state.cardsChanged)); //observable of timestamp at which user has modified the way cards are displayed
    let added$ = this.store.select('data').pipe(map((state) => state.cardData.lastUpdated)); //observable of timestamp at the cards were last modified

    //observable which holds the maximum of filtered$ and added$ which represents the date at which last changes were made
    let lastChanges$ = combineLatest([filtered$, added$]).pipe(
      map(([d1, d2]) => (!d1 && !d2 ? 0 : Math.max(d1?.getTime() || 0, d2?.getTime())))
    );

    //observable which holds the final cards which should be displayed in the carousel (filtered and sorted)
    this.cardsData$ = combineLatest([this.store.select(CardsSortedAndFiltered), lastChanges$]).pipe(debounceTime(5));

    sub = this.cardsData$.subscribe(([cards, date]) => {
      if (cards?.length > 0 && (!this.lastRefresh || this.lastRefresh < date)) {
        //cards have changed
        this.lastRefresh = new Date().getTime(); //update the last refresh time
        this.cardCount = cards?.length;
        this.refreshCarouselCards();
      }
    });

    this.subscriptions$.push(sub);
    sub = this.store.pipe(map(CardsSorted)).subscribe((cards) => {
      this.allCards = cards;
    });

    this.subscriptions$.push(sub);

    sub = this.carouselInfo$.pipe(distinctUntilKeyChanged('updateAt')).subscribe((newState: CarouselInfo) => {
      this.store.dispatch(updateCarouselInfo({ info: newState }));
    });
    let allCards$ = this.store.select(CardsSortedAndFiltered);
    this.subscriptions$.push(sub);
    sub = this.newCardToSet$
      .pipe(withLatestFrom(allCards$))
      .subscribe(([card, allCards]) => this.handleNewCard(card, allCards));
    this.subscriptions$.push(sub);
  }

  /**
   * Initializes cards for the carousel.
   * For each subsequent call nothing will happen -> use refreshCarouselCards for that
   * Pass index of card which should be displayed initially in reference to the allCards array
   */
  initCarouselCards(index: number) {
    const prevState = this.carouselInfo$.getValue();
    let newState = new CarouselInfo();
    // if (!prevState.updateAt) {
    newState.start = index;
    if (this.allCards?.length > index + this.chunkSize) {
      newState.end = index + this.chunkSize;
    } else {
      newState.end = this.allCards.length;
    }

    // if (this.allCards?.length > 0) {
    newState.currentCard = this.allCards[index];
    newState.currentIndex = newState.start;
    // }
    newState.updateAt = new Date();
    this.carouselInfo$.next(newState);
    this.cardsToShowInCarousel = null;
    setTimeout(() => {
      this.cardsToShowInCarousel = this.allCards.slice(newState.start, newState.end);
    }, 150);
    setTimeout(() => {
      this.activeSlide = index || 0;
      this.carousel.select(index.toString());
    }, 150);
  }

  /**
   * refreshes cards to show in carousel. This function is called in 2 scenarios
   * - user tries to slide to card of new chunk
   * - cards have changed in the store (e.g. user has added a card)
   */
  refreshCarouselCards() {
    if (!this.cardsToShowInCarousel || !this.carousel) {
      this.initCarouselCards(0);
      return;
    } else {
      this.activeSlide = 0;
      this.cardsToShowInCarousel = null;
      setTimeout(() => {
        this.carousel.select('0');
      }, 150);
    }
  }

  //this function updates the current slide index in the store and for the component
  onSlide(slideEvent: NgbSlideEvent) {
    const currSlideIndex: number = Number.parseInt(slideEvent.current);
    const prevState = this.carouselInfo$.getValue();
    this.activeSlide = currSlideIndex;
    let newState: CarouselInfo = new CarouselInfo();
    newState.currentIndex = currSlideIndex;
    newState.currentCard = this.cardsToShowInCarousel[currSlideIndex];
    newState.end = prevState.end;
    newState.start = prevState.start;
    newState.updateAt = new Date();
    this.carouselInfo$.next(newState);
  }

  //function to calculate random index and select the slide with that index
  showRandomCard() {
    let rand: number = this.activeSlide;
    //prevent infinite recalculations
    for (let count = 0; count < 5 && rand == this.activeSlide; count++) {
      rand = Math.floor(Math.random() * this.cardCount); //random Cardindex
    }
    this.selectSlide(rand);
  }

  //select the previous slide
  async goToPrev() {
    if (this.carousel && this.cardsToShowInCarousel && this.cardCount > 1 && this.formMode != 'edit') {
      const state = this.carouselInfo$.getValue();
      // check if prev card is already present in cardsToShowInCarousel, then go simply prev in carousel
      if (
        this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard) - 1] != undefined &&
        this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard) - 1] ==
          this.allCards[this.allCards.indexOf(state.currentCard) - 1]
      ) {
        this.carousel.prev();
      }
      // check if current card is the first one so that going prev should go to the last card
      else if (
        this.allCards.indexOf(this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard)]) == 0
      ) {
        var newChunk = this.allCards.slice(this.allCards.length - 5, this.allCards.length);
        newChunk = this.cardsToShowInCarousel.concat(newChunk);
        newChunk = [...new Set(newChunk)];
        var sortedReference = this.allCards;
        newChunk.sort(function (a, b) {
          return sortedReference.indexOf(a) - sortedReference.indexOf(b);
        });
        this.cardsToShowInCarousel = await newChunk;
        setTimeout(() => {
          this.carousel.select(String(this.cardsToShowInCarousel.length - 1));
        }, 100);
      }
      // else load new chunk and go prev
      else {
        var end = this.allCards.indexOf(state.currentCard);
        if (end - this.chunkSize < 0) {
          var newChunk = this.allCards.slice(0, end);
        } else {
          var newChunk = this.allCards.slice(end - this.chunkSize, end);
        }
        newChunk = this.cardsToShowInCarousel.concat(newChunk);
        newChunk = [...new Set(newChunk)];
        var sortedReference = this.allCards;
        newChunk.sort(function (a, b) {
          return sortedReference.indexOf(a) - sortedReference.indexOf(b);
        });
        this.cardsToShowInCarousel = await newChunk;
        this.carousel.activeId = String(this.cardsToShowInCarousel.indexOf(state.currentCard));
        setTimeout(() => {
          this.carousel.prev();
        }, 100);
      }
    } else {
      this.showRejection();
    }
  }
  //select the next slide
  async goToNext() {
    if (this.carousel && this.cardsToShowInCarousel && this.cardCount > 1 && this.formMode != 'edit') {
      const state = this.carouselInfo$.getValue();
      if (
        this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard) + 1] != undefined &&
        this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard) + 1] ==
          this.allCards[this.allCards.indexOf(state.currentCard) + 1]
      ) {
        this.carousel.select(String(this.cardsToShowInCarousel.indexOf(state.currentCard) + 1));
      } else if (
        this.allCards.indexOf(this.cardsToShowInCarousel[this.cardsToShowInCarousel.indexOf(state.currentCard)]) ==
        this.allCards.length - 1
      ) {
        var begin = 0;
        var end = 0;
        if (begin + this.chunkSize > this.allCards.length) {
          end = this.allCards.length;
        } else {
          end = begin + this.chunkSize;
        }
        var newChunk = this.allCards.slice(begin, end);
        newChunk = await this.cardsToShowInCarousel.concat(newChunk);
        newChunk = [...new Set(newChunk)];
        var sortedReference = this.allCards;
        newChunk = await newChunk.sort(function (a, b) {
          return sortedReference.indexOf(a) - sortedReference.indexOf(b);
        });
        this.cardsToShowInCarousel = await newChunk;
        setTimeout(() => {
          document.getElementById('slide-' + String(this.cardsToShowInCarousel.length - 1)).classList.remove('active');
          this.carousel.select('0');
        }, 100);
      } else {
        var begin = this.allCards.indexOf(state.currentCard) + 1;
        var end = 0;
        if (begin + this.chunkSize > this.allCards.length) {
          end = this.allCards.length;
        } else {
          end = begin + this.chunkSize;
        }
        var newChunk = this.allCards.slice(begin, end);
        newChunk = await this.cardsToShowInCarousel.concat(newChunk);
        newChunk = [...new Set(newChunk)];
        var sortedReference = this.allCards;
        newChunk = await newChunk.sort(function (a, b) {
          return sortedReference.indexOf(a) - sortedReference.indexOf(b);
        });
        this.cardsToShowInCarousel = await newChunk;
        setTimeout(() => {
          this.carousel.next();
        }, 100);
      }
    } else {
      this.showRejection();
    }
  }

  //opens bottom sheet with sort options. Handles the selected sort type
  openBottomSheet(): void {
    let ref = this._bottomSheet.open(BottomSheetComponent);
    ref.afterDismissed().subscribe((key: SortType) => {
      if (key) {
        this.store.dispatch(changeSorting({ sortType: key }));
      }
    });
  }

  isDisabled() {
    if (this.formMode == 'edit' || this.cardsToShowInCarousel?.length === 0) return true;

    let currCard = this.cardsToShowInCarousel ? this.cardsToShowInCarousel[this.activeSlide] : new Card(); //get the card that is currently showing

    if (currCard && currCard?.authorId && currCard.authorId !== this.uid)
      //there is an author and it is not the current user
      return true;
  }

  enableEdit() {
    if (this.formMode != 'edit') {
      // this.store.dispatch(setActiveCard({ card: this.cards[this.activeSlide] }));
      setTimeout(() => {
        this.store.dispatch(setFormMode({ mode: 'edit' }));
        this.store.dispatch(changeTab({ tab: 1 }));
      }, 20);
    }
  }

  checkLatexState() {
    if (this.cardsToShowInCarousel?.length === 0) return;
    let currCard = this.cardsToShowInCarousel[this.activeSlide]; // current card being shown

    if (currCard?.latex === 1) return 'primary';
  }

  /**
   * Handles navigation to a new card
   * if newCard is undefined the first one will be set.
   */
  private handleNewCard(newCard: Card, cards: Card[]) {
    if (!newCard) this.selectSlide(0);
    let index = cards?.findIndex((card) => card._id === newCard._id);
    this.selectSlide(index);
  }

  private selectSlide(n: number) {
    if (
      this.carousel &&
      this.cardsToShowInCarousel &&
      n >= 0 &&
      this.cardsToShowInCarousel.indexOf(this.allCards[n]) >= 0
    ) {
      if (this.formMode != 'edit') {
        this.carousel.select(String(this.cardsToShowInCarousel.indexOf(this.allCards[n])));
      } else {
        this.showRejection();
      }
    } else {
      if (this.formMode != 'edit') {
        this.initCarouselCards(n);
      } else {
        this.showRejection();
      }
    }
  }

  // function which displays infos to the user that an action is not allowed
  private showRejection(message?: string) {
    if (!message) {
      message = 'Du musst erst die Bearbeitung der Karteikarte abschließen';
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
