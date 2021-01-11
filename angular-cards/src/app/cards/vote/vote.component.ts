import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AppState } from 'src/app/models/state';
import { Vote } from 'src/app/models/Vote';

import { authenticated, UserVote, VoteCount } from 'src/app/store/selector';
import { changeVote } from '../../store/actions/CardActions';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit, OnDestroy {
  vote: Vote = new Vote();
  voteCount: number;
  loggedIn$: Observable<boolean> = this.store.select(authenticated);

  @Input() id: string; //id of card that the vote belongs to

  private subscriptions$: Subscription[] = [];
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    let sub = this.store
      .pipe(map((state: AppState) => UserVote(state, this.id)))
      .subscribe((init) => {
        if (init && this.vote && this.vote.value != init.value)
          this.vote = { ...init };
      });
    this.subscriptions$.push(sub);
    sub = this.store
      .pipe(map((state) => VoteCount(state, this.id)))
      .subscribe((count) => {
        this.voteCount = count;
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
    this.vote.value = newVote.value;
    if (newVote.value === 1) {
      this.voteCount++;
    } else if (newVote.value === 0) {
      this.voteCount--;
    }
  }
}
