import { Injectable } from "@angular/core";
import { UserInfo } from "../models/userInfo";
import { Observable, BehaviorSubject } from "rxjs";
import { Router, CanActivate } from "@angular/router";
import { tap, map } from "rxjs/operators";
import { InfoMessage, HttpError, SuccessMessage } from "../models/Notification";
import { NotificationsService } from "./notifications.service";
import { HttpConfig } from "./config";
import { HttpClient } from "@angular/common/http";
import { StatesService } from "./states.service";
import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class UserService implements CanActivate {
  private auth$ = new BehaviorSubject<boolean>(false); //subject which is true if user is authenticated
  private userId$ = new BehaviorSubject<string>(null);
  private accountInfo$: BehaviorSubject<UserInfo>; //stores account info of the user used
  private config = new HttpConfig();
  constructor(
    private http: HttpClient, //for sending http requests
    private statesService: StatesService,
    private router: Router,
    private notifications: NotificationsService
  ) {}

  canActivate(): boolean {
    if (this.auth$.getValue()) {
      return true;
    } else {
      let id = localStorage.getItem("userId");
      if (id) {
        this.setUser(id);
        return true;
      } else {
        this.notifications.addNotification(
          new InfoMessage("Du musst dich einloggen, um diese Seite zu besuchen")
        );
        this.setUser(null);
        this.router.navigate(["login"]);
        return false;
      }
    }
  }
  //used to login the user
  login(form) {
    this.statesService.setLoadingState(true);
    return this.http
      .post<User>(this.config.urlBase + "login", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
            this.setUser(res.body._id, form.remember);
            this.notifications.removeLoginInfo();
            this.notifications.addNotification(
              new SuccessMessage(`Herzlich willkommen ${res.body.username}`)
            );
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.setUser(null);
            this.statesService.setLoadingState(false);
          }
        )
      );
  }
  createAccount(form): Observable<User> {
    return this.http
      .post<User>(this.config.urlBase + "user/new", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.setUser(res.body._id);
            this.statesService.setLoadingState(false);
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        ),
        map((res) => res.body)
      );
  }

  getUserId(): Observable<string> {
    return this.userId$.asObservable();
  }

  logout() {
    this.statesService.setLoadingState(true);
    this.http
      .get<any>(this.config.urlBase + "user/logout", { observe: "response" })
      .subscribe(
        (res) => {
          this.statesService.setLoadingState(false);
          this.setUser(null);
          this.notifications.addNotification(
            new SuccessMessage("Erfolgreich abgemeldet")
          );
        },
        (error) => {
          this.notifications.handleErrors(error);
          this.statesService.setLoadingState(false);
        }
      );
  }

  authentication(): Observable<boolean> {
    if (this.auth$) {
      return this.auth$.asObservable();
    } else {
      let id = localStorage.getItem("userId");
      if (id) {
        this.auth$ = new BehaviorSubject<boolean>(true);
        this.userId$.next(id);
      } else {
        this.auth$ = new BehaviorSubject<boolean>(false);
      }
      return this.auth$.asObservable();
    }
  }

  getUserInfo(): Observable<UserInfo> {
    if (this.accountInfo$) {
      return this.accountInfo$.asObservable();
    } else {
      this.statesService.setLoadingState(true);
      this.accountInfo$ = new BehaviorSubject<UserInfo>(null);
      this.http
        .get<UserInfo>(this.config.urlBase + "user/info", {
          observe: "response",
        })
        .subscribe(
          (res) => {
            this.statesService.setLoadingState(false);
            for (const card of res.body.cards) {
              card.date = new Date(card.date);
            }

            this.accountInfo$.next(res.body);
          },
          (error) => {
            this.router.navigateByUrl("/login");
            this.statesService.setLoadingState(false);
            this.notifications.handleErrors(error);
          }
        );
      return this.accountInfo$.asObservable();
    }
  }
  updateAccount(form) {
    this.statesService.setLoadingState(true);
    this.http
      .put<any>(this.config.urlBase + "user/updateAccount", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .subscribe(
        (res) => {
          this.statesService.setLoadingState(false);

          let info = this.accountInfo$.getValue();
          info.user = form;
          this.accountInfo$.next(info);
          this.notifications.addNotification(
            new SuccessMessage(
              "Deine Informationen wurden erfolgreich aktualisiert"
            )
          );
        },
        (error) => {
          this.notifications.handleErrors(error);
          this.statesService.setLoadingState(false);
        }
      );
  }

  updatePassword(form) {
    this.statesService.setLoadingState(true);
    return this.http
      .put<any>(this.config.urlBase + "user/updatePassword", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
            this.notifications.addNotification(
              new SuccessMessage("Dein Passwort wurde erfolgreich aktualisiert")
            );
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        )
      );
  }

  deleteAccount() {
    console.log("not yet implemented");
  }
  private setUser(id: string, remember?: boolean) {
    if (id) {
      this.userId$.next(id);
      this.auth$.next(true);
      if (remember) {
        localStorage.setItem("userId", JSON.stringify(id)); //store the user locally to keep the session
      }
    } else {
      this.userId$.next(null);
      this.auth$.next(false);
      localStorage.removeItem("userId");
    }
  }
}
