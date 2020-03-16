import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";

import { HttpService } from "../../services/http-service.service";
import { StatesService } from "../../services/states.service";
import { Card } from "../../models/Card";

import * as $ from "jquery";
import { Carousel } from "../../../../node_modules/bootstrap/js/dist";
import { Vorlesung } from "src/app/models/Vorlesung";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  @Input() lecture: Vorlesung;
  @Output() setLoading: EventEmitter<boolean> = new EventEmitter();
  cards: Card[]; //array of all the cards
  activeSlide: number = 0;
  title: string;
  addComponentHidden: boolean;
  formShow: boolean;
  formMode: string;

  constructor(
    private httpService: HttpService,
    private stateService: StatesService
  ) {}

  ngOnChanges() {
    if (this.lecture) {
      this.title = this.lecture.name;
      this.httpService.getCardsFromLecture(this.lecture).subscribe(resp => {
        this.cards = resp.body;
        this.setLoading.emit(false);
      }); //load the specific cards from the server by subscribing to the observable that the card-service provides
    }
  }
  ngOnInit(): void {
    this.cards = [];

    this.stateService.setFormMode("none");
    this.stateService.getFormMode().subscribe(mode => {
      this.formShow = mode == "add";
      this.formMode = mode;
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
  setClass() {
    return !this.formShow ? "btn btn-light" : "btn btn-success";
  }
  goToSlide(index: number) {
    $("#carouselExampleControls").carousel(index);
  }
  previousSlide() {
    $("#carouselExampleControls").carousel("prev");
  }
  nextSlide() {
    $("#carouselExampleControls").carousel("next");
  }
  showRandomCard() {
    var rand: number = this.activeSlide;
    var count = 0;
    while (count < 5 && rand == this.activeSlide) {
      //calculate a new random index
      count++;
      rand = Math.floor(Math.random() * this.cards.length); //random Cardindex
    }
    this.goToSlide(rand);
  }
}
