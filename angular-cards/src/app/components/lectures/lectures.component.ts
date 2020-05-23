import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
} from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";

import { Subscription, Observable } from "rxjs";
import { LecturesService } from "src/app/services/lectures.service";
@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.css"],
})
export class LecturesComponent implements OnInit, OnDestroy {
  lectures$: Observable<Vorlesung[]>;

  constructor(private lecture: LecturesService) {}
  subscriptions$: Subscription[] = [];
  ngOnInit(): void {
    this.lectures$ = this.lecture.getAllLectures();
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  setLink(lecture: Vorlesung) {
    return "/vorlesung/" + lecture.abrv;
  }
}
