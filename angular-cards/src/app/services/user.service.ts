import { Injectable } from "@angular/core";
import { UserInfo } from "../models/userInfo";
import { Observable, BehaviorSubject, of } from "rxjs";
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
  private userId$ = new BehaviorSubject<string>(null); //subject which stores the userid
  private accountInfo$: BehaviorSubject<UserInfo>; //stores account info of the user

  private config = new HttpConfig();

  constructor(
    private http: HttpClient, //for sending http requests
    private statesService: StatesService, //to set the loadingstate
    private router: Router, //to redirect
    private notifications: NotificationsService //to show notifications
  ) {}

  canActivate(): Observable<boolean> {
    this.statesService.setLoadingState(true);
    return this.http
      .get<boolean>(this.config.urlBase + "/user/auth", {
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
            this.auth$.next(res.body);
            if (res.body === false) {
              this.notifications.addNotification(
                new InfoMessage(
                  "Du musst dich einloggen, um diese Seite zu besuchen"
                )
              );
              this.setUser(null);
              this.router.navigate(["login"]);
            }
          },
          (err) => {
            this.statesService.setLoadingState(false);
            this.auth$.next(false);
            this.notifications.handleErrors(err);
            this.setUser(null);
            this.router.navigateByUrl("/");
          }
        ),
        map((res) => res.body)
      );
  }
  //used to login the user
  login(form) {
    this.statesService.setLoadingState(true);
    this.http
      .post<User>(this.config.urlBase + "login", form, {
        headers: this.config.headers,
        observe: "response",
      })
      .subscribe(
        (res) => {
          this.statesService.setLoadingState(false);
          this.setUser(res.body._id, form.remember);
          this.notifications.removeLoginInfo();
          this.notifications.addNotification(
            new SuccessMessage(`Herzlich willkommen ${res.body.username}`)
          );

          this.router.navigateByUrl("/");
        },
        (error) => {
          this.notifications.handleErrors(error);
          this.setUser(null);
          this.statesService.setLoadingState(false);
        }
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
            this.router.navigate(["/"]);
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
          this.router.navigate(["/"]);
        },
        (error) => {
          this.notifications.handleErrors(error);
          this.statesService.setLoadingState(false);
        }
      );
  }

  authentication(): Observable<boolean> {
    return this.auth$.asObservable();
  }

  getUserInfo(): Observable<UserInfo> {
    if (
      this.auth$.getValue() &&
      this.accountInfo$ &&
      this.accountInfo$.getValue()
    ) {
      return this.accountInfo$.asObservable();
    } else {
      this.statesService.setLoadingState(true);
      if (!this.accountInfo$) {
        this.accountInfo$ = new BehaviorSubject<UserInfo>(null);
      }
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
            this.setUser(res.body.user._id);
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
  clearAccountInfo() {
    if (this.accountInfo$ && !this.router.url.match(/account/)) {
      this.accountInfo$.next(null);
    }
  }
  uploadFile(file: FormData): Observable<boolean> {
    console.log(file);
    this.statesService.setLoadingState(true);
    return this.http
      .post<boolean>(this.config.urlBase + "user/pic", file, {
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
            this.notifications.addNotification(
              new SuccessMessage("Profilbild wurde erfolgreich geändert")
            );
          },
          (error) => {
            this.statesService.setLoadingState(false);
            console.log(error);
          }
        ),
        map((res) => res.body)
      );
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
        localStorage.setItem("loggedIn", new Boolean(true).toString()); //store the login state locally
      }
    } else {
      this.userId$.next(null);
      this.auth$.next(false);
      localStorage.removeItem("loggedIn");
    }
  }
}
