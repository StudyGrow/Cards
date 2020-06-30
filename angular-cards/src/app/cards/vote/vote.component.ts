import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { CardsService } from "src/app/services/cards.service";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit, OnDestroy {
  private vote: number = 0;
  @Input() index: number; //cardIndex in card array that the vote belongs to

  private subscriptions$: Subscription[] = [];
  constructor(private cardService: CardsService) {}

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
      this.cardService.castVote(this.index, 0);
    } else {
      this.vote = n;
      this.cardService.castVote(this.index, n);
    }
  }
}
