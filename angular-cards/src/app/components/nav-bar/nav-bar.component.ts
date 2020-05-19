import { Component, OnInit } from "@angular/core";
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
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
  animations: [
    pulseOnEnterAnimation({ scale: 1.05, duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 200 }),
  ],
})
export class NavBarComponent implements OnInit {
  public loggedIn: boolean;
  public cards: Card[];
  public notifications: Notification[];

  public loading: boolean = false;
  public constructor(
    private router: Router,
    private titleService: Title,

    private cardsService: CardsService,
    private statesService: StatesService,
    private notification: NotificationsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.setPageTitle();
    this.userService.authentication().subscribe((val) => (this.loggedIn = val));
    this.statesService.getLoadingState().subscribe((val) => {
      this.loading = val;
    });
    this.router.events.subscribe((e) => {
      //clear messages on route change

      if (e instanceof NavigationEnd) {
        if (this.router.url == "/") {
          this.notification.clearNotifications("alert"); //prevent successfull login message from being removed on home
        } else {
          this.notification.clearNotifications("alert", "success");
        }
      }
    });
    this.notification
      .getNotifications()
      .subscribe((notifs) => (this.notifications = notifs));
    if (this.router.url.match(/vorlesung/)) {
      this.cardsService.getCards().subscribe((cards) => {
        this.cards = cards;
      });
    }
  }
  closeAlert(i: number) {
    this.notification.removeNotification(i);
  }
  isActive(path: string): string {
    return path === this.router.url ? "active" : "";
  }
  setAlertClass(notif: Notification) {
    return `alert alert-${notif.type} alert-dismissible fade show`;
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
    }
    this.titleService.setTitle(currentTitle);
  }
  logout() {
    this.userService.logout();

    this.router.navigate(["/"]);
  }
}
