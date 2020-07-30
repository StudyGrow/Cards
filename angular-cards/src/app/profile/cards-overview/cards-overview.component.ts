import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Card } from "src/app/models/Card";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { selectUserInfo } from "src/app/store/selector";
import { fetchUserData } from "src/app/store/actions/UserActions";

@Component({
  selector: "app-cards-overview",
  templateUrl: "./cards-overview.component.html",
  styleUrls: ["./cards-overview.component.scss"],
})
export class CardsOverviewComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  public cards: Card[] = [];
  cards$: Observable<Card[]>;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.cards$ = this.store.select("cardsData").pipe(
      map(selectUserInfo),
      map((info) => info.cards)
    );
  }
}
