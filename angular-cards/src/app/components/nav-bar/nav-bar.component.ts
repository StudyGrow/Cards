import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/Card";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { User } from "src/app/models/User";
import { HttpService } from "src/app/services/http.service";
import { CardsService } from "src/app/services/cards.service";
import { NotificationsService } from "../../services/notifications.service";
import { Vorlesung } from "src/app/models/Vorlesung";
import { StatesService } from "src/app/services/states.service";
import { Notification } from "../../models/Notification";
import { UserService } from "../../services/user.service";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
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
      //this.notification.clearNotifications();
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
