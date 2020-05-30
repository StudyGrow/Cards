import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Notification, HttpError, InfoMessage } from "../models/Notification";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  private notifications$ = new BehaviorSubject<Notification[]>([]);
  constructor(private router: Router) {}

  addNotification(n: Notification) {
    let notifications = this.notifications$.getValue();
    notifications.push(n);
  }

  //removes a specific notification
  removeNotification(index: number) {
    let notifications = this.notifications$.getValue();
    notifications.splice(index, 1); //remove error at position index
    this.notifications$.next(notifications);
  }

  //remove notifations by type
  clearNotifications(...types: string[]) {
    let notifs = this.notifications$.getValue();
    types.forEach((type) => {
      for (let i = 0; i < notifs.length; i++) {
        if (notifs[i].type === type) {
          this.removeNotification(i);
        }
      }
    });

    this.notifications$.next(notifs);
  }

  notifications(): Observable<Notification[]> {
    return this.notifications$.asObservable();
  }

  //because errors suck and we dont have a unified error handling system in the backend
  handleErrors(error) {
    this.clearNotifications("warning", "success", "info");
    let err = error.error;
    console.log(error);
    if (error.status == 400) {
      this.addNotification(
        new HttpError("Du musst dich einloggen, um diese Seite zu besuchen")
      );
    } else if (error.status == 422) {
      if (typeof err == "string") {
        this.addNotification(new HttpError(err, error.status));
      } else if (typeof err == "object") {
        this.addNotification(
          new HttpError(
            "Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.",
            error.status
          )
        );
        console.log(err);
      } else {
        for (const e of err) {
          this.addNotification(new HttpError(e, error.status));
        }
      }
    } else if (error.status >= 500) {
      this.addNotification(
        new HttpError(
          "Der Server scheint offline zu sein. Versuche es später erneut.",
          error.status
        )
      );
    } else {
      this.addNotification(
        new HttpError(
          "Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.",
          error.status
        )
      );
    }
  }
}
