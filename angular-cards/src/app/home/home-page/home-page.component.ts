import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  constructor(private user: UserService) {}
  authenticated: boolean;

  ngOnInit(): void {
    this.user.authentication().subscribe((val) => {
      this.authenticated = val;
    });
  }
}
