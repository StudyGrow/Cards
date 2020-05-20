import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Vorlesung } from "../../models/Vorlesung";
import { HttpService } from "../../services/http.service";
import { StatesService } from "../../services/states.service";
@Component({
  selector: "app-add-lecture-form",
  templateUrl: "./add-lecture-form.component.html",
  styleUrls: ["./add-lecture-form.component.css"]
})
export class AddLectureFormComponent implements OnInit {
  constructor(
    private http: HttpService,
    private statesService: StatesService
  ) {}
  @Output() emitVl: EventEmitter<Vorlesung> = new EventEmitter();
  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    let newLecture = new Vorlesung(f.value.name, f.value.abrv);
    this.statesService.setLoadingState(true);
    this.http.addLecture(newLecture).subscribe(response => {
      this.statesService.setLoadingState(false);
      this.emitVl.emit(newLecture);
    });

    f.reset();
  }

  setCharIndicatorStyle(field, max: number) {
    if (field.value) {
      return {
        color: field.value.length > max ? "#ff0000" : "#000000"
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
