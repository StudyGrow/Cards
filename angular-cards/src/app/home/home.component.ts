import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { authorized, Lectures } from '../store/selector';
import { AppState } from '../models/state';
import { fadeInUpAnimation, slideInUpOnEnterAnimation } from 'angular-animations';
import { Vorlesung } from '../models/Vorlesung';
import { fetchLectures } from '../store/actions/LectureActions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInUpOnEnterAnimation()],
})
export class HomeComponent implements OnInit {
  authorized$: Observable<boolean>;
  lectures$: Observable<Vorlesung[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.authorized$ = this.store.select(authorized);
    this.lectures$ = this.store.select(Lectures);
    this.store.dispatch(fetchLectures());
  }
}
