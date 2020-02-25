import {
  Component,
  OnInit
} from '@angular/core';
import {
  CarouselControlService
} from '../../services/carousel-control.service';

import {
  Card
} from '../../models/Card';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cards: Card[]; //array of all the cards
  activeSlide: number = 0;
  constructor(private cs: CarouselControlService) {}

  ngOnInit(): void {
    this.cs.getActiveSlide().subscribe((value => this.activeSlide = value));
    this.cards = [{
        id: "oneifn",
        thema: "Karte 1",
        content: "Karteninhalt"
      },
      {
        id: "fwfwwg",
        thema: "Karte 2",
        content: "Karteninhalt"
      }
    ]
    //this.cardService.getCards().subscribe(cards=>{this.cards=cards}); //load the specific cards from the server by subscribing to the observable that the card-service provides
  }
  previousSlide() {
    
  }
  nextSlide() {
    
  }
}
