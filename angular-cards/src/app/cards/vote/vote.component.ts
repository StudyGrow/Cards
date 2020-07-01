import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { CardsService } from "src/app/services/cards.service";
import { VotesService } from "src/app/services/votes.service";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit, OnDestroy {
  private vote: number = 0;
  @Input() id: string; //cardIndex in card array that the vote belongs to

  private subscriptions$: Subscription[] = [];
  constructor(private votes: VotesService) {}

  ngOnInit(): void {
    let sub = this.votes.loadInitialVote(this.id).subscribe((init) => {
      this.vote = init?.value || 0;
    });
    this.subscriptions$.push(sub);
  }

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
      this.votes.castVote(this.id, 0);
    } else {
      this.vote = n;
      this.votes.castVote(this.id, n);
    }
  }
}
