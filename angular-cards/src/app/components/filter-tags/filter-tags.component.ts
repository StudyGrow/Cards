import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Vorlesung } from "src/app/models/Vorlesung";
import { LecturesService } from "src/app/services/lectures.service";

@Component({
  selector: "app-filter-tags",
  templateUrl: "./filter-tags.component.html",
  styleUrls: ["./filter-tags.component.css"],
})
export class FilterTagsComponent implements OnInit {
  lecture$: Observable<Vorlesung>;
  constructor(private lectureService: LecturesService) {}
  selected = [];
  ngOnInit(): void {
    this.lecture$ = this.lectureService.getCurrentLecture();
  }
  applyFilter() {
    console.log(this.selected);
  }
}
