import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Vorlesung } from "src/app/models/Vorlesung";
import { LecturesService } from "src/app/services/lectures.service";
import { CardsService } from "src/app/services/cards.service";

@Component({
  selector: "app-filter-tags",
  templateUrl: "./filter-tags.component.html",
  styleUrls: ["./filter-tags.component.css"],
})
export class FilterTagsComponent implements OnInit {
  lecture$: Observable<Vorlesung>;
  constructor(
    private lectureService: LecturesService,
    private cardService: CardsService
  ) {}
  selected = [];
  ngOnInit(): void {
    this.lecture$ = this.lectureService.getCurrentLecture();
  }
  applyFilter(e: boolean) {
    if (e === false) {
      this.cardService.applyFilter(this.selected);
    }
  }
}
