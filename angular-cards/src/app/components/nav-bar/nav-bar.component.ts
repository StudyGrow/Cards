import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Card } from "../../models/Card";
import { Router, NavigationEnd } from "@angular/router";
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
import { map } from "rxjs/operators";
import { selectCurrentLecture, authenticated } from "src/app/store/selector";
import { clearCardData } from "src/app/store/actions/cardActions";
import { fetchUserData } from "src/app/store/actions/UserActions";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit, OnDestroy {
  public loggedIn: boolean;
  public cards: Card[] = [];
  public notifications: Notification[];
  subscriptions$: Subscription[] = [];
  showCards: boolean;
  public loading: boolean;
  public loading$: Observable<boolean>;

  public constructor(
    private router: Router,
    private titleService: Title,

    private notification: NotificationsService,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.setPageTitle();
      let sub = this.store
        .select("cardsData")
        .pipe(map((state) => state.loading))
        .subscribe((val) => {
          this.loading = val;
          this.cdr.detectChanges();
        });
      this.subscriptions$.push(sub);
      sub = this.store
        .select("cardsData")
        .pipe(map(authenticated))
        .subscribe((val) => {
          if (this.loggedIn != val) {
            //this will only be the case the first time this function gets called

            this.loggedIn = val;

            if (val) {
              setTimeout(() => {
                this.store.dispatch(fetchUserData()); //if user is logged in fetch userdata
              }, 1000);
            }
          }
        });
      this.subscriptions$.push(sub);

      sub = this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.handleRouteChanges();
        }
      });
      this.subscriptions$.push(sub);
      sub = this.notification
        .notifications()
        .subscribe((notifs) => (this.notifications = notifs));
      this.subscriptions$.push(sub);
    }, 1);
  }
  handleRouteChanges() {
    this.store.dispatch(setDrawerState({ show: false }));
    if (this.router.url.match(/account/)) {
      this.titleService.setTitle("Account");
    } else {
      this.userService.clearAccountInfo();
    }
    if (this.router.url.match(/vorlesung/)) {
      this.showCards = true;
    } else {
      this.store.dispatch(clearCardData());
      this.store.dispatch(resetFilter());
      this.showCards = false;
    }
    //clear messages on route change
    if (this.router.url == "/") {
      this.notification.clearNotifications("alert"); //prevent successfull login message from being removed on home
      this.titleService.setTitle("Home");
    } else {
      this.notification.clearNotifications("alert", "success");
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

  setPageTitle(): void {
    let currentTitle: string;
    switch (this.router.url) {
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
        currentTitle = "Cards";
        if (this.router.url.match(/account/)) {
          currentTitle = "Account";
        }
    }
    this.titleService.setTitle(currentTitle);
  }
  drawerToggle() {
    this.store.dispatch(toggleDrawerState());
  }
}
