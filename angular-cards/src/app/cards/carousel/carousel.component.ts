import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  HostListener,
  NgZone,
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
import { AppState } from "src/app/store/reducer";
import { resetFilter } from "../../store/actions/actions";
import {
  updateCard,
  setActiveCardIndex,
} from "../../store/actions/cardActions";
import { setFormMode, changeTab } from "src/app/store/actions/actions";
import { map, share, startWith, delay, withLatestFrom } from "rxjs/operators";

import { selectUserId, newCards } from "src/app/store/selector";
import { state } from "@angular/animations";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from "@angular/material/bottom-sheet";
import { MatSelectionListChange } from "@angular/material/list";

enum sortType {
  DATE_ASC = "dat.up",
  DATE_DSC = "dat.down",
  AUTHOR_ASC = "auth.up",
  AUTHOR_DSC = "auth.down",
}

@Component({
  selector: "app-bottom-sheet",
  templateUrl: "./bottom-sheet.component.html",
})
export class BottomSheetComponent {
  options: { key: string; value: string }[] = [
    { key: "dat.up", value: "Datum aufst." },
    { key: "dat.down", value: "Datum abst." },
    { key: "auth.up", value: "Author aufst." },
    { key: "auth.down", value: "Author abst." },
  ];

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {}
  sort(e: MatSelectionListChange) {
    this._bottomSheetRef.dismiss(e.options[0]?.value);
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
  private inTypingField: boolean;

  private data$: Observable<AppState> = this.store.select(
    //holds cards data from store
    "cardsData"
  );

  loading: boolean;
  private uid: string = "";

  filters$: Observable<string[]> = this.data$.pipe(map((state) => state.tags));
  filters: string[];
  cards: Card[]; //array of all the cards
  cardCount = 0;

  lastRefresh: Date;

  activeSlide = 0; //holds the slide which is currently shown
  formMode: string;

  notallowed: boolean = false;

  subscriptions$: Subscription[] = [];

  sortOption$ = new BehaviorSubject(undefined);

  @ViewChild("mycarousel", { static: false }) public carousel: NgbCarousel;

  @HostListener("window:keyup", ["$event"]) handleKeyDown(
    event: KeyboardEvent
  ) {
    if (!this.inTypingField) {
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
    private store: Store<any>,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    //Form Mode, depending on the mode we show different forms (add, edit,none)
    let sub = this.data$
      .pipe(map((state) => state.formMode))
      .subscribe((mode) => {
        this.formMode = mode;
      });
    this.subscriptions$.push(sub);

    //see if user is in a typing field, If so we disable carousel navigation with arrows
    sub = this.data$.pipe(map((state) => state.typingMode)).subscribe((val) => {
      this.inTypingField = val;
    });
    this.subscriptions$.push(sub);

    //gets new slide indexes
    sub = this.data$
      .pipe(map((state) => state.activeIndex))
      .subscribe((val) => {
        this.hanldeNewIndex(val);
      });
    this.subscriptions$.push(sub);

    //get The user id to check if user has rigths to edit the card
    sub = this.data$.pipe(map(selectUserId)).subscribe((id) => {
      if (this.uid !== id) {
        this.uid = id;
      }
    });
    this.subscriptions$.push(sub);

    //get new cards, either if on new route, or filter is applied

    sub = combineLatest(
      this.sortOption$.asObservable(),
      this.data$.pipe(map(newCards))
    )
      .pipe(map(([sortType, obj]) => this.sortCards(obj, sortType)))
      .subscribe((obj) => {
        if (
          this.cards != obj.cards && //object reference has changed
          (!this.lastRefresh || this.lastRefresh < obj.date) //modified time stamp is more recent than last refresh
        ) {
          //cards have changed
          this.lastRefresh = obj.date; //update the last refresh
          this.cardCount = obj.cards.length;
          this.activeSlide = 0;

          this.cards = null; //set null to explicitely refresh carousel view
          setTimeout(() => {
            this.cards = [...obj.cards];
            setTimeout(() => {
              this.selectSlide(0);
            }, 100);
          }, 100);
        }
      });
    this.subscriptions$.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  //this function does some adjustments if the index is out of bounds
  hanldeNewIndex(index: number) {
    if (this.carousel && index !== this.activeSlide) {
      //got a new index
      if (index == -1) {
        //handy if you want to go to the last slide but dont know the number of calls in the component where the action is dispatched
        index = this.cardCount - 1;
      } else if (index >= this.cardCount) {
        index = 0;
      }
      this.selectSlide(index); //select new slide
    }
  }
  //this function updates the current slide index in the store and for the component
  onSlide(slideEvent) {
    if (this.activeSlide != slideEvent.current) {
      this.activeSlide = slideEvent.current; //update active slide
      this.store.dispatch(setActiveCardIndex({ index: this.activeSlide })); //update in store
    }
  }

  selectSlide(n: number) {
    if (this.carousel && this.cards && n >= 0 && n < this.cardCount) {
      //only update if n is index inside the cards array
      if (this.formMode != "edit") {
        this.carousel.select(n.toString());
      } else {
        this.notallowed = true;
        setTimeout(() => {
          this.notallowed = false;
        }, 100);
      }
    }
  }

  showRandomCard() {
    let rand: number = this.activeSlide;
    let count = 0; //prevent infinite recalculations
    while (count < 5 && rand == this.activeSlide) {
      //get a NEW random index
      //calculate a new random index
      count++;
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
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
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
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
    }
  }

  sortCards(
    obj: { date: Date; cards: Card[] },
    type: string
  ): { date: Date; cards: Card[] } {
    let cards = obj.cards ? [...obj.cards] : [];
    switch (type) {
      case sortType.DATE_ASC:
        obj.date = new Date();
        cards.sort((a, b) => {
          if (new Date(a.date).getTime() < new Date(b.date).getTime())
            return -1;
          if (new Date(a.date).getTime() > new Date(b.date).getTime()) return 1;
          return 0;
        });
        break;
      case sortType.DATE_DSC:
        obj.date = new Date();
        cards.sort((a, b) => {
          if (new Date(a.date).getTime() > new Date(b.date).getTime())
            return -1;
          if (new Date(a.date).getTime() < new Date(b.date).getTime()) return 1;
          return 0;
        });
        break;
      case sortType.AUTHOR_ASC:
        obj.date = new Date();
        cards.sort((a, b) => {
          if (a.authorName < b.authorName) return -1;
          if (a.authorName > b.authorName) return 1;
          return 0;
        });
        break;
      case sortType.AUTHOR_DSC:
        obj.date = new Date();
        cards.sort((a, b) => {
          if (a.authorName > b.authorName) return -1;
          if (a.authorName < b.authorName) return 1;
          return 0;
        });
        break;
    }
    obj.cards = cards;

    return obj;
  }

  openBottomSheet(): void {
    let ref = this._bottomSheet.open(BottomSheetComponent);
    ref.afterDismissed().subscribe((value) => {
      console.log(value);
      this.sortOption$.next(value);
    });
  }

  isDisabled() {
    if (this.formMode == "edit" || this.cards?.length === 0) return true;

    let currCard = this.cards ? this.cards[this.activeSlide] : new Card(); //get the card that is currently showing

    if (currCard && currCard?.authorId && currCard.authorId !== this.uid)
      //there is an author and it is not the current user
      return true;
  }
  //toggle the state of the add card component
  toggleAddView(): void {}
  enableEdit() {
    if (this.formMode != "edit") {
      this.store.dispatch(setFormMode({ mode: "edit" }));
      this.store.dispatch(changeTab({ tab: 1 }));
    }
  }

  toggleLatex() {
    let currCard = this.cards[this.activeSlide]; // current card being shown
    this.store.dispatch(
      updateCard({ card: { ...currCard, latex: 1 - currCard.latex } })
    );
  }

  checkLatexState() {
    if (this.cards?.length === 0) return;
    let currCard = this.cards[this.activeSlide]; // current card being shown

    if (currCard?.latex === 1) return "primary";
  }
}
