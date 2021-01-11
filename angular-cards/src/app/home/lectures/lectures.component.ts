import { Component, OnInit } from '@angular/core';
import { Vorlesung } from '../../models/Vorlesung';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { fetchLectures } from 'src/app/store/actions/LectureActions';
import { map } from 'rxjs/operators';
import { Lectures } from 'src/app/store/selector';
import { AppState } from 'src/app/models/state';
@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss'],
})
export class LecturesComponent implements OnInit {
  lectures$: Observable<Vorlesung[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchLectures());
    this.lectures$ = this.store.select(Lectures);
  }

  setLink(lecture: Vorlesung) {
    return '/vorlesung/' + lecture.abrv;
  }
}
