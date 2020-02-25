import {
  Component,
  OnInit
} from '@angular/core';
import {
  CardsService
} from '../../services/cards.service'

import {
  Card
} from '../../models/Card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: Card[]; //array of all the cards

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
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

}
