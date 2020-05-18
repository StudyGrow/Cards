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

  //removes a specific error from the error array
  removeNotification(index: number) {
    let notifications = this.notifications$.getValue();
    notifications.splice(index, 1); //remove error at position index
    this.notifications$.next(notifications);
  }
  clearNotifications() {
    this.notifications$.next([]);
  }
  removeLoginInfo() {
    let notifs = this.notifications$.getValue();
    for (let i = 0; i < notifs.length; i++) {
      if (notifs[i] instanceof InfoMessage) {
        //only check if notif is of type InfoMessage as LoginInfo is the only info message for now
        this.removeNotification(i);
      }
    }
  }
  getNotifications(): Observable<Notification[]> {
    return this.notifications$.asObservable();
  }

  //because errors suck and we dont have a unified error handling system in the backend
  handleErrors(error) {
    let err = error.error;
    console.log(error);
    if (error.status == 400) {
      this.addNotification(
        new HttpError("Bitte logge dich erst ein.", error.status)
      );
      this.router.navigateByUrl("/login");
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
