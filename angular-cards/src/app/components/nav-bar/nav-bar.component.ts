import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Card } from "../../models/Card";
import { Router, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { CardsService } from "src/app/services/cards.service";
import { NotificationsService } from "../../services/notifications.service";

import { StatesService } from "src/app/services/states.service";
import { Notification } from "../../models/Notification";
import { UserService } from "../../services/user.service";
import {
  pulseOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";
import { Subscription, Observable } from "rxjs";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
  animations: [
    pulseOnEnterAnimation({ scale: 1.05, duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 200 }),
  ],
})
export class NavBarComponent implements OnInit, OnDestroy {
  public loggedIn: boolean;
  public cards: Card[] = [];
  public notifications: Notification[];
  subscriptions$: Subscription[] = [];
  public loading$: Observable<boolean>;
  private cardsSub: Subscription;
  public constructor(
    private router: Router,
    private titleService: Title,
    private cdr: ChangeDetectorRef,
    private cardsService: CardsService,
    private statesService: StatesService,
    private notification: NotificationsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.setPageTitle();
    let sub = this.userService
      .authentication()
      .subscribe((val) => (this.loggedIn = val));
    this.subscriptions$.push(sub);

    this.loading$ = this.statesService.getLoadingState();

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.handleRouteChanges();
        });
      }
    });

    sub = this.notification
      .notifications()
      .subscribe((notifs) => (this.notifications = notifs));
    this.subscriptions$.push(sub);
  }
  handleRouteChanges() {
    if (!this.router.url.match(/vorlesung/)) {
      this.cards = null;
      if (this.cardsSub) {
        this.cardsSub.unsubscribe();
      }
    } else if (!this.cards) {
      this.cardsSub = this.cardsService.getCards().subscribe((cards) => {
        this.cards = cards;
      });
    }
    this.statesService.closeDrawer();
    if (!this.router.url.match(/account/)) {
      this.userService.clearAccountInfo();
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
