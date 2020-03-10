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
}
