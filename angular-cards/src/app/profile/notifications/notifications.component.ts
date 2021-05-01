import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reports } from 'src/app/models/Report';
import { UserReports } from 'src/app/store/selector';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  reports$: Observable<string[][]> = this.store.select(UserReports).pipe(map((reports) => Object.entries(reports)));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.reports$.subscribe((a) => console.log(a));
  }
}
