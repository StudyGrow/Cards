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
export class LecturesComponent implements OnInit {
  lectures$: Observable<Vorlesung[]>;

  constructor(private lecture: LecturesService) {}

  ngOnInit(): void {
    this.lectures$ = this.lecture.getAllLectures();
  }

  setLink(lecture: Vorlesung) {
    return "/vorlesung/" + lecture.abrv;
  }
}
