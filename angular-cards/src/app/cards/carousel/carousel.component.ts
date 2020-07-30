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
import { combineLatest } from "rxjs/index";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducer";
import {
  updateCard,
  setActiveCardIndex,
} from "../../store/actions/cardActions";
import { setFormMode } from "src/app/store/actions/actions";
import { map, share, startWith, delay } from "rxjs/operators";

import { selectUserId, selectFilteredCards } from "src/app/store/selector";
import { state } from "@angular/animations";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
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
  private uid: string;
  public cards$: Observable<Card[]> = this.store.select(
    (state) => state.cardsData.cards
  );
  filters$: Observable<string[]> = this.data$.pipe(map((state) => state.tags));
  cards: Card[]; //array of all the cards
  cardCount = 0;
  filteredCards$: Observable<Card[]> = this.data$.pipe(
    map(selectFilteredCards),
    delay(200)
  );

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
      if (this.carousel && event.key == "ArrowRight") {
        this.goToNext();
      } else if (this.carousel && event.key == "ArrowLeft") {
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
    sub = this.filteredCards$.subscribe((cards) => {
      this.cardCount = cards.length;
    });

    this.subscriptions$.push(sub);

    sub = this.data$.pipe(map(selectUserId)).subscribe((id) => {
      this.uid = id;
    });

    this.subscriptions$.push(sub);
    sub = this.filteredCards$.subscribe((cards) => {
      if (!this.cards) {
        setTimeout(() => {
          this.cards = cards;
        }, 200);
      } else if (this.cards != cards) {
        //cards have changed
        this.cards = null;
        setTimeout(() => {
          this.cards = cards;
        }, 200);
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
    console.log(index);
    if (this.carousel && index !== this.activeSlide) {
      //got a new index
      if (index == -1) {
        //handy if you want to go to the last slide but dont know the number of calls in the component where the action is dispatched
        index = this.cardCount - 1;
      } else if (index >= this.cardCount) {
        index = 0;
      }
      this.carousel.selectSlide(index); //select new slide
    }
  }
  //this function update the current slide index
  onSlide(slideEvent) {
    this.activeSlide = slideEvent.relatedTarget; //update active slide

    this.store.dispatch(setActiveCardIndex({ index: this.activeSlide })); //update in store
  }

  selectSlide(n: number) {
    if (this.carousel && n && this.cardCount > 1 && this.formMode != "edit") {
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
      rand = Math.floor(Math.random() * this.cardCount); //random Cardindex
    }
    if (this.carousel) {
      this.carousel.selectSlide(rand);
    }
  }
  goToPrev(length?: number) {
    if (this.carousel && this.cardCount > 1 && this.formMode != "edit") {
      this.carousel.previousSlide();
    } else {
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
    }
  }
  goToNext(length?: number) {
    if (this.carousel && this.cardCount > 1 && this.formMode != "edit") {
      this.carousel.nextSlide();
    } else {
      this.notallowed = true;
      setTimeout(() => {
        this.notallowed = false;
      }, 100);
    }
  }

  isDisabled() {
    if (this.formMode == "edit" || !this.cards || this.cardCount == 0) {
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
