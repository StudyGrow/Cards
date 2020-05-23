import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  OnDestroy,
} from "@angular/core";

import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";
import { Vorlesung } from "src/app/models/Vorlesung";
import { UserService } from "../../services/user.service";
import { Subscription, Observable } from "rxjs";
import { LecturesService } from "src/app/services/lectures.service";
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @ViewChild("mycarousel", { static: false }) public carousel: any;
  @HostListener("swipeleft", ["$event"]) public swipePrev(event: any) {
    this.carousel.previousSlide();
  }
  @HostListener("swiperight", ["$event"]) public swipeNext(event: any) {
    this.carousel.nextSlide();
  }
  cards: Card[]; //array of all the cards
  activeSlide: number;
  lecture$: Observable<Vorlesung>;
  addComponentHidden: boolean;
  formShow: boolean;
  formMode: string;
  private userId: string;
  subscriptions$: Subscription[] = [];
  constructor(
    private lectureService: LecturesService,
    private stateService: StatesService,
    private cardsService: CardsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activeSlide = 0;
    let sub = this.userService
      .getUserId()
      .subscribe((userId) => (this.userId = userId));
    this.subscriptions$.push(sub);
    this.lecture$ = this.lectureService.getCurrentLecture();

    sub = this.cardsService.getCards().subscribe((cards) => {
      this.cards = cards;
    }); //load the specific cards from the server by subscribing to the observable that the card-service provides
    this.subscriptions$.push(sub);
    this.stateService.setFormMode("none");
    sub = this.stateService.getFormMode().subscribe((mode) => {
      this.formShow = mode == "add";
      this.formMode = mode;
    });
    this.subscriptions$.push(sub);

    sub = this.cardsService.getNewCardIndex().subscribe((index) => {
      if (this.carousel) {
        this.activeSlide = index;
        this.carousel.selectSlide(index);
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
    this.carousel.selectSlide(n.toString());
  }
  showRandomCard() {
    var rand: number = this.activeSlide;
    var count = 0;
    while (count < 5 && rand == this.activeSlide) {
      //calculate a new random index
      count++;
      rand = Math.floor(Math.random() * this.cards.length); //random Cardindex
    }
    this.carousel.selectSlide(rand.toString());
  }
  goToPrev() {
    if (this.formMode != "edit") {
      this.carousel.previousSlide();
    }
  }
  goToNext() {
    if (this.formMode != "edit") {
      this.carousel.nextSlide();
    }
  }
  onSlide(slideEvent) {
    this.activeSlide = parseInt(slideEvent.relatedTarget);
    this.cardsService.setActiveCardIndex(parseInt(slideEvent.relatedTarget));
  }
  isDisabled() {
    if (this.formMode == "edit" || !this.cards || this.cards.length == 0) {
      return true;
    } else {
      let currCard = this.cards[this.activeSlide]; //get the card that is currently showing

      if (!currCard.authorId || currCard.authorId.length == 0) {
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
