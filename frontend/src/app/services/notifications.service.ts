import { Injectable, isDevMode } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Notification, WarnMessage, InfoMessage } from '../models/Notification';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private notifications$ = new BehaviorSubject<Notification[]>([]);
  constructor(private router: Router, private translate: TranslateService) {}

  addNotification(n: Notification) {
    setTimeout(() => {
      let notifications = this.notifications$.getValue();
      for (const notif of notifications) {
        if (notif.message.includes(n.message)) {
          return;
        }
      }
      notifications.push(n);
      this.notifications$.next(notifications);
    });
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
    let message = this.translate.instant('notifications.unknown-error'); //default error message
    switch (error.status) {
      case 401:
        if (error.url.includes('api/login')) this.addNotification(new InfoMessage(err));
        break;
      case 403:
        this.addNotification(new WarnMessage(this.translate.instant('notifications.login-required')));
        break;
      case 422:
        if (error.url.includes('?abrv')) {
          this.router.navigateByUrl('/');
          this.addNotification(
            new WarnMessage(this.translate.instant('notifications.lecture-not-found'), error.status)
          );
          break;
        }
        if (typeof err == 'string') {
          if (err.includes('nicht eingeloggt')) break;

          this.addNotification(new WarnMessage(err, error.status));
        } else if (typeof err == 'object') {
          // this.addNotification(
          //   new WarnMessage(
          //     'Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.',
          //     error.status
          //   )
          // );
          if (isDevMode()) {
            console.error(err);
          }
        } else {
          for (const e of err) {
            this.addNotification(new WarnMessage(e, error.status));
          }
        }
        break;
      case 500:
        message =
          this.translate.instant('notifications.server-offline') +
          ' ' +
          this.translate.instant('notifications.check-later');
        this.addNotification(new WarnMessage(message, error.status));
        this.router.navigateByUrl('/');
        break;
      case 504:
        message =
          this.translate.instant('notifications.server-offline') +
          ' ' +
          this.translate.instant('notifications.check-later');
        this.addNotification(new WarnMessage(message, error.status));
        break;
      default:
        message =
          this.translate.instant('notifications.unknown-error') +
          ' ' +
          this.translate.instant('notifications.check-later');
        this.addNotification(new WarnMessage(message, error.status));
        break;
    }
  }
}
