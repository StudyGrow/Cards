import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  HostListener,
} from "@angular/core";

import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";

import { UserService } from "../../services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @ViewChild("mycarousel", { static: false }) public carousel: any;

  @HostListener("window:keyup", ["$event"]) handleKeyDown(
    event: KeyboardEvent
  ) {
    if (!this.inTypingField) {
      if (this.carousel && event.key == "ArrowRight") {
        this.carousel.nextSlide();
      } else if (this.carousel && event.key == "ArrowLeft") {
        this.carousel.previousSlide();
      }
    }
  }
  private inTypingField: boolean;
  loading: boolean;
  cards: Card[]; //array of all the cards
  activeSlide: number;

  addComponentHidden: boolean;
  formShow: boolean;
  formMode: string;
  private userId: string;
  subscriptions$: Subscription[] = [];
  constructor(
    private stateService: StatesService,
    private cardsService: CardsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let sub = this.userService
      .getUserId()
      .subscribe((userId) => (this.userId = userId));
    this.subscriptions$.push(sub);
    sub = this.stateService
      .getTyping()
      .subscribe((val) => (this.inTypingField = val));
    this.subscriptions$.push(sub);
    sub = this.cardsService.getCards().subscribe((cards) => {
      this.stateService.setLoadingState(true);
      this.cards = [];
      this.loading = true;
      setTimeout(() => {
        //use timeout here because mdbootstrap will not set active slide accordomgly otherwise
        this.stateService.setLoadingState(false);
        this.loading = false;
        this.cards = cards;
      }, 500);
    }); //load the specific cards from the server by subscribing to the observable that the card-service provides
    this.subscriptions$.push(sub);

    this.stateService.setFormMode("none");
    sub = this.stateService.getFormMode().subscribe((mode) => {
      this.formShow = mode === "add";
      this.formMode = mode;
    });
    this.subscriptions$.push(sub);

    sub = this.cardsService.getNewCardIndex().subscribe((index) => {
      let newSlide = index;
      if (this.carousel) {
        if (newSlide < 0) {
          newSlide = 0;
        } else if (newSlide >= this.cards.length) {
          newSlide = this.cards.length - 1;
        }
        this.carousel.selectSlide(newSlide);
      }
    });
    this.subscriptions$.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  toggleAddView(): void {
    if (this.formMode != "edit") {
      if (this.formMode == "add") {
        this.stateService.setFormMode("none");
      } else {
        this.stateService.setFormMode("add");
      }
    }
  }
  enableEdit() {
    this.stateService.setFormMode("edit");
  }

  setClass() {
    return !this.formShow ? "btn btn-light" : "btn btn-info";
  }

  selectSlide(n: number) {
    if (this.carousel) {
      this.carousel.selectSlide(n.toString());
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
      this.carousel.selectSlide(rand.toString());
    }
  }
  goToPrev() {
    if (this.carousel && this.cards.length > 1 && this.formMode != "edit") {
      this.carousel.previousSlide();
    }
  }
  goToNext() {
    if (this.carousel && this.cards.length > 1 && this.formMode != "edit") {
      this.carousel.nextSlide();
    }
  }
  onSlide(slideEvent) {
    this.activeSlide;
    this.cardsService.setActiveCardIndex(parseInt(slideEvent.relatedTarget));
  }
  isDisabled() {
    if (this.formMode == "edit" || !this.cards || this.cards.length == 0) {
      return true;
    } else {
      let currCard = this.cards[this.activeSlide]; //get the card that is currently showing

      if (!currCard || !currCard.authorId || currCard.authorId.length == 0) {
        return false;
      }
      if (!this.userId || currCard.authorId !== this.userId) {
        //there is an author an it is not the user
        return true;
      } else {
        return false;
      }
    }
  }
}
