import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
} from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
import { HttpService } from "../../services/http.service";
import { Card } from "../../models/Card";
import { Subscription } from "rxjs";
@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.css"],
})
export class LecturesComponent implements OnInit, OnDestroy {
  lectures: Vorlesung[];

  @Input() newVl: Vorlesung;

  constructor(private httpService: HttpService) {}
  subscriptions$: Subscription[] = [];
  ngOnInit(): void {
    let sub = this.httpService.getAllLectures().subscribe((lectures) => {
      this.lectures = lectures;
    });
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
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
