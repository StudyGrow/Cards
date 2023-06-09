import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AppState } from 'src/app/models/State';
import { Vote } from 'src/app/models/Vote';
import { AUTHORIZED, USER_VOTE, VOTE_COUNT } from 'src/app/store/selectors/selector';
import { changeVote } from '../../store/actions/CardActions';
import { NotificationsService } from 'src/app/services/notifications.service';
import { InfoMessage } from 'src/app/models/Notification';
import { DialogueComponent } from 'src/app/components/dialogue/dialogue.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { TranslateService } from '@ngx-translate/core';
import { CardsEffects } from 'src/app/store/effects/effects';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.css'],
})
export class CardActionsComponent implements OnInit, OnDestroy {
  vote: Vote = new Vote();
  voteCount: number;
  loggedIn$: Observable<boolean> = this.store.select(AUTHORIZED);

  @Input() id: string; // id of card that the vote belongs to
  @Input() tags: string[];
  private subscriptions$: Subscription[] = [];
  constructor(
    private store: Store<any>,
    private notification: NotificationsService,
    public dialogue: MatDialog,
    private translate: TranslateService,
    private actionState: CardsEffects,
    private notifs: NotificationsService
  ) {}

  ngOnInit(): void {
    let sub = this.store.pipe(map((state: AppState) => USER_VOTE(state, this.id))).subscribe((init) => {
      if (init && this.vote && this.vote.value != init.value) this.vote = { ...init };
    });
    this.subscriptions$.push(sub);
    sub = this.store.pipe(map((state) => VOTE_COUNT(state, this.id))).subscribe((count) => {
      this.voteCount = count || 0;
    });
    this.subscriptions$.push(sub);
    const tagCount = this.tags.length;
    if (tagCount > 3) {
      this.tags = this.tags.slice(0, 3);
      this.tags.push(`+${tagCount - 3}`);
    }
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  toggleVote() {
    const newVote: Vote = { ...this.vote, value: this.vote?.value === 1 ? 0 : 1 };
    if (!newVote.cardId) newVote.cardId = this.id;
    this.store.dispatch(changeVote({ vote: newVote }));
    this.vote.value = newVote.value;
    if (newVote.value === 1) {
      this.voteCount++;
    } else if (newVote.value === 0) {
      this.voteCount--;
    }
    return this.voteCount;
  }

  reportCard() {
    this.dialogue.open(DialogueComponent, {
      width: '400px',
      data: {
        title: this.translate.instant('report.dialog.title'),
        content: this.translate.instant('report.dialog.content'),
        abortText: this.translate.instant('report.dialog.abort'),
        proceedText: this.translate.instant('report.dialog.confirm'),
        type: 'report',
      },
    });
    const sub = this.actionState.report$.pipe(delay(300)).subscribe((action) => {
      this.notifs.clearNotifications();
      this.notifs.addNotification(new InfoMessage('Die Karte wurde erfolgreich gemeldet und entfernt'));
    });
  }

  shareCard() {
    let url = window.location.href.split('#')[0];
    url += '#' + this.id;
    navigator.clipboard.writeText(url).then(() => {
      this.notification.addNotification(new InfoMessage('Der Link wurde ins Clipboard kopiert'));
    });
  }
}
