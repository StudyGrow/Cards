import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfo } from '../../models/UserInfo';
import { User } from 'src/app/models/User';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { user, UserCards } from 'src/app/store/selector';
import { AppState } from 'src/app/models/state';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  user$ = this.store.select(user);
  cardCount$ = this.store.select(UserCards).pipe(map((cards) => cards?.length));

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(user);
  }
}
