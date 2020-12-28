import { Component, ViewChild, ElementRef, isDevMode } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppState } from "./models/state";
import { LecturesService } from "./services/lectures.service";
import { ThemesService } from "./services/themes.service";
import { changeTheme } from "./store/actions/actions";
import { auth } from "./store/actions/UserActions";
import { selectFilteredCards } from "./store/selector";

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
    private store: Store<AppState>,

    private themeManager: ThemesService
  ) {
    this.store.dispatch(auth());

    this.themeManager.initTheme(); //initialize theme

    if (isDevMode()) {
      this.store.subscribe((state) => {
        console.log(state, state.data.cardData.cards?.length);
      });
    }
    //log state only in development mode

    this.titleService.setTitle("Home");
  }
}
