import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserInfo } from "../../models/UserInfo";
import { User } from "src/app/models/User";
import { UserService } from "src/app/services/user.service";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";

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
  public user$: Observable<User>;
  ngOnInit(): void {
    this.user$ = this.userService.getUserInfo().pipe(
      map((info) => {
        if (info) return info.user;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
