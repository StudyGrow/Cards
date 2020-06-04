import { Component, OnInit } from "@angular/core";

import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  public loggedIn: boolean;
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.authentication().subscribe((val) => {
      this.loggedIn = val;
    });
  }
}
