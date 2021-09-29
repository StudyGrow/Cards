import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/models/Card';
import { Reports } from 'src/app/models/Report';
import { User } from 'src/app/models/User';
import { Vorlesung } from 'src/app/models/Vorlesung';
import { USER_REPORTS, USER_STATUS } from 'src/app/store/selector';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  isAdmin$ = this.store.select(USER_STATUS).pipe(map((status) => status === 'admin'));
  reports$: Observable<Reports> = this.store.select(USER_REPORTS);
  cardReports$: Observable<Card[]> = this.reports$.pipe(map((reports) => reports['flash-cards']));
  lectureReports$: Observable<Vorlesung[]> = this.reports$.pipe(map((reports) => reports.lectures));
  userReports$: Observable<User[]> = this.reports$.pipe(map((reports) => reports.users));
  selectOptions$: Observable<string[]> = this.reports$.pipe(
    map((reports) => (reports ? Object.keys(reports) : undefined))
  );
  selected = 'flash-cards';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.selectOptions$.subscribe((a) => console.log(a));
  }
}
