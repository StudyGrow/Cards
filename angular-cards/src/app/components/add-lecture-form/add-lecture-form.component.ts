import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-add-lecture-form",
  templateUrl: "./add-lecture-form.component.html",
  styleUrls: ["./add-lecture-form.component.css"]
})
export class AddLectureFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(f.value.name);
    console.log(f.value.abrv);
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
