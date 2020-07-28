import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  HostListener,
} from "@angular/core";

import { Card } from "../../models/Card";

import { Subscription, Observable } from "rxjs";
import {
  fadeInOnEnterAnimation,
  shakeAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";

import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducer";
import { setActiveCardIndex } from "../../store/actions/cardActions";
import { setFormMode } from "src/app/store/actions/actions";
import { map, share } from "rxjs/operators";

import { selectCards, selectUserId } from "src/app/store/selector";
import { state } from "@angular/animations";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    shakeAnimation(),
  ],
})
export class CarouselComponent implements OnInit, OnDestroy {
  private inTypingField: boolean;

  private data$: Observable<AppState> = this.store
    .select(
      //holds cards data from store
      "cardsData"
    )
    .pipe(share());

  loading: boolean;
  cards: Card[]; //array of all the cards
  activeSlide = 0; //holds the slide which is currently shown
  formMode: string;
  filters: string[];
  notallowed: boolean = false;

  subscriptions$: Subscription[] = [];

  @ViewChild("mycarousel", { static: false }) public carousel: any;

  @HostListener("window:keyup", ["$event"]) handleKeyDown(
    event: KeyboardEvent
  ) {
    if (!this.inTypingField) {
      if (this.carousel && event.key == "ArrowRight") {
        this.goToNext();
      } else if (this.carousel && event.key == "ArrowLeft") {
        this.goToPrev();
      }
    }
  }
  private uid: string; //array of all the cards

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    let sub = this.data$
      .pipe(map((state) => state.formMode))
      .subscribe((mode) => {
        this.formMode = mode;
      });
    this.subscriptions$.push(sub);

    sub = this.data$.pipe(map((state) => state.typingMode)).subscribe((val) => {
      this.inTypingField = val;
    });
    this.subscriptions$.push(sub);

    sub = this.data$
      .pipe(map((state) => state.activeIndex))
      .subscribe((val) => {
        this.hanldeNewIndex(val);
      });
    this.subscriptions$.push(sub);
    sub = this.data$.pipe(map((state) => state.tags)).subscribe((tags) => {
      console.log(tags);
      this.filters = tags;
      console.log(this.filters);
    });
    this.subscriptions$.push(sub);
    sub = this.store
      .select(
        //holds cards data from store
        "cardsData"
      )
      .pipe(map(selectCards))
      .subscribe((cards) => {
        this.cards = this.applyFilter(cards);
      });

    this.subscriptions$.push(sub);

    sub = this.data$.pipe(map(selectUserId)).subscribe((id) => {
      this.uid = id;
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
      if (index < 0) {
        index = this.cards.length - 1;
      } else if (index >= this.cards.length) {
        index = 0;
      }
      this.carousel.selectSlide(index); //select new slide
    }
  }
  //this function update the current slide index
  onSlide(slideEvent) {
    this.activeSlide = slideEvent.relatedTarget; //update active slide
    if (slideEvent.relatedTarget) {
      this.store.dispatch(setActiveCardIndex({ index: this.activeSlide })); //update in store
    }
  }

  selectSlide(n: number) {
    if (
      this.carousel &&
      n &&
      this.cards.length > 1 &&
      this.formMode != "edit"
    ) {
      this.carousel.selectSlide(n);
    } else {
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
    }
  }
  showRandomCard() {
    var rand: number = this.activeSlide;
    var count = 0;
    while (count < 5 && rand == this.activeSlide) {
      //calculate a new random index
      count++;
      rand = Math.floor(Math.random() * this.cards.length); //random Cardindex
    }
    if (this.carousel) {
      this.carousel.selectSlide(rand);
    }
  }
  goToPrev() {
    if (this.carousel && this.cards.length > 1 && this.formMode != "edit") {
      this.carousel.previousSlide();
    } else {
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
    }
  }
  goToNext() {
    if (this.carousel && this.cards.length > 1 && this.formMode != "edit") {
      this.carousel.nextSlide();
    } else {
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
    }
  }

  isDisabled() {
    if (this.formMode == "edit" || !this.cards || this.cards.length == 0) {
      return true;
    }
    let currCard = this.cards[this.activeSlide]; //get the card that is currently showing

    if (!currCard) {
      return true;
    }

    if (!currCard.authorId) {
      //there is a card, but there is no author
      return false;
    }

    if (!this.uid || currCard.authorId !== this.uid) {
      //there is an author an it is not the user
      return true;
    }
  }
  toggleAddView(): void {
    if (this.formMode != "edit") {
      if (this.formMode == "add") {
        this.store.dispatch(setFormMode({ mode: "none" }));
      } else {
        this.store.dispatch(setFormMode({ mode: "add" }));
      }
    }
  }
  enableEdit() {
    this.store.dispatch(setFormMode({ mode: "edit" }));
  }

  setClass() {
    return this.formMode == "add" ? "btn btn-info" : "btn btn-light";
  }
  applyFilter(cards: Card[]): Card[] {
    console.log(this.filters);
    if (!this.filters || this.filters.length === 0) {
      return cards;
    }
    let res = cards.filter((card) => {
      for (const tag of this.filters) {
        if (!card.tags) {
          return false;
        }
        if (card.tags.includes(tag)) {
          return true;
        }
      }
      return false;
    });
    return res;
  }
}
