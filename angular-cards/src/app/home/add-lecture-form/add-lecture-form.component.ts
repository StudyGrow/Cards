import { Component, OnInit } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-lecture-form",
  templateUrl: "./add-lecture-form.component.html",
  styleUrls: ["./add-lecture-form.component.scss"],
})
export class AddLectureFormComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  onSubmit(f) {
    let newLecture = new Vorlesung(
      f.value.vlname.trim(),
      f.value.abrv.toLowerCase().trim(),
      []
    );
    localStorage.setItem("vl", JSON.stringify(newLecture));
    this.router.navigateByUrl("/vorlesung/neu");
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
        abrv.value.trim().length < 3 ||
        abrv.value.trim().length > 7 ||
        name.value.trim().length < 3 ||
        name.value.trim().length > 500
      );
    }
  }
}
