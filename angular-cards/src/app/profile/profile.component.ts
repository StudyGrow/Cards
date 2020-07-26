import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { selectUserInfo } from "../store/selector";
import { fetchUserData } from "../store/actions/UserActions";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  public page: string;
  public cardCount = 0;
  constructor(private userService: UserService, private store: Store<any>) {}

  ngOnInit(): void {
    let sub = this.store
      .select("cardsData")
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
    this.store.dispatch(fetchUserData());
  }
}
