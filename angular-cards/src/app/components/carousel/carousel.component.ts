import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from "@angular/animations";
import { HttpService } from "../../services/http.service";
import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";
import { Vorlesung } from "src/app/models/Vorlesung";
import {
  NgbCarouselConfig,
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  @Input() lecture: Vorlesung;
  @Output() setLoading: EventEmitter<boolean> = new EventEmitter();
  @ViewChild("mycarousel", { static: false }) carousel: NgbCarousel;

  cards: Card[]; //array of all the cards
  activeSlide: number;
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
      this.httpService.getCardsFromLecture(this.lecture).subscribe(resp => {
        this.cards = resp.body;
        this.cardsService.initCards(this.cards);
        this.setLoading.emit(false);
      }); //load the specific cards from the server by subscribing to the observable that the card-service provides
    }
  }
  ngOnInit(): void {
    this.stateService.setFormMode("none");
    this.stateService.getFormMode().subscribe(mode => {
      this.formShow = mode == "add";
      this.formMode = mode;
    });

    this.cardsService.getNewCardIndex().subscribe(index => {
      if (this.carousel && this.activeSlide != index) {
        this.activeSlide = index;
        console.log("sliding");
        this.carousel.select(index.toString());
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
    this.carousel.select(n.toString());
  }
  showRandomCard() {
    var rand: number = this.activeSlide;
    var count = 0;
    while (count < 5 && rand == this.activeSlide) {
      //calculate a new random index
      count++;
      rand = Math.floor(Math.random() * this.cards.length); //random Cardindex
    }
    this.carousel.select(rand.toString());
  }
  goToPrev() {
    this.carousel.prev();
  }
  goToNext() {
    this.carousel.next();
  }
  onSlide(slideEvent: NgbSlideEvent) {
    this.cardsService.setActiveCardIndex(parseInt(slideEvent.current));
  }
}
