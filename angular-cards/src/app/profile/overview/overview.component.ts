import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserInfo } from "../../models/UserInfo";
import { User } from "src/app/models/User";
import { UserService } from "src/app/services/user.service";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { selectUser } from "src/app/store/selector";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit, OnDestroy {
  public userInfo: UserInfo;
  public user = new User("", "");
  subscriptions$: Subscription[] = [];

  constructor(private userService: UserService, private store: Store<any>) {}
  public user$: Observable<User>;
  ngOnInit(): void {
    this.user$ = this.store.select("cardsData").pipe(map(selectUser));
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
