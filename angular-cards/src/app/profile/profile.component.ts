import { Component, OnInit, OnDestroy } from "@angular/core";

import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { selectUserInfo } from "../store/selector";
import { Subscription } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public page: string;
  public cardCount = 0;
  private subs: Subscription[] = [];
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    let sub = this.store
      .select("data")
      .pipe(
        map(selectUserInfo),
        map((info) => info.cards)
      )
      .subscribe((cards) => {
        if (cards) {
          this.cardCount = cards.length;
        } else {
          this.cardCount = 0;
        }
      });
    this.subs.push(sub);
  }
  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
