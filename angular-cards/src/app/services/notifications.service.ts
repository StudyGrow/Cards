import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Notification } from "../models/Notification";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  private notifications$ = new BehaviorSubject<Notification[]>([]);
  constructor() {}

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

  getNotifications(): Observable<Notification[]> {
    return this.notifications$.asObservable();
  }
}
