import { Injectable } from "@angular/core";
import { UserInfo } from "../models/UserInfo";
import { Observable, BehaviorSubject, of, Subject, Subscription } from "rxjs";
import { Router, CanActivate } from "@angular/router";
import { tap, map, share } from "rxjs/operators";
import { InfoMessage, HttpError, SuccessMessage } from "../models/Notification";
import { NotificationsService } from "./notifications.service";
import { HttpConfig } from "./config";
import { HttpClient } from "@angular/common/http";

import { User } from "../models/User";
import { Store } from "@ngrx/store";

import { authenticated } from "../store/selector";

@Injectable({
  providedIn: "root",
})
export class UserService implements CanActivate {
  private accountInfo$: BehaviorSubject<UserInfo>; //stores account info of the user

  private config = new HttpConfig();

  constructor(
    private http: HttpClient, //for sending http requests
    private store: Store<any>,
    private router: Router, //to redirect
    private notifications: NotificationsService //to show notifications
  ) {}

  //checks wheter page can be accessed. returns the authentication subject while redirecting
  //to login page if the result is false
  canActivate(): Observable<boolean> {
    return this.store.select("cardsData").pipe(map(authenticated));
  }

  //central function to handle authentication
  //it makes the http authentication call only the first time
  //and caches the result in a subject which is returned on subsequent calls
  authentication(): Observable<boolean> {
    return this.http
      .get<boolean>(this.config.urlBase + "user/auth")
      .pipe(share());
  }
  //used to login the user
  login(form: User): Observable<User> {
    return this.http
      .post<User>(this.config.urlBase + "login", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.notifications.clearNotifications("success");
            this.notifications.addNotification(
              new SuccessMessage(`Herzlich willkommen ${res.body.username}`)
            );
          },
          (error) => {
            this.notifications.handleErrors(error);
          }
        ),
        map((res) => res.body)
      );
  }
  createAccount(form) {
    this.http
      .post<User>(this.config.urlBase + "user/new", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .subscribe(
        (res) => {
          this.router.navigateByUrl("/login");
        },
        (error) => {
          this.notifications.handleErrors(error);
        }
      );
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http
      .get<UserInfo>(this.config.urlBase + "user/info", {
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            for (const card of res.body.cards) {
              card.date = new Date(card.date);
            }
            if (res.body.user && res.body.user.creationDate) {
              res.body.user.creationDate = new Date(res.body.user.creationDate);
            }
          },
          (error) => {
            this.router.navigateByUrl("/login");
            this.notifications.handleErrors(error);
          }
        ),
        map((res) => res.body)
      );
  }
  clearAccountInfo() {
    if (this.accountInfo$ && !this.router.url.match(/account/)) {
      this.accountInfo$.next(null);
    }
  }

  removeAcc(): Observable<any> {
    return this.http
      .put(this.config.urlBase + "user/delete", null, {
        headers: this.config.headers,
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            console.log(res);
          },
          (error) => {
            this.notifications.handleErrors(error);
          }
        ),
        map((res) => res.body)
      );
  }

  uploadFile(file: FormData): Observable<boolean> {
    console.log(file);
    //this.statesService.setLoadingState(true);
    // return this.http
    //   .post<boolean>(this.config.urlBase + "user/pic", file, {
    //     observe: "response",
    //   })
    //   .pipe(
    //     tap(
    //       (res) => {
    //         this.statesService.setLoadingState(false);
    //         this.notifications.addNotification(
    //           new SuccessMessage("Profilbild wurde erfolgreich geändert")
    //         );
    //       },
    //       (error) => {
    //         this.statesService.setLoadingState(false);
    //         console.log(error);
    //       }
    //     ),
    //     map((res) => res.body)
    //   );
    return of(true);
  }
  updateAccount(form: User): Observable<User> {
    return this.http
      .put<any>(this.config.urlBase + "user/updateAccount", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            console.log(res);
            this.notifications.addNotification(
              new SuccessMessage(
                "Deine Informationen wurden erfolgreich aktualisiert"
              )
            );
          },
          (error) => {
            this.notifications.handleErrors(error);
          }
        ),
        map((res) => {
          return form;
        })
      );
  }

  updatePassword(form) {
    return this.http
      .put<any>(this.config.urlBase + "user/updatePassword", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .pipe(
        tap((res) => {
          this.notifications.addNotification(
            new SuccessMessage("Dein Passwort wurde erfolgreich aktualisiert")
          );
        })
      );
  }
  logoutServer(): Observable<any> {
    return this.http
      .get<any>(this.config.urlBase + "user/logout", { observe: "response" })
      .pipe(
        map((res) => res.body),
        share()
      );
  }
}
