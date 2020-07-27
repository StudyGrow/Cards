import { Component, OnInit, OnDestroy } from "@angular/core";

import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit, OnDestroy {
  public loggedIn: boolean;
  private subs: Subscription[] = [];
  constructor(private user: UserService) {}

  ngOnInit(): void {
    let sub = this.user.authentication().subscribe((val) => {
      this.loggedIn = val;
    });
    this.subs.push(sub);
  }
  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
