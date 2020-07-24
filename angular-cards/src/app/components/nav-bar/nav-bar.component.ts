import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Card } from "../../models/Card";
import { Router, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { NotificationsService } from "../../services/notifications.service";

import { StatesService } from "src/app/services/states.service";
import { Notification } from "../../models/Notification";
import { UserService } from "../../services/user.service";

import { Subscription } from "rxjs";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit, OnDestroy {
  public loggedIn: boolean;
  public cards: Card[] = [];
  public notifications: Notification[];
  subscriptions$: Subscription[] = [];
  showCards: boolean;
  public loading: boolean;

  public constructor(
    private router: Router,
    private titleService: Title,

    private statesService: StatesService,
    private notification: NotificationsService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.setPageTitle();
      this.statesService.getLoadingState().subscribe((val) => {
        this.loading = val;
        this.cdr.detectChanges();
      });
      let sub = this.userService
        .authentication()
        .subscribe((val) => (this.loggedIn = val));
      this.subscriptions$.push(sub);

      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.handleRouteChanges();
        }
      });

      sub = this.notification
        .notifications()
        .subscribe((notifs) => (this.notifications = notifs));
      this.subscriptions$.push(sub);
    }, 0);
  }
  handleRouteChanges() {
    this.statesService.closeDrawer();
    if (!this.router.url.match(/account/)) {
      this.userService.clearAccountInfo();
    }
    if (!this.router.url.match(/vorlesung/)) {
      this.showCards = false;
    } else {
      this.showCards = true;
    }
    //clear messages on route change
    if (this.router.url == "/") {
      this.notification.clearNotifications("alert"); //prevent successfull login message from being removed on home
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
    this.statesService.toggleDrawer();
  }
}
