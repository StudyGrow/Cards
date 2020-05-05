import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
import { HttpService } from "../../services/http.service";
import { Card } from "../../models/Card";
@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.css"],
})
export class LecturesComponent implements OnInit {
  lectures: Vorlesung[];
  @Output() lecturesLoaded: EventEmitter<boolean> = new EventEmitter();
  @Input() newVl: Vorlesung;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAllLectures().subscribe((lectures) => {
      this.lectures = lectures;
    });
  }

  ngOnChanges() {
    if (this.newVl) {
      console.log("got new vl: ", this.newVl);
      this.lectures.push(this.newVl);
    }
  }
  setLink(lecture: Vorlesung) {
    return "/vorlesung/" + lecture.abrv;
  }
}
