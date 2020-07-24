import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  HostListener,
  Input,
} from "@angular/core";

import { StatesService } from "../../services/states.service";

import { Card } from "../../models/Card";

import { UserService } from "../../services/user.service";
import { Subscription } from "rxjs";
import {
  fadeInOnEnterAnimation,
  shakeAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";
import { CardsService } from "src/app/services/cards.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducer";
import { setActiveCardIndex } from "../../store/actions/cardActions";
import { setFormMode } from "src/app/store/actions/actions";
import { map } from "rxjs/operators";
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
  private inTypingField: boolean;
  loading: boolean;
  @Input() cards: Card[]; //array of all the cards
  @Input() uid: string; //array of all the cards

  activeSlide = 0; //holds the slide which is currently shown

  addComponentHidden: boolean;

  formMode: string;

  notallowed: boolean = false;

  subscriptions$: Subscription[] = [];
  constructor(
    private stateService: StatesService,
    private cardsService: CardsService,

    private store: Store<any>
  ) {}

  ngOnInit(): void {
    let sub = this.store
      .select("cardsData")
      .pipe(map((state) => state.formMode))
      .subscribe((mode) => {
        this.formMode = mode;
      });
    this.subscriptions$.push(sub);
    sub = this.store
      .select("cardsData")
      .pipe(map((state) => state.typingMode))
      .subscribe((val) => {
        this.inTypingField = val;
      });
    this.subscriptions$.push(sub);

    this.subscriptions$.push(sub);

    sub = this.store
      .select("cardsData")
      .pipe(map((state) => state.activeIndex))
      .subscribe((val) => {
        this.hanldeNewIndex(val);
        console.log(val);
      });
    this.subscriptions$.push(sub);
    sub = this.cardsService.getNewCardIndex().subscribe((index) => {
      this.hanldeNewIndex(index);
    });
    this.subscriptions$.push(sub);
  }

  hanldeNewIndex(index: number) {
    if (this.carousel) {
      if (index < 0) {
        index = this.cards.length - 1;
      } else if (index >= this.cards.length) {
        index = 0;
      }
      this.carousel.selectSlide(index);
    }
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
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

  selectSlide(n: number) {
    if (
      this.carousel &&
      n &&
      this.cards.length > 1 &&
      this.formMode != "edit"
    ) {
      if (n >= this.cards.length) {
        this.carousel.selectSlide(this.cards.length - 1);
      } else {
        this.carousel.selectSlide(n);
      }
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
  onSlide(slideEvent) {
    this.activeSlide = slideEvent.relatedTarget;

    if (slideEvent.relatedTarget) {
      this.store.dispatch(setActiveCardIndex({ index: this.activeSlide }));
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
}
