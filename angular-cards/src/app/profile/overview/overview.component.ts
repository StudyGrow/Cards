import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserInfo } from "../../models/UserInfo";
import { User } from "src/app/models/User";
import { UserService } from "src/app/services/user.service";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { selectUser, selectUserCards } from "src/app/store/selector";
import { AppState } from "src/app/store/reducer";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit, OnDestroy {
  user$ = this.store.pipe(map(selectUser));
  cardCount$ = this.store.pipe(
    map(selectUserCards),
    map((cards) => cards?.length)
  );
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  ngOnDestroy() {}
}
