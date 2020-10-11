import { Component, OnInit, OnDestroy } from "@angular/core";
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

@Component({
  selector: "app-nav-list",
  templateUrl: "./nav-list.component.html",
  styleUrls: ["./nav-list.component.scss"],
})
export class NavListComponent implements OnInit, OnDestroy {
  loggedIn: boolean;
  onCardRoute: boolean;
  loggedIn$: Observable<boolean>;
  private subs: Subscription[] = [];
  constructor(
    private notifications: NotificationsService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.select("cardsData").pipe(map(authenticated));

    let sub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.router.url.match(/vorlesung/)) {
          this.onCardRoute = true;
        } else {
          this.onCardRoute = false;
        }
      }
    });
    this.subs.push(sub);
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
  logout() {
    this.store.dispatch(logoutUser());
    this.notifications.clearNotifications();
    this.notifications.addNotification(
      new SuccessMessage("Erfolgreich abgemeldet")
    );
    this.router.navigateByUrl("/");
  }
  isActive(path: string): string {
    return path === this.router.url ? "active" : "";
  }
}
