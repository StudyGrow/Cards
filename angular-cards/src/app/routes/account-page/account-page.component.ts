import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";

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
    this.page = "overview";
    this.userService.getUserInfo().subscribe((info) => {
      if (info && info.cards) {
        this.cardCount = info.cards.length;
      } else {
        this.cardCount = 0;
      }
    });
  }

  changePage(e: Event, s: string) {
    e.preventDefault;
    this.page = s;
  }
  setClass(s: string) {
    if (this.page === s) {
      return "list-group-item list-group-item-action active";
    } else {
      return "list-group-item list-group-item-action";
    }
  }
}
