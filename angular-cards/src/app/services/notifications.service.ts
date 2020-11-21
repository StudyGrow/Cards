import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Notification, WarnMessage, InfoMessage } from "../models/Notification";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  private notifications$ = new BehaviorSubject<Notification[]>([]);
  constructor(private router: Router) {}

  addNotification(n: Notification) {
    let notifications = this.notifications$.getValue();
    notifications.push(n);
    this.notifications$.next(notifications);
  }

  //removes a specific notification
  removeNotification(index: number) {
    let notifications = this.notifications$.getValue();
    notifications.splice(index, 1); //remove error at position index
    this.notifications$.next(notifications);
  }

  //remove notifations by type, if no type is provided, all notifications are removed
  clearNotifications(...types: string[]) {
    let notifs = this.notifications$.getValue();
    if (types.length == 0) notifs = [];
    else
      types.forEach((type) => {
        for (let i = 0; i < notifs.length; i++) {
          if (notifs[i].type === type) {
            this.removeNotification(i);
          }
        }
      });

    this.notifications$.next(notifs);
  }

  get notifications(): Observable<Notification[]> {
    return this.notifications$.asObservable();
  }

  //because errors suck and we dont have a unified error handling system in the backend
  handleErrors(error: HttpErrorResponse) {
    let err = error.error;
    console.log(error);
    switch (error.status) {
      case 401:
        if (error.url.includes("api/login"))
          this.addNotification(new WarnMessage(err));
        break;
      case 403:
        this.addNotification(
          new WarnMessage("Du musst dich einloggen, um diese Seite zu besuchen")
        );
        break;
      case 422:
        if (typeof err == "string") {
          this.addNotification(new WarnMessage(err, error.status));
        } else if (typeof err == "object") {
          this.addNotification(
            new WarnMessage(
              "Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.",
              error.status
            )
          );
          console.log(err);
        } else {
          for (const e of err) {
            this.addNotification(new WarnMessage(e, error.status));
          }
        }
        break;
      case 500:
        this.addNotification(
          new WarnMessage(
            "Der Server scheint offline zu sein. Versuche es später erneut.",
            error.status
          )
        );
        break;
      case 504:
        this.addNotification(
          new WarnMessage(
            "Der Server scheint offline zu sein. Versuche es später erneut.",
            error.status
          )
        );
        break;
      default:
        this.addNotification(
          new WarnMessage(
            "Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.",
            error.status
          )
        );
        break;
    }
  }
}
