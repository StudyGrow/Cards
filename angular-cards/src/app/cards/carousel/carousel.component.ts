import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { Card } from '../../models/Card';

import { Subscription, Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { fadeInOnEnterAnimation, shakeAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Store } from '@ngrx/store';

import { setFormMode, changeTab, changeSorting, updateCarouselInfo } from 'src/app/store/actions/StateActions';

import {
  debounceTime,
  delay,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  first,
  map,
  take,
  withLatestFrom,
} from 'rxjs/operators';

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
  CardIndices,
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
  readonly chunkSize = 3;
  start$ = this.store.select(CardIndices).pipe(map(([start, end, curr]) => start));
  start: number;
  end: number;
  end$ = this.store.select(CardIndices).pipe(map(([start, end, curr]) => end));

  formMode: string; // mode in which the form is displayed either add or edit
  notallowed: boolean = false; //wether an action is allowed or not
  authorized$ = this.store.select(authorized);

  // prevSlide = 0; //holds the slide which is currently shown

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

    // sub = this.route.queryParams.subscribe((params) => {
    //   let id = params['card'];
    //   if (id) {
    //     if (this.cards.find((card) => card._id)) {
    //     }
    //   }
    // });
    // this.subscriptions$.push(sub);

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
      // console.log('LLOOOAADD');
      if (cards?.length > 0 && (!this.lastRefresh || this.lastRefresh < date)) {
        //cards have changed
        this.lastRefresh = new Date().getTime(); //update the last refresh time
        this.cardCount = cards?.length;

        // this.activeSlide = 0; reset the active index to the first card
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
   */
  initCarouselCards() {
    const prevState = this.carouselInfo$.getValue();
    let newState = new CarouselInfo();
    if (!prevState.updateAt) {
      newState.start = 0;
      newState.end = this.chunkSize;

      if (this.allCards?.length > 0) {
        newState.currentCard = this.allCards[0];
        newState.currentIndex = newState.start;
      }

      this.carouselInfo$.next(newState);

      newState.updateAt = new Date();
      setTimeout(() => {
        this.cardsToShowInCarousel = this.allCards.slice(newState.start, newState.end);
      }, 150);
    }
  }
  /**
   * refreshes cards to show in carousel. This function is called in 2 scenarios
   * - user tries to slide to card of new chunk
   * - cards have changed in the store (e.g. user has added a card)
   */
  refreshCarouselCards() {
    if (this.cardsToShowInCarousel === undefined) {
      this.initCarouselCards();
      return;
    }
  }

  //this function updates the current slide index in the store and for the component
  onSlide(slideEvent: NgbSlideEvent) {
    const currSlideIndex: number = Number.parseInt(slideEvent.current);
    const prevState = this.carouselInfo$.getValue();
    console.log(prevState);
    this.activeSlide = currSlideIndex;
    console.log(slideEvent);

    // readonly carouselInfo$ = new BehaviorSubject<{start:number,end:number,currentIndex:number,currentCard:Card}>(undefined);
    let newState: CarouselInfo = new CarouselInfo();
    if (!prevState.updateAt) {
      this.initCarouselCards();
    }
    // X X X Y
    //       X X X Y
    // check if new slice should be loaded by carousel
    // know current index of card shown, check if next new slice should be used
    //
    else {
      //use refreshCarousel() to do this

      console.log('EEELLLSEE');

      if (currSlideIndex == prevState.end - 1) {
        newState.start = prevState.end;
        newState.end = prevState.end + 3;
        newState.currentCard = this.allCards[currSlideIndex + this.chunkSize];
        newState.currentIndex = currSlideIndex;
        newState.updateAt = new Date();
        this.cardsToShowInCarousel = null; //set null to explicitely refresh carousel view
        console.log(this.allCards, this.cardsToShowInCarousel);

        console.log(this.cardsToShowInCarousel);
        console.log(this.cardsToShowInCarousel.slice(prevState.end, prevState.end + 3));
        setTimeout(() => {
          this.cardsToShowInCarousel = this.allCards.slice(prevState.end, prevState.end + 3);
        }, 150);
        console.log('this.allcards');
        console.log(this.allCards);
        this.carouselInfo$.next(newState);
      }
    }
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
  goToPrev() {
    if (this.carousel && this.cardsToShowInCarousel && this.cardCount > 1 && this.formMode != 'edit') {
      // this.store.dispatch(
      //   adjustIndeces({
      //     allCards: this.allCards,
      //     newIndex: this.activeSlide - 1,
      //   })
      // );

      this.carousel.prev();
    } else {
      this.showRejection();
    }
  }
  //select the next slide
  goToNext() {
    if (this.carousel && this.cardsToShowInCarousel && this.cardCount > 1 && this.formMode != 'edit') {
      // this.store.dispatch(
      //   adjustIndeces({
      //     allCards: this.allCards,
      //     newIndex: this.activeSlide + 1,
      //   })
      // );

      this.carousel.next();
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

  //this function does some adjustments if the index is out of bounds of card array
  private handleNewCard(newCard: Card, cards: Card[]) {
    if (!newCard?._id) return;

    const carouselinfo = this.carouselInfo$.getValue();
    let index = cards?.findIndex((card) => card._id === newCard._id);
    if (index >= 0 && index < cards.length) {
      //prevent setting an invalid index

      if (index !== this.activeSlide) {
        //got a new index
        let newState = new CarouselInfo();
        newState.currentCard = newCard;
        newState.currentIndex = index;
        if (carouselinfo.start > index || index >= carouselinfo.end) {
          //the index is not in the current slice, we need to update the start and end

          newState.start = index;
          newState.end = index + this.chunkSize < cards.length ? index + this.chunkSize : cards.length - 1;
        }
        this.carouselInfo$.next(newState);

        if (this.cardsToShowInCarousel) {
          this.selectSlide(index); //select new slide
        } else {
          this.activeSlide = index;
        }
      }
    }
  }

  private selectSlide(n: number) {
    if (this.carousel && this.cardsToShowInCarousel && n >= 0 && n < this.cardCount) {
      //only update if n is index inside the cards array
      if (this.formMode != 'edit') {
        this.carousel.select(n.toString());
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
