import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatButtonToggleGroup } from "@angular/material/button-toggle";
import { Subscription } from "rxjs";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit, OnDestroy {
  @ViewChild("group", { static: true }) public vote: MatButtonToggleGroup;
  private subscriptions$: Subscription[] = [];
  constructor() {}

  ngOnInit(): void {
    let sub = this.vote.change.subscribe((event) => {
      let vote = parseInt(event.value);
      console.log(vote);
    });
    this.subscriptions$.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
