import { Component, OnInit } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";

import { Subscription, Observable } from "rxjs";
import { LecturesService } from "src/app/services/lectures.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducer";
import { fetchLectures } from "src/app/store/actions";
@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.css"],
})
export class LecturesComponent implements OnInit {
  lectures$: Observable<Vorlesung[]>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchLectures());
    this.lectures$ = this.store.select((state) => state.cardsData.lectures);
  }

  setLink(lecture: Vorlesung) {
    return "/vorlesung/" + lecture.abrv;
  }
}
