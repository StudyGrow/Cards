import { Component, ViewChild, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { StatesService } from "./services/states.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("Home");
  }
}
