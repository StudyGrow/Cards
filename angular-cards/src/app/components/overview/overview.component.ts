import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserInfo } from "../../models/userInfo";
import { User } from "src/app/models/User";
import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"],
})
export class OverviewComponent implements OnInit, OnDestroy {
  public userInfo: UserInfo;
  public user = new User("", "");
  subscriptions$: Subscription[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let sub = this.userService.getUserInfo().subscribe((info) => {
      this.userInfo = info;
      if (info && info.user) {
        this.user = info.user;
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
