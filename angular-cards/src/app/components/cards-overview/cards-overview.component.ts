import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Card } from "src/app/models/Card";
import { Subscription } from "rxjs";

@Component({
  selector: "app-cards-overview",
  templateUrl: "./cards-overview.component.html",
  styleUrls: ["./cards-overview.component.css"],
})
export class CardsOverviewComponent implements OnInit, OnDestroy {
  subscriptions$: Subscription[] = [];
  public cards: Card[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let sub = this.userService.getUserInfo().subscribe((info) => {
      if (info && info.cards) {
        this.cards = info.cards;
      }
    });
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
