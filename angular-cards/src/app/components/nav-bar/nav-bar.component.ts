import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Card } from "../../models/Card";
import {
  Router,
  NavigationEnd,
  RouterEvent,
  NavigationStart,
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
} from "src/app/store/actions/actions";
import { filter, map } from "rxjs/operators";
import { authenticated, getCardsData } from "src/app/store/selector";
import { clearCardData, fetchCards } from "src/app/store/actions/cardActions";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit, OnDestroy {
  public loggedIn: boolean;
  public cards: Card[] = [];

  subscriptions$: Subscription[] = [];
  showSearch: boolean;
  public loading: boolean;
  public loading$: Observable<boolean>;

  public constructor(
    private router: Router,
    private titleService: Title,

    private notification: NotificationsService,

    private cdr: ChangeDetectorRef,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      let sub = this.store
        .select("cardsData")
        .pipe(map((state) => state.loading))
        .subscribe((val) => {
          this.loading = val;
          this.cdr.detectChanges();
        });
      this.subscriptions$.push(sub);

      sub = this.router.events
        .pipe(filter((e): e is RouterEvent => e instanceof RouterEvent))
        .subscribe((e) => {
          this.handleRouteChanges(e);
        });
      this.subscriptions$.push(sub);
    }, 1);
  }
  private handleRouteChanges(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      this.store.dispatch(setDrawerState({ show: false })); //hide drawer when changing route
      this.setPageTitle(e);
      if (e.url.match(/vorlesung/)) {
        this.showSearch = true;
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
