import { Component, ViewChild, ElementRef, isDevMode } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LecturesService } from "./services/lectures.service";
import { changeTheme } from "./store/actions/actions";
import { auth } from "./store/actions/UserActions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  theme$: Observable<string>;
  cachedTheme: string;
  public constructor(
    private titleService: Title,
    private store: Store<any>,
    private lect: LecturesService
  ) {
    this.store.dispatch(auth());
    this.cachedTheme = localStorage.getItem("theme");
    this.store.dispatch(
      changeTheme({ theme: this.cachedTheme ? this.cachedTheme : "default" })
    );
    this.theme$ = this.store
      .select("cardsData")
      .pipe(map((data) => data.theme));
    if (isDevMode())
      this.store
        .select("cardsData")
        .subscribe((data) => console.log(data.currLecture));
    //log state only in development mode

    this.titleService.setTitle("Home");
  }
}
