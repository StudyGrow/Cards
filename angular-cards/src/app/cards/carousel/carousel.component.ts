import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  HostListener,
  NgZone,
} from "@angular/core";

import { Card } from "../../models/Card";

import { Subscription, Observable, of } from "rxjs";
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
import { setFormMode } from "src/app/store/actions/actions";
import { map, share, startWith, delay } from "rxjs/operators";

import { selectUserId, newCards } from "src/app/store/selector";
import { state } from "@angular/animations";

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
  public cards$: Observable<Card[]> = this.store.select(
    (state) => state.cardsData.cards
  );
  filters$: Observable<string[]> = this.data$.pipe(map((state) => state.tags));
  filters: string[];
  cards: Card[]; //array of all the cards
  cardCount = 0;

  lastRefresh: Date;

  activeSlide = 0; //holds the slide which is currently shown
  formMode: string;

  notallowed: boolean = false;

  subscriptions$: Subscription[] = [];

  public cardCopy: Card = new Card();

  @ViewChild("mycarousel", { static: false }) public carousel: any;

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
  constructor(private store: Store<any>) {}

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
    sub = this.data$.pipe(map(newCards)).subscribe((obj) => {
      if (
        this.cards != obj.cards && //object reference has changed
        (!this.lastRefresh || this.lastRefresh < obj.date) //modified time stamp is more recent than last refresh
      ) {
        //cards have changed
        this.lastRefresh = obj.date; //update the last refresh
        this.cardCount = obj.cards.length;

        this.cards = null; //set null to explicitely refresh carousel view
        setTimeout(() => {
          this.cards = obj.cards;
          this.activeSlide = 0;
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
    if (this.activeSlide != slideEvent.relatedTarget) {
      this.activeSlide = slideEvent.relatedTarget; //update active slide
      this.store.dispatch(setActiveCardIndex({ index: this.activeSlide })); //update in store
    }
  }

  selectSlide(n: number) {
    if (this.carousel && this.cards && n >= 0 && n < this.cards.length) {
      //only update if n is index inside the cards array
      if (this.cardCount > 1 && this.formMode != "edit") {
        this.carousel.selectSlide(n);
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
      this.carousel.previousSlide();
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
      this.carousel.nextSlide();
    } else {
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
    }
  }

  isDisabled() {
    if (this.formMode == "edit" || this.uid == "") {
      return true;
    } else {
      let currCard = this.cards[this.activeSlide]; //get the card that is currently showing

      if (currCard && currCard.authorId && currCard.authorId !== this.uid) {
        //there is an author and it is not the current user
        return true;
      }
    }
    return false;
  }
  //toggle the state of the add card component
  toggleAddView(): void {
    if (this.formMode != "edit") {
      //we can only toggle it if we are not editing
      if (this.formMode === "add") {
        this.store.dispatch(setFormMode({ mode: "none" }));
      } else {
        this.store.dispatch(setFormMode({ mode: "add" }));
      }
    }
  }
  enableEdit() {
    if (this.formMode != "edit") {
      this.store.dispatch(setFormMode({ mode: "edit" }));
    }
  }
  //sets the class for the add button depending on the current formmode
  setClass() {
    return this.formMode == "add" ? "btn btn-info" : "btn btn-light";
  }
  toggleLatex(latex: HTMLElement) {
    var currCard = this.cards[this.activeSlide]; // current card being shown
    this.cardCopy = { ...currCard };

    if (latex.classList.contains("btn-info") == true) {
      this.cardCopy.latex = 0;
      latex.classList.remove("btn-info");
      latex.classList.add("btn-light");
      this.store.dispatch(updateCard({ card: this.cardCopy }));
    } else {
      this.cardCopy.latex = 1;
      latex.classList.remove("btn-light");
      latex.classList.add("btn-info");
      this.store.dispatch(updateCard({ card: this.cardCopy }));
    }
    this.checkLatexState();
  }

  checkLatexState() {
    if (!this.cards || this.cardCount == 0) {
      return "btn btn-light";
    }
    let currCard = this.cards[this.activeSlide]; // current card being shown
    if (!currCard) {
      return "btn btn-light";
    } else if (currCard.latex == 1) {
      return "btn btn-info";
    } else {
      return "btn btn-light";
    }
  }
}
