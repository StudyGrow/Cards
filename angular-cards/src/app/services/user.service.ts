import { Injectable } from "@angular/core";
import { UserInfo } from "../models/userInfo";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpService } from "./http.service";
import { Router, CanActivate } from "@angular/router";
import { tap } from "rxjs/operators";
import { InfoMessage } from "../models/Notification";
import { NotificationsService } from "./notifications.service";
@Injectable({
  providedIn: "root",
})
export class UserService implements CanActivate {
  private auth$: BehaviorSubject<boolean>; //subject which is true if user is authenticated
  private userId$ = new BehaviorSubject<string>(null);
  private accountInfo$: BehaviorSubject<UserInfo>; //stores account info of the user used
  constructor(
    private http: HttpService,
    private router: Router,
    private notifications: NotificationsService
  ) {}

  canActivate(): boolean {
    if (!this.auth$.getValue()) {
      this.notifications.addNotification(
        new InfoMessage("Du musst dich einloggen, um diese Seite zu besuchen")
      );
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
  //used to login the user
  login(form) {
    return this.http.login(form).pipe(
      tap((user) => {
        if (user) {
          this.userId$.next(user._id);
          this.auth$.next(true);
          if (form.remember) {
            localStorage.setItem("userId", JSON.stringify(user._id)); //store the user locally to keep the session
          }
        } else {
          this.userId$.next(null);
          this.auth$.next(false);
          localStorage.removeItem("loggedIn");
        }
      })
    );
  }
  createAccount(form) {
    this.http.createAccount(form).subscribe((user) => {
      this.userId$.next(user._id);
      this.auth$.next(true);
    });
  }
  getUserId(): Observable<string> {
    return this.userId$.asObservable();
  }
  logout() {
    this.http.logout();
    this.auth$.next(false);
    localStorage.removeItem("loggedIn");
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
      this.accountInfo$ = new BehaviorSubject<UserInfo>(null);
      this.http.getUserInfo().subscribe((info) => {
        this.accountInfo$.next(info);
      });
      return this.accountInfo$.asObservable();
    }
  }
}
