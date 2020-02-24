import { Component, OnInit } from '@angular/core';
import {Card} from '../../models/Card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards:Card[]; //array of all the cards

  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        id:"säbfösf",
        thema:"Karte 1",
        content:"TETSTSTS"
      },
      {
        id:"wiefbwe",
        thema:"Karte 2",
        content:"roieaegoTest"
      }
    ] 
  }

}
