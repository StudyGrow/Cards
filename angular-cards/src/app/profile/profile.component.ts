import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
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
