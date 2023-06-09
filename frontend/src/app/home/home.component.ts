import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AUTHORIZED, LECTURES } from '../store/selectors/selector';
import { AppState } from '../models/State';
import { fadeInUpAnimation, slideInDownOnEnterAnimation, slideInUpOnEnterAnimation } from 'angular-animations';
import { Lecture } from '../models/Vorlesung';
import { fetchLectures } from '../store/actions/LectureActions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInDownOnEnterAnimation()],
})
export class HomeComponent implements OnInit {
  authorized$: Observable<boolean>;
  lectures$: Observable<Lecture[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.authorized$ = this.store.select(AUTHORIZED);
    this.lectures$ = this.store.select(LECTURES);
    this.store.dispatch(fetchLectures());
  }
}
