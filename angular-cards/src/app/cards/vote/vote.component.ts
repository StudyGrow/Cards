import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Vote } from "src/app/models/Vote";

import { VotesService } from "src/app/services/votes.service";
import { AppState } from "src/app/store/reducer";
import { selectVote } from "src/app/store/selector";
import { changeVote } from "../../store/actions/cardActions";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit, OnDestroy {
  vote: Vote = new Vote();

  @Input() id: string; //id of card that the vote belongs to

  private subscriptions$: Subscription[] = [];
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    let sub = this.store
      .select("cardsData")
      .pipe(map((state: AppState) => selectVote(state, this.id)))
      .subscribe((init) => {
        this.vote = init;
      });
    this.subscriptions$.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  toggleVote() {
    let newVote: Vote = { ...this.vote, value: this.vote?.value === 1 ? 0 : 1 };
    if (!newVote.cardId) newVote.cardId = this.id;
    this.store.dispatch(changeVote({ vote: newVote }));
  }
}
