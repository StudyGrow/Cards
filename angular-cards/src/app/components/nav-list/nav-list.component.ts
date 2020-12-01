import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router, NavigationEnd } from "@angular/router";
import { CardsService } from "src/app/services/cards.service";
import { Card } from "src/app/models/Card";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { authenticated } from "src/app/store/selector";
import { Observable, Subscription } from "rxjs";
import { logout as logoutUser } from "src/app/store/actions/UserActions";
import { NotificationsService } from "src/app/services/notifications.service";
import { Notification, SuccessMessage } from "src/app/models/Notification";
import { changeTheme } from "src/app/store/actions/actions";
import {
  MatSlideToggle,
  MatSlideToggleChange,
} from "@angular/material/slide-toggle";
import { ToggleAction } from "@ngrx/store-devtools/src/actions";
import { ThemesService } from "src/app/services/themes.service";
import { AppState, Data, Mode } from "src/app/models/state";

@Component({
  selector: "app-nav-list",
  templateUrl: "./nav-list.component.html",
  styleUrls: ["./nav-list.component.scss"],
})
export class NavListComponent implements OnInit {
  loggedIn$: Observable<boolean>;
  theme$: Observable<string>;
  sub: Subscription;
  @ViewChild("darkmode") toggle: MatSlideToggle;

  private data$: Observable<Data> = this.store.select("data");
  private mode$: Observable<Mode> = this.store.select("mode");

  constructor(
    private router: Router,
    private store: Store<AppState>,

    private themeManager: ThemesService
  ) {}

  toggleDarkMode(e: MatSlideToggleChange) {
    let theme = e.checked ? "dark-theme" : "default"; //theme which should be switched
    this.themeManager.changeTheme(theme);
  }
  ngOnInit(): void {
    this.theme$ = this.mode$.pipe(map((data) => data.theme));

    this.sub = this.theme$.subscribe((theme) => {
      //initially set the toggle state
      if (theme === "dark-theme" && this.toggle && !this.toggle.checked) {
        this.toggle.toggle();
        this.sub.unsubscribe();
      }
    });

    this.loggedIn$ = this.data$.pipe(map(authenticated));
  }

  logout() {
    this.store.dispatch(logoutUser());
  }
  isActive(path: string): string {
    return path === this.router.url ? "active" : "";
  }
}
