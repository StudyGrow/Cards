import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-account-page",
  templateUrl: "./account-page.component.html",
  styleUrls: ["./account-page.component.css"],
})
export class AccountPageComponent implements OnInit {
  public page: string;
  public cardCount = 0;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((info) => {
      if (info && info.cards) {
        this.cardCount = info.cards.length;
      } else {
        this.cardCount = 0;
      }
    });
  }
}
