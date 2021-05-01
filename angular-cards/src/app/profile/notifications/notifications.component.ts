import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Report } from 'src/app/models/Report';
import { UserReports } from 'src/app/store/selector';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  reports$: Observable<Report[]> = this.store.select(UserReports);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
