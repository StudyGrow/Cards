import { Component, ViewChild, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { auth } from "./store/actions/UserActions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public constructor(private titleService: Title, private store: Store<any>) {
    this.store.dispatch(auth());
    this.titleService.setTitle("Home");
  }
}
