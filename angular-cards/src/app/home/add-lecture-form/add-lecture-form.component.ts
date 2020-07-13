import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Vorlesung } from "../../models/Vorlesung";
import { LecturesService } from "../../services/lectures.service";
import { StatesService } from "../../services/states.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-add-lecture-form",
  templateUrl: "./add-lecture-form.component.html",
  styleUrls: ["./add-lecture-form.component.css"],
})
export class AddLectureFormComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  constructor(
    private lecture: LecturesService,
    private statesService: StatesService
  ) {}

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  onSubmit(f) {
    let newLecture = new Vorlesung(f.value.name, f.value.abrv.toLowerCase());
    let sub = this.lecture.addLecture(newLecture).subscribe((response) => {
      f.reset();
      sub.unsubscribe();
    });
  }

  setCharIndicatorStyle(field, max: number) {
    if (field.value) {
      return {
        color: field.value.length > max ? "#ff0000" : "#000000",
      };
    } else {
      return { color: "#000000" };
    }
  }
  getLength(elem) {
    if (elem.value) {
      return elem.value.length;
    } else {
      return 0;
    }
  }
  isDisabled(name, abrv) {
    if (!name.value || !abrv.value) {
      return true;
    } else {
      return (
        abrv.value.length == 0 ||
        abrv.value.length < 3 ||
        abrv.value.length > 7 ||
        name.value.length == 0 ||
        name.value.length > 200
      );
    }
  }
}
