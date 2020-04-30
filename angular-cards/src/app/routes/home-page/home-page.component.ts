import { Component, OnInit } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  public loaded: boolean = false;
  public newVl: Vorlesung;
  constructor() {}

  ngOnInit(): void {
    localStorage.removeItem("lecture");
  }
  setLoaded(loaded: boolean): void {
    this.loaded = loaded;
  }
  emitVl(lecture: Vorlesung) {
    console.log("vl: ", lecture);
    this.newVl = lecture;
  }
}
