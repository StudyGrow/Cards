import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatButtonToggleGroup } from "@angular/material/button-toggle";
import { Subscription } from "rxjs";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit, OnDestroy {
  private vote: number = 0;
  private subscriptions$: Subscription[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  setBtnClass(s: string) {
    if (s === "up" && this.vote === 1) {
      return "btn up";
    } else if (s === "down" && this.vote === -1) {
      return "btn down";
    } else return "btn ";
  }

  toggleVote(n: number) {
    if (this.vote === n) {
      this.vote = 0;
    } else {
      this.vote = n;
    }
  }
}
