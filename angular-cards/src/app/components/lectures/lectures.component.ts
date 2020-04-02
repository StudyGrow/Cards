import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
import { HttpService } from "../../services/http.service";
@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.css"]
})
export class LecturesComponent implements OnInit {
  lectures: Vorlesung[];
  @Output() lecturesLoaded: EventEmitter<boolean> = new EventEmitter();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAllLectures().subscribe(resp => {
      if (resp.status == 504) {
        console.log("Server down");
        this.lectures = [];
      } else {
        this.lecturesLoaded.emit(true);
        this.lectures = resp.body;
      }
    });
  }
  setLink(lecture: Vorlesung) {
    return "/vorlesung/" + lecture.abrv;
  }
}
