import { Component, OnInit } from "@angular/core";
import { CarouselControlService } from "../../services/carousel-control.service";
import { CardsService } from "../../services/cards.service";
import { StatesService } from "../../services/states.service";
import { Card } from "../../models/Card";

import * as $ from "jquery";
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  cards: Card[]; //array of all the cards
  activeSlide: number = 0;
  addComponentHidden: boolean;
  constructor(
    private cs: CarouselControlService,
    private cardService: CardsService,
    private stateService: StatesService
  ) {}

  ngOnInit(): void {
    this.addComponentHidden = true;
    this.stateService.setAddComponentHidden(true);
    this.stateService.getAddComponentHidden().subscribe(value => {
      this.addComponentHidden = value;
    });
    //this.cs.setActiveSlide(this.activeSlide).subscribe((res)=>console.log(res)); //Set active slide to the first slide
    this.cs.getActiveSlide().subscribe(value => (this.activeSlide = value)); //read activeSlide

    this.cards = [
      {
        id: "oneifn",
        thema: "Karte 1",
        content: "Karteninhalt"
      },
      {
        id: "fwfwwg",
        thema: "Karte 2",
        content: "Karteninhalt"
      }
    ];
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
    }); //load the specific cards from the server by subscribing to the observable that the card-service provides
    this.cs.setNumberOfCarouselItems(this.cards.length);
  }

  toggleAddView(): void {
    this.stateService.setAddComponentHidden(!this.addComponentHidden);
  }
  setClass() {
    return this.addComponentHidden ? "btn btn-light" : "btn btn-success";
  }
  goToSlide(index: number) {
    ($("#carouselExampleControls") as any).carousel(index);
  }
  previousSlide() {
    ($("#carouselExampleControls") as any).carousel("prev");
  }
  nextSlide() {
    ($("#carouselExampleControls") as any).carousel("next");
  }
  showRandomCard() {
    var rand: number = this.activeSlide;
    console.log("active Slide:" + this.activeSlide);

    console.log("count:" + this.activeSlide);
    var count = 0;
    while (count < 5 && rand == this.activeSlide) {
      //calculate a new random index
      count++;
      rand = Math.floor(Math.random() * this.activeSlide); //random Cardindex
    }
    console.log("rand:" + rand);
  }
}
