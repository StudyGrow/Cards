import { Injectable } from "@angular/core";
import { UserInfo } from "../models/UserInfo";
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
  private userId$ = new BehaviorSubject<string>(null); //subject which stores the userid
  private accountInfo$: BehaviorSubject<UserInfo>; //stores account info of the user
  private auth$: BehaviorSubject<boolean>; //subject which holds wether the user is authenticated

  private config = new HttpConfig();

  constructor(
    private http: HttpClient, //for sending http requests
    private statesService: StatesService, //to set the loadingstate
    private router: Router, //to redirect
    private notifications: NotificationsService //to show notifications
  ) {}

  //checks wheter page can be accessed. returns the authentication subject while redirecting
  //to login page if the result is false
  canActivate(): Observable<boolean> {
    this.statesService.setLoadingState(true);
    return this.authentication().pipe(
      tap((res) => {
        this.statesService.setLoadingState(false);
        if (res === false) {
          this.notifications.addNotification(
            new InfoMessage(
              "Du musst dich einloggen, um diese Seite zu besuchen"
            )
          );
          this.router.navigate(["login"]);
        }
      })
    );
  }

  //central function to handle authentication
  //it makes the http authentication call only the first time
  //and caches the result in a subject which is returned on subsequent calls
  authentication(): Observable<boolean> {
    if (!this.auth$) {
      //not initialized -> make first http call
      this.auth$ = new BehaviorSubject<boolean>(false); //assume not logged in
      this.http
        .get<boolean>(this.config.urlBase + "user/auth", {
          observe: "response",
        })
        .subscribe(
          (res) => {
            this.setLogin(res.body); //update the subject with the response
          },
          (err) => {
            if (err.status !== 304) {
              //reset authentication only if no 304 code
              this.setLogin(false);
            }
          }
        );
    }
    return this.auth$.asObservable();
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
          this.setUserId(res.body._id);
          this.notifications.removeLoginInfo();
          this.notifications.addNotification(
            new SuccessMessage(`Herzlich willkommen ${res.body.username}`)
          );
          this.router.navigateByUrl("/");
        },
        (error) => {
          this.notifications.handleErrors(error);
          this.setLogin(false);
          this.statesService.setLoadingState(false);
        }
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
          this.setUserId(res.body._id);
          this.setLogin(true);
          this.statesService.setLoadingState(false);
          this.router.navigate(["/"]);
        },
        (error) => {
          this.notifications.handleErrors(error);
          this.statesService.setLoadingState(false);
        }
      );
  }
  getUserId(): Observable<string> {
    if (this.userId$.getValue()) {
      return this.userId$.asObservable();
    } else if (this.auth$) {
      return this.http
        .get<string>(this.config.urlBase + "user/id", { observe: "response" })
        .pipe(
          tap((res) => {
            if (res.body) {
              this.setUserId(res.body);
            }
          }),
          map((res) => res.body)
        );
    }
  }

  getUserInfo(): Observable<UserInfo> {
    if (this.accountInfo$ && this.accountInfo$.getValue()) {
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
            if (res.body.user && res.body.user.creationDate) {
              res.body.user.creationDate = new Date(res.body.user.creationDate);
            }
            this.setUserId(res.body.user._id);
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
  logout() {
    this.statesService.setLoadingState(true);
    this.http
      .get<any>(this.config.urlBase + "user/logout", { observe: "response" })
      .subscribe(
        (res) => {
          this.statesService.setLoadingState(false);
          this.setUserId(null);
          this.setLogin(false);
          this.notifications.addNotification(
            new SuccessMessage("Erfolgreich abgemeldet")
          );
        },
        (error) => {
          this.setUserId(null);
          this.setLogin(false);
          this.notifications.handleErrors(error);
          this.statesService.setLoadingState(false);
        }
      );
  }

  deleteAccount() {
    console.log("not yet implemented");
  }

  private setUserId(id: string) {
    this.userId$.next(id);
    if (id) {
      //if id exists user is logged
      this.setLogin(true);
    }
  }
  private setLogin(val: boolean) {
    if (this.auth$) {
      this.auth$.next(val);
    } else {
      this.auth$ = new BehaviorSubject<boolean>(val);
    }
    if (val === false) {
      //user not logged in, so remove userid as well
      this.setUserId(null);
    }
  }
}
