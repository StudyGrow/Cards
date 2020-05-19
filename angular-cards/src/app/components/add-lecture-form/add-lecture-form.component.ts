import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Vorlesung } from "../../models/Vorlesung";
import { HttpService } from "../../services/http.service";
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
    private http: HttpService,
    private statesService: StatesService
  ) {}
  @Output() emitVl: EventEmitter<Vorlesung> = new EventEmitter();
  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  onSubmit(f: NgForm) {
    let newLecture = new Vorlesung(f.value.name, f.value.abrv.toLowerCase());
    this.statesService.setLoadingState(true);
    let sub = this.http.addLecture(newLecture).subscribe((response) => {
      this.statesService.setLoadingState(false);
      this.emitVl.emit(newLecture);
      sub.unsubscribe();
    });

    f.reset();
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
        name.value.length > 60
      );
    }
  }
}
