import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  HostListener,
} from "@angular/core";
import { Card } from "../../models/Card";

import {
  Subscription,
  Observable,
  of,
  combineLatest,
  BehaviorSubject,
} from "rxjs";

import {
  fadeInOnEnterAnimation,
  shakeAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";
import { Store } from "@ngrx/store";
import {
  updateCard,
  setActiveCardIndex,
} from "../../store/actions/cardActions";
import { setFormMode, changeTab } from "src/app/store/actions/actions";

import { map } from "rxjs/operators";
import { selectFilteredCards, selectUserId } from "src/app/store/selector";
import { NgbCarousel, NgbSlideEvent } from "@ng-bootstrap/ng-bootstrap";
import { NotificationsService } from "src/app/services/notifications.service";
import { WarnMessage } from "src/app/models/Notification";
import { AppState, Data, Mode } from "src/app/models/state";

import { state } from "@angular/animations";

import {
  MatBottomSheet,
  MatBottomSheetRef,
} from "@angular/material/bottom-sheet";

enum sortType {
  DATE_ASC = "dat.up",
  DATE_DSC = "dat.down",
  AUTHOR_ASC = "auth.up",
  AUTHOR_DSC = "auth.down",
  TAGS_ASC = "tags.up",
  TAGS_DSC = "tags.down",
}

@Component({
  selector: "app-bottom-sheet",
  templateUrl: "./bottom-sheet.component.html",
})
export class BottomSheetComponent {
  options: {
    key: sortType;
    value: string;
    icon?: string;
    direction?: string;
  }[] = [
    {
      key: sortType.DATE_ASC,
      value: "Datum aufsteigend",
      icon: "today",
      direction: "up",
    },
    {
      key: sortType.DATE_DSC,
      value: "Datum absteigend",
      icon: "today",
      direction: "down",
    },
    {
      key: sortType.AUTHOR_ASC,
      value: "Author aufsteigend",
      icon: "person",
      direction: "up",
    },
    {
      key: sortType.AUTHOR_DSC,
      value: "Author absteigend",
      icon: "person",
      direction: "down",
    },
    {
      key: sortType.TAGS_ASC,
      value: "Tags aufsteigend",
      icon: "local_offer",
      direction: "up",
    },
    {
      key: sortType.TAGS_DSC,
      value: "Tags absteigend",
      icon: "local_offer",
      direction: "down",
    },
  ];

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {}
  sort(key: sortType) {
    this._bottomSheetRef.dismiss(key);
  }
}

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 100 }),
    shakeAnimation(),
  ],
})
export class CarouselComponent implements OnInit, OnDestroy {
  private data$: Observable<Data> = this.store.select(
    //holds cards data from store
    "data"
  );
  private mode$: Observable<Mode> = this.store.select(
    //holds cards data from store
    "mode"
  );
  private inTypingField: boolean; //check if user is in input field
  private uid: string; //user id

  filters$: Observable<string[]> = this.mode$.pipe(map((mode) => mode.tags)); //tags selected for filtering
  filters: string[]; //tags selected for filtering
  cards: Card[]; //array of all the cards
  cardCount = 0; //counts the cards that are displayed in the carousel
  lastRefresh: Date; // holds the timestamp at which the carousel was last updated
  activeSlide = 0; //holds the slide which is currently shown
  formMode: string; // mode in which the form is displayed either add or edit
  notallowed: boolean = false; //wether an action is allowed or not

  subscriptions$: Subscription[] = []; //holds all subscriptions from observables they are unsubscribed in ngOnDestroy

  sortOption$: BehaviorSubject<{
    type: sortType;
    date: Date;
  }> = new BehaviorSubject({ type: undefined, date: undefined }); //subject which holds the type of sorting for the cards. undefined if the user has done no selection

  @ViewChild("mycarousel", { static: false }) public carousel: NgbCarousel; //ref to the ngbootsrap carousel

  @HostListener("window:keyup", ["$event"]) handleKeyDown(
    event: KeyboardEvent
  ) {
    if (!this.inTypingField) {
      //allow arrow keys navigation if user is not in an input field
      if (event.key == "ArrowRight") {
        this.goToNext();
      } else if (event.key == "ArrowLeft") {
        this.goToPrev();
      }
    }
  }
  @HostListener("swipeleft", ["$event"]) public swipePrev(event: any) {
    this.goToNext();
  }
  @HostListener("swiperight", ["$event"]) public swipeNext(event: any) {
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
    sub = this.mode$.pipe(map((state) => state.typingMode)).subscribe((val) => {
      this.inTypingField = val;
    });
    this.subscriptions$.push(sub);

    //handles new slide indexes received from other components
    sub = this.mode$
      .pipe(map((state) => state.activeIndex))
      .subscribe((val) => {
        this.hanldeNewIndex(val);
      });
    this.subscriptions$.push(sub);

    //get the user id to check if user has the rigth to edit the card
    sub = this.store.pipe(map(selectUserId)).subscribe((id) => {
      if (this.uid !== id) {
        this.uid = id;
      }
    });
    this.subscriptions$.push(sub);

    let filtered$ = this.mode$.pipe(map((state) => state.filterChanged)); //observable of timestamp at which user has modified the selected tags for filtering
    let added$ = this.data$.pipe(map((state) => state.cardData.lastUpdated)); //observable of timestamp at the cards were last modified

    //observable which holds the maximum of filtered$ and added$ which represents the lastChanges which were made
    let lastChanges$ = combineLatest([filtered$, added$]).pipe(
      map(([d1, d2]) =>
        !d1 && !d2 ? 0 : Math.max(d1?.getTime() || 0, d2?.getTime())
      )
    );

    //observable which holds the final cards which should be displayed in the carousel (filtered and sorted)
    sub = combineLatest(
      this.sortOption$.asObservable(),
      lastChanges$,
      this.store.pipe(map(selectFilteredCards))
    )
      .pipe(
        map(([sortType, lastChanges, cards]) => {
          if (sortType.date && sortType.date > this.lastRefresh) {
            return CarouselComponent.sortCards(
              sortType.type,
              new Date(lastChanges),
              cards
            );
          } else {
            return { date: lastChanges, cards: cards };
          }
        })
      )
      .subscribe(
        (obj: {
          date: Date; //modified datestamp holding last timestamp at which cards have been modified
          cards: Card[];
        }) => {
          if (
            obj.cards.length > 0 &&
            (!this.lastRefresh || this.lastRefresh < obj.date)
          ) {
            //cards have changed
            this.lastRefresh = obj.date; //update the last refresh time
            this.cardCount = obj.cards.length;
            // this.activeSlide = 0; reset the active index to the first card

            this.cards = null; //set null to explicitely refresh carousel view
            setTimeout(() => {
              this.cards = [...obj.cards];
              // setTimeout(() => {
              //   this.selectSlide(0);
              // }, 100);
            }, 100);
          }
        }
      );

    this.subscriptions$.push(sub);
  }

  //this function updates the current slide index in the store and for the component
  onSlide(slideEvent: NgbSlideEvent) {
    let newindex = Number.parseInt(slideEvent.current);
    if (this.activeSlide != newindex) {
      this.activeSlide = newindex;
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
      this.formMode != "edit"
    ) {
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
      this.formMode != "edit"
    ) {
      this.carousel.next();
    } else {
      this.showRejection();
    }
  }

  //opens bottom sheet with sort options. Handles the selected sort type
  openBottomSheet(): void {
    let ref = this._bottomSheet.open(BottomSheetComponent);
    ref.afterDismissed().subscribe((key: sortType) => {
      if (key) {
        this.sortOption$.next({ type: key, date: new Date() });
      }
    });
  }

  isDisabled() {
    if (this.formMode == "edit" || this.cards?.length === 0) return true;

    let currCard = this.cards ? this.cards[this.activeSlide] : new Card(); //get the card that is currently showing

    if (currCard && currCard?.authorId && currCard.authorId !== this.uid)
      //there is an author and it is not the current user
      return true;
  }

  enableEdit() {
    if (this.formMode != "edit") {
      this.store.dispatch(setFormMode({ mode: "edit" }));
      this.store.dispatch(changeTab({ tab: 1 }));
    }
  }

  checkLatexState() {
    if (this.cards?.length === 0) return;
    let currCard = this.cards[this.activeSlide]; // current card being shown

    if (currCard?.latex === 1) return "primary";
  }

  private selectSlide(n: number) {
    if (this.carousel && this.cards && n >= 0 && n < this.cardCount) {
      //only update if n is index inside the cards array
      if (this.formMode != "edit") {
        this.carousel.select(n.toString());
      } else {
        this.showRejection();
      }
    }
  }

  //this function does some adjustments if the index is out of bounds of card array
  private hanldeNewIndex(index: number) {
    if (this.carousel && index !== this.activeSlide) {
      //got a new index
      if (index == -1) {
        //handy if you want to go to the last slide but dont know the number of cards in the component where the action is dispatched
        index = this.cardCount - 1;
      } else if (index >= this.cardCount) {
        index = 0;
      }
      this.selectSlide(index); //select new slide
    }
  }

  private static sortCards(
    type: sortType,
    date: Date,
    cards: Card[]
  ): { date: Date; cards: Card[] } {
    let result = { cards: cards, date: date };
    result.date = new Date(); //will be overwritten by initial date if no change is made
    switch (type) {
      case sortType.DATE_ASC:
        result.cards = [...cards].sort((a, b) => {
          if (!a.date && !b.date) return 0;
          if (!a.date) return 1;
          if (!b.date) return -1;
          if (new Date(a.date).getTime() < new Date(b.date).getTime())
            return -1;
          if (new Date(a.date).getTime() > new Date(b.date).getTime()) return 1;
          return 0;
        });
        break;
      case sortType.DATE_DSC:
        result.cards = [...cards].sort((a, b) => {
          if (!a.date && !b.date) return 0;
          if (!a.date) return 1;
          if (!b.date) return -1;
          if (new Date(a.date).getTime() > new Date(b.date).getTime())
            return -1;
          if (new Date(a.date).getTime() < new Date(b.date).getTime()) return 1;
          return 0;
        });
        break;
      case sortType.AUTHOR_ASC:
        result.cards = [...cards].sort((a, b) => {
          if (!a.authorName && !b.authorName) return 0;
          if (!a.authorName) return 1;
          if (!b.authorName) return -1;
          if (a.authorName < b.authorName) return -1;
          if (a.authorName > b.authorName) return 1;
          return 0;
        });
        break;
      case sortType.AUTHOR_DSC:
        result.cards = [...cards].sort((a, b) => {
          if (!a.authorName && !b.authorName) return 0;
          if (!a.authorName) return 1;
          if (!b.authorName) return -1;
          if (a.authorName > b.authorName) return -1;
          if (a.authorName < b.authorName) return 1;
          return 0;
        });
        break;
      case sortType.TAGS_ASC:
        result.cards = [...cards].sort((a, b) => {
          if (!a.tags && !b.tags) return 0;
          if (!a.tags) return 1;
          if (!b.tags) return -1;
          if (a.tags[0] > b.tags[0]) return 1;
          if (a.tags[0] < b.tags[0]) return -1;
          return 0;
        });
        break;
      case sortType.TAGS_DSC:
        result.cards = [...cards].sort((a, b) => {
          if (!a.tags && !b.tags) return 0;
          if (!a.tags) return 1;
          if (!b.tags) return -1;
          if (a.tags[0] > b.tags[0]) return -1;
          if (a.tags[0] < b.tags[0]) return 1;
          return 0;
        });
        break;
      default:
        result.date = date; //no changes were made so reset to initial date
        break;
    }

    return result;
  }

  // function which displays infos to the user that an action is not allowed
  private showRejection(message?: string) {
    if (!message) {
      message = "Du musst erst die Bearbeitung der Karteikarte abschließen";
    }
    if (this.formMode == "edit") {
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
