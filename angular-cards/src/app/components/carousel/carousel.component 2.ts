import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
} from "@angular/core";

import { HttpService } from "../../services/http.service";
import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";
import { Vorlesung } from "src/app/models/Vorlesung";
import { NgbCarouselConfig, NgbSlideEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  @Input() lecture: Vorlesung;
  @Output() setLoading: EventEmitter<boolean> = new EventEmitter();

  @ViewChild("mycarousel", { static: false }) public carousel: any;
  @HostListener("swipeleft", ["$event"]) public swipePrev(event: any) {
    this.carousel.previousSlide();
  }
  @HostListener("swiperight", ["$event"]) public swipeNext(event: any) {
    this.carousel.nextSlide();
  }
  cards: Card[]; //array of all the cards
  activeSlide: number = 0;
  title: string;
  addComponentHidden: boolean;
  formShow: boolean;
  formMode: string;

  constructor(
    config: NgbCarouselConfig,
    private httpService: HttpService,
    private stateService: StatesService,
    private cardsService: CardsService
  ) {
    config.interval = -1;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnChanges() {
    if (this.lecture) {
      this.title = this.lecture.name;
      this.httpService.getCardsFromLecture(this.lecture).subscribe((resp) => {
        this.cards = resp.body;
        this.cardsService.initCards(this.cards);
        this.setLoading.emit(false);
      }); //load the specific cards from the server by subscribing to the observable that the card-service provides
    }
  }
  ngOnInit(): void {
    this.stateService.setFormMode("none");
    this.stateService.getFormMode().subscribe((mode) => {
      this.formShow = mode == "add";
      this.formMode = mode;
    });

    this.cardsService.getNewCardIndex().subscribe((index) => {
      if (this.carousel && this.activeSlide != index) {
        this.activeSlide = index;
        this.carousel.selectSlide(index);
      }
    });
  }

  completeLoading(): void {
    this.setLoading.emit(false);
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
    this.cardsService.setActiveCardIndex(parseInt(slideEvent.relatedTarget));
  }
}
