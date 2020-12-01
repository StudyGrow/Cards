import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Card } from "src/app/models/Card";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { selectUserInfo } from "src/app/store/selector";

import { PageEvent } from "@angular/material/paginator";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";

@Component({
  selector: "app-cards-overview",
  templateUrl: "./cards-overview.component.html",
  styleUrls: ["./cards-overview.component.scss"],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 100 }),
  ],
})
export class CardsOverviewComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  cardCount: number;
  start: number = 0;
  end: number = 3;
  pageSizeOptions = [3, 10, 15];
  cards$: Observable<Card[]>;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.cards$ = this.store.select("data").pipe(
      map(selectUserInfo),
      map((info) => info.cards)
    );
    this.cards$.subscribe((cards) => (this.cardCount = cards?.length));
  }
  incrementSlice(event: PageEvent) {
    this.start = event.pageIndex * event.pageSize;

    if (this.start + event.pageSize > this.cardCount) {
      this.end = this.cardCount;
    } else {
      this.end = this.start + event.pageSize;
    }
  }
}
