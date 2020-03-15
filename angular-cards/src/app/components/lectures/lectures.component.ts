import { Component, OnInit } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
import { HttpService } from "../../services/http-service.service";
@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.css"]
})
export class LecturesComponent implements OnInit {
  lectures: Vorlesung[];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getAllLectures()
      .subscribe(resp => (this.lectures = resp.body));
  }
  setLink(lecture: Vorlesung) {
    return "/vorlesung/" + lecture.abrv;
  }
}
