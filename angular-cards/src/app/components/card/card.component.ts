import {
  Component,
  OnInit,
  Input
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

  @Input() card:Card;
  

  constructor(private cardService: CardsService) {}
  public isCollapsed = true;
  ngOnInit(): void {
    
  }

  
}
