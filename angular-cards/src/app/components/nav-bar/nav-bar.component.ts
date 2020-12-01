import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Card } from "../../models/Card";
import {
  Router,
  NavigationEnd,
  RouterEvent,
  NavigationStart,
  RoutesRecognized,
} from "@angular/router";
import { Title } from "@angular/platform-browser";

import { NotificationsService } from "../../services/notifications.service";

import { Notification } from "../../models/Notification";
import { UserService } from "../../services/user.service";

import { Subscription, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import {
  toggleDrawerState,
  setDrawerState,
  resetFilter,
  changeTheme,
} from "src/app/store/actions/actions";
import { filter, map, withLatestFrom } from "rxjs/operators";
import {
  authenticated,
  getCardsData,
  selectActiveIndex,
  selectAllCards,
} from "src/app/store/selector";
import { clearCardData, fetchCards } from "src/app/store/actions/cardActions";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { AppState, Data, Mode } from "src/app/models/state";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit, OnDestroy {
  private data$: Observable<Data> = this.store.select("data");
  private mode$: Observable<Mode> = this.store.select("mode");

  loggedIn: boolean;
  cards: Card[] = [];

  experiment: boolean = false;
  subscriptions$: Subscription[] = [];
  showSearch: boolean;
  loading: boolean;
  loading$: Observable<boolean>;
  progress$: Observable<number>;

  public constructor(
    private router: Router,
    private titleService: Title,
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      let sub = this.mode$
        .pipe(map((state) => state.loading))
        .subscribe((val) => {
          this.loading = val > 0;
          this.cdr.detectChanges();
        });
      this.subscriptions$.push(sub);

      let cardCount$ = this.store.pipe(
        map(selectAllCards),
        map((cards) => cards?.length)
      );
      //progress of carousel. will be undefined if there are no cards
      this.progress$ = this.store.pipe(
        map(selectActiveIndex),
        withLatestFrom(cardCount$),
        map(([curr, all]) => (all ? (100 * curr) / all : undefined))
      );

      sub = this.router.events
        .pipe(filter((e): e is RouterEvent => e instanceof RouterEvent))
        .subscribe((e) => {
          this.handleRouteChanges(e);
        });
      this.subscriptions$.push(sub);
    }, 1);
  }

  private handleRouteChanges(e: RouterEvent) {
    if (e instanceof RoutesRecognized) {
      this.store.dispatch(setDrawerState({ show: false })); //hide drawer when changing route
      this.setPageTitle(e);
      if (e.url.match(/vorlesung/)) {
        this.showSearch = true;
        //this.store.dispatch(fetchCards());
      } else {
        this.showSearch = false;
      }
    } else if (e instanceof NavigationEnd) {
      if (!e.url.match(/vorlesung/)) this.store.dispatch(clearCardData()); //clear card data on store when leaving lecture route
    }
  }
  private updateTitle() {
    if (this.router.url.match(/account/)) {
      this.titleService.setTitle("Account");
    } else if (this.router.url == "/") {
      this.titleService.setTitle("Home");
    }
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  isActive(path: string): string {
    return path === this.router.url ? "active" : "";
  }

  setPageTitle(e: RouterEvent): void {
    let currentTitle = "Cards";

    switch (e.url) {
      case "/login":
        currentTitle = "Login";
        break;
      case "/signup":
        currentTitle = "Sign Up";
        break;
      case "/":
        currentTitle = "Home";
        break;

      default:
        if (this.router.url.match(/account/)) {
          currentTitle = "Account";
        }
        break;
    }
    this.titleService.setTitle(currentTitle);
  }
  drawerToggle() {
    this.store.dispatch(toggleDrawerState());
  }
}
