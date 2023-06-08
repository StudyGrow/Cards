import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { USER_INFO, NOTIFICATION_COUNT, USER_STATUS } from '../store/selectors/selector';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../models/state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public page: string;
  public cardCount = 0;
  notificationCount$ = this.store.select(NOTIFICATION_COUNT);
  private subs: Subscription[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    const sub = this.store
      .pipe(
        map(USER_INFO),
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
