import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { Card } from '../../models/Card';

import { Subscription, Observable, combineLatest, BehaviorSubject } from 'rxjs';

import {
  fadeInOnEnterAnimation,
  shakeAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';
import { Store } from '@ngrx/store';

import {
  setFormMode,
  changeTab,
  setActiveCardIndex,
  setActiveCard,
  changeSorting,
  adjustIndeces,
} from 'src/app/store/actions/StateActions';

import { debounceTime, delay, distinctUntilChanged, map } from 'rxjs/operators';

import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'src/app/services/notifications.service';
import { WarnMessage } from 'src/app/models/Notification';
import { AppState, Data, Mode } from 'src/app/models/state';

import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Vote } from 'src/app/models/Vote';
import { sortOptions } from './sortOptions';
import { SortType } from 'src/app/models/SortType';
import { AllCards, DisplayedCards, UserId } from 'src/app/store/selector';

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

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {
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
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 100 }),
    shakeAnimation(),
  ],
})
export class CarouselComponent implements OnInit, OnDestroy {
  private data$: Observable<Data> = this.store.select(
    //holds cards data from store
    'data'
  );
  private mode$: Observable<Mode> = this.store.select(
    //holds cards data from store
    'mode'
  );
  private inTypingField: boolean; //check if user is in input field
  private uid: string; //user id

  allCards: Card[];
  tmp: Card[];

  loading: boolean;

  public cards$: Observable<Card[]> = this.data$.pipe(
    map((data) => data.cardData.cards)
  );
  filters$: Observable<string[]> = this.mode$.pipe(map((mode) => mode.tags));
  filters: string[];
  cards: Card[]; //array of all the cards
  cardCount = 0; //counts the cards that are displayed in the carousel
  lastRefresh: number; // holds the timestamp at which the carousel was last updated
  activeSlide = 0; //holds the slide which is currently shown
  readonly initialSlide = 0;

  formMode: string; // mode in which the form is displayed either add or edit
  notallowed: boolean = false; //wether an action is allowed or not

  prevSlide = 0; //holds the slide which is currently shown

  subscriptions$: Subscription[] = []; //holds all subscriptions from observables they are unsubscribed in ngOnDestroy

  sortOption$: BehaviorSubject<{
    type: SortType;
    date: Date;
  }> = new BehaviorSubject({ type: undefined, date: undefined }); //subject which holds the type of sorting for the cards. undefined if the user has done no selection

  @ViewChild('mycarousel', { static: false }) public carousel: NgbCarousel; //ref to the ngbootsrap carousel

  @HostListener('window:keyup', ['$event']) handleKeyDown(
    event: KeyboardEvent
  ) {
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
    private notifs: NotificationsService
  ) {}

  ngOnInit(): void {
    //Form Mode, depending on the mode different actions are not allowed
    let sub = this.mode$
      .pipe(map((state) => state.formMode))
      .subscribe((mode) => {
        this.formMode = mode;
      });
    this.subscriptions$.push(sub);

    //see if user is in a typing field. (If so we disable carousel navigation with arrows)
    sub = this.mode$
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

    let filtered$ = this.mode$.pipe(map((state) => state.cardsChanged)); //observable of timestamp at which user has modified the way cards are displayed
    let added$ = this.data$.pipe(map((state) => state.cardData.lastUpdated)); //observable of timestamp at the cards were last modified

    //observable which holds the maximum of filtered$ and added$ which represents the lastChanges which were made
    let lastChanges$ = combineLatest([filtered$, added$]).pipe(
      map(([d1, d2]) =>
        !d1 && !d2 ? 0 : Math.max(d1?.getTime() || 0, d2?.getTime())
      )
    );

    //observable which holds the final cards which should be displayed in the carousel (filtered and sorted)
    sub = combineLatest([this.store.select(DisplayedCards), lastChanges$])
      .pipe(debounceTime(5))
      .subscribe(([cards, date]) => {
        if (
          cards?.length > 0 &&
          (!this.lastRefresh || this.lastRefresh < date)
        ) {
          //cards have changed
          this.lastRefresh = date; //update the last refresh time
          this.cardCount = cards?.length;
          // this.activeSlide = 0; reset the active index to the first card

          this.cards = null; //set null to explicitely refresh carousel view
          //cards have changed
          this.lastRefresh = new Date().getTime(); //update the last refresh time
          this.cardCount = cards?.length;
          // this.activeSlide = 0; reset the active index to the first card
          this.tmp = [...cards];
          this.cards = null; //set null to explicitely refresh carousel view

          setTimeout(() => {
            this.cards = [...cards];
          }, 150);
        }
      });

    this.subscriptions$.push(sub);
    sub = this.store.pipe(map(AllCards)).subscribe((cards) => {
      this.allCards = cards;
    });

    this.subscriptions$.push(sub);
    //handles new slide indexes received from other components
    sub = this.mode$
      .pipe(
        delay(20),
        map((state) => state.currentCard),
        distinctUntilChanged((prev, curr) => prev?._id === curr?._id)

        // debounceTime(20),
      )
      .subscribe((newCard) => {
        this.handleNewCard(newCard); //adjust the index to show the new card
      });
    this.subscriptions$.push(sub);
  }

  //this function updates the current slide index in the store and for the component
  onSlide(slideEvent: NgbSlideEvent) {
    let newindex = Number.parseInt(slideEvent.current);
    this.activeSlide = newindex;
    if (this.cards) {
      this.store.dispatch(setActiveCardIndex({ index: this.activeSlide }));
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
    if (
      this.carousel &&
      this.cards &&
      this.cardCount > 1 &&
      this.formMode != 'edit'
    ) {
      this.store.dispatch(
        adjustIndeces({
          allCards: this.allCards,
          newIndex: this.activeSlide - 1,
        })
      );

      this.carousel.prev();
    } else {
      this.showRejection();
    }
  }
  //select the next slide
  goToNext() {
    if (
      this.carousel &&
      this.cards &&
      this.cardCount > 1 &&
      this.formMode != 'edit'
    ) {
      console.log(this.activeSlide);
      this.store.dispatch(
        adjustIndeces({
          allCards: this.allCards,
          newIndex: this.activeSlide + 1,
        })
      );

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
    if (this.formMode == 'edit' || this.cards?.length === 0) return true;

    let currCard = this.cards ? this.cards[this.activeSlide] : new Card(); //get the card that is currently showing

    if (currCard && currCard?.authorId && currCard.authorId !== this.uid)
      //there is an author and it is not the current user
      return true;
  }

  enableEdit() {
    if (this.formMode != 'edit') {
      this.store.dispatch(setFormMode({ mode: 'edit' }));
      this.store.dispatch(changeTab({ tab: 1 }));
    }
  }

  checkLatexState() {
    if (this.cards?.length === 0) return;
    let currCard = this.cards[this.activeSlide]; // current card being shown

    if (currCard?.latex === 1) return 'primary';
  }

  //this function does some adjustments if the index is out of bounds of card array
  private handleNewCard(newCard: Card) {
    if (!newCard?._id) {
      return;
    }
    let index = this.tmp?.findIndex((card) => card._id === newCard._id);

    if (index >= 0 && index < this.cardCount) {
      //prevent setting an invalid index

      if (index !== this.activeSlide) {
        //got a new index

        if (this.cards !== null) {
          this.selectSlide(index); //select new slide
        } else {
          this.activeSlide = index;
        }
      }
    }
  }
  private selectSlide(n: number) {
    if (this.carousel && this.cards && n >= 0 && n < this.cardCount) {
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

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
