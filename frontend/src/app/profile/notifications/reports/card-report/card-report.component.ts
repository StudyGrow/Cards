import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/models/Card';
import { navigateToCard } from 'src/app/store/actions/StateActions';

@Component({
  selector: 'app-card-report',
  templateUrl: './card-report.component.html',
  styleUrls: ['./card-report.component.scss'],
})
export class CardReportComponent {
  @Input() cardReport: Card;
  constructor(private store: Store) {}

  navigate(card: Card) {
    this.store.dispatch(navigateToCard({ card: card }));
  }
}
