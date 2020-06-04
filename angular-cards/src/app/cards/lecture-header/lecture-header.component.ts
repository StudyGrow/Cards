import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Vorlesung } from "src/app/models/Vorlesung";
import { LecturesService } from "src/app/services/lectures.service";

@Component({
  selector: "app-lecture-header",
  templateUrl: "./lecture-header.component.html",
  styleUrls: ["./lecture-header.component.css"],
})
export class LectureHeaderComponent implements OnInit {
  lecture$: Observable<Vorlesung>;
  constructor(private lectureService: LecturesService) {}

  ngOnInit(): void {
    this.lecture$ = this.lectureService.getCurrentLecture();
  }
}
