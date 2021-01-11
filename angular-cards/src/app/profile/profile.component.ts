import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { userInfo } from "../store/selector";
import { Subscription } from "rxjs";
import { AppState } from "../models/state";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public page: string;
  public cardCount = 0;
  private subs: Subscription[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    let sub = this.store

      .pipe(
        map(userInfo),
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
