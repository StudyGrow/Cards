import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Card } from "src/app/models/Card";

@Component({
  selector: "app-cards-overview",
  templateUrl: "./cards-overview.component.html",
  styleUrls: ["./cards-overview.component.css"],
})
export class CardsOverviewComponent implements OnInit {
  public cards: Card[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((info) => {
      this.cards = info.cards;
    });
  }
}
