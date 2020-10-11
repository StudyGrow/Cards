import { Component, ViewChild, ElementRef, isDevMode } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { auth } from "./store/actions/UserActions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  theme: string = "dark-theme";
  public constructor(private titleService: Title, private store: Store<any>) {
    this.store.dispatch(auth());

    if (isDevMode())
      //log state only in development mode
      this.store.select("cardsData").subscribe((data) => console.log(data));
    this.titleService.setTitle("Home");
  }
}
