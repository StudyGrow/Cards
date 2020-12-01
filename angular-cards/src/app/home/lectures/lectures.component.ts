import { Component, OnInit } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";

import { Subscription, Observable } from "rxjs";
import { LecturesService } from "src/app/services/lectures.service";
import { Store } from "@ngrx/store";
import { fetchLectures } from "src/app/store/actions/LectureActions";
import { tap, map } from "rxjs/operators";
import { selectLectures } from "src/app/store/selector";
@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.scss"],
})
export class LecturesComponent implements OnInit {
  lectures$: Observable<Vorlesung[]>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchLectures());
    this.lectures$ = this.store.select("data").pipe(map(selectLectures));
  }

  setLink(lecture: Vorlesung) {
    return "/vorlesung/" + lecture.abrv;
  }
}
