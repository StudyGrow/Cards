import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { USER_CARDS } from 'src/app/store/selector';
import { PageEvent } from '@angular/material/paginator';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { AppState } from 'src/app/models/state';
import { Router } from '@angular/router';
import { navigateToCard } from 'src/app/store/actions/StateActions';

@Component({
  selector: 'app-cards-overview',
  templateUrl: './cards-overview.component.html',
  styleUrls: ['./cards-overview.component.scss'],
  animations: [fadeInOnEnterAnimation({ duration: 500 }), fadeOutOnLeaveAnimation({ duration: 100 })],
})
export class CardsOverviewComponent implements OnInit, OnDestroy {
  subscriptions$: Subscription[] = [];
  cardCount: number;
  start: number = 0;
  end: number = 3;
  pageSizeOptions = [3, 10, 15];
  cards$: Observable<Card[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cards$ = this.store.select(USER_CARDS);
    let sub = this.cards$.subscribe((cards) => (this.cardCount = cards?.length));
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => sub.unsubscribe());
  }
  incrementSlice(event: PageEvent) {
    this.start = event.pageIndex * event.pageSize;

    if (this.start + event.pageSize > this.cardCount) {
      this.end = this.cardCount;
    } else {
      this.end = this.start + event.pageSize;
    }
  }
  navigate(card: Card) {
    this.store.dispatch(navigateToCard({ card: card }));
  }
}
