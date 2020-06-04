import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Card } from "src/app/models/Card";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-cards-overview",
  templateUrl: "./cards-overview.component.html",
  styleUrls: ["./cards-overview.component.css"],
})
export class CardsOverviewComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  public cards: Card[] = [];
  cards$: Observable<Card[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cards$ = this.userService.getUserInfo().pipe(
      map((info) => {
        if (info) {
          return info.cards;
        }
      })
    );
  }
}
