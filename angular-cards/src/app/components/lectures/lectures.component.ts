import { Component, OnInit } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.css"]
})
export class LecturesComponent implements OnInit {
  lectures: Vorlesung[];
  constructor() {}

  ngOnInit(): void {}
  setLink(lecture: Vorlesung) {
    return "/vorlesung/" + lecture.abrv;
  }
}
