import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Vorlesung } from "src/app/models/Vorlesung";
import { LecturesService } from "src/app/services/lectures.service";

@Component({
  selector: "app-lecture-header",
  templateUrl: "./lecture-header.component.html",
  styleUrls: ["./lecture-header.component.css"],
})
export class LectureHeaderComponent implements OnInit {
  @Input() vl: Vorlesung;

  lecture$: Observable<Vorlesung>;
  constructor() {}

  ngOnInit(): void {}
}
