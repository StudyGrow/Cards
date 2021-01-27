import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { user, UserCards } from 'src/app/store/selector';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  user$ = this.store.select(user);
  cardCount$ = this.store.select(UserCards).pipe(map((cards) => cards?.length));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(user);
  }
}
