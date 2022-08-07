import { Injectable } from '@angular/core';
import { UserInfo } from '../models/UserInfo';
import { Observable, BehaviorSubject, of, Subject, Subscription } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { tap, map, share } from 'rxjs/operators';
import { InfoMessage, WarnMessage, SuccessMessage } from '../models/Notification';
import { NotificationsService } from './notifications.service';
import { HttpConfig } from './config';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';
import { Store } from '@ngrx/store';

import { AUTHORIZED } from '../store/selector';
import { AppState } from '../models/state';
import { GetUserGQL, LoginGQL, RegisterGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class UserService implements CanActivate {
  private config = new HttpConfig();

  constructor(
    private http: HttpClient, //for sending http requests
    private store: Store<AppState>,
    private router: Router, //to redirect
    private notifications: NotificationsService, //to show notifications
    private getUserGQL: GetUserGQL,
    private loginGQL: LoginGQL,
    private registerGQL: RegisterGQL
  ) {}

  //checks wheter page can be accessed. returns the authentication subject while redirecting
  //to login page if the result is false
  canActivate(): Observable<boolean> {
    return this.store.select(AUTHORIZED);
  }

  //central function to handle authentication
  //it makes the http authentication call only the first time
  //and caches the result in a subject which is returned on subsequent calls
  authentication(): Observable<boolean> {
    try {
      return this.getUserGQL.watch().valueChanges.pipe(
        map((res) => {
          if (res.data.getUser) {
            return true;
          } else {
            return false;
          }
        })
      );
    } catch (error) {
      console.log(error);
      return Observable.apply(false);
    }
  }
  //used to login the user
  login(form: any): Observable<User> {
    return this.loginGQL
      .watch({
        password: form.password,
        username: form.username,
      })
      .valueChanges.pipe(
        map((res) => {
          return res.data.login;
        })
      );
  }
  //used to login the user with google callback
  googleCallbackLogin(callbackUrl: string): Observable<User> {
    return this.http.get<User>(callbackUrl, {
      headers: this.config.headers,
    });
  }
  logoutServer(): Observable<boolean> {
    return this.http.get<boolean>(this.config.urlBase + 'auth/logout');
  }
  createAccount(form: any): Observable<User> {
    return this.registerGQL
      .mutate({
        email: form.email,
        password: form.password,
        username: form.username,
      })
      .pipe(
        map((res) => {
          return res.data.register;
        })
      );
  }

  getUserInfo(): Observable<UserInfo> {
    return this.getUserGQL.watch().valueChanges.pipe(
      map((res) => {
        return { user: res.data.getUser };
      })
    );
    return this.http
      .get<UserInfo>(this.config.urlBase + 'user/info', {
        observe: 'response',
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
          () => {
            this.router.navigateByUrl('/login');
          }
        ),
        map((res) => res.body)
      );
  }

  removeAcc(): Observable<any> {
    return this.http
      .put(this.config.urlBase + 'user/delete', null, {
        headers: this.config.headers,
        observe: 'response',
      })
      .pipe(map((res) => res.body));
  }

  uploadFile(file: FormData): Observable<boolean> {
    // console.log(file);
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
      .put<any>(this.config.urlBase + 'user/updateAccount', form, {
        headers: this.config.headers,
        observe: 'response',
      })
      .pipe(
        tap((res) => {
          this.notifications.addNotification(new SuccessMessage('Deine Informationen wurden erfolgreich aktualisiert'));
        }),
        map((res) => {
          return form;
        })
      );
  }

  updatePassword(form) {
    return this.http
      .put<any>(this.config.urlBase + 'user/updatePassword', form, {
        headers: this.config.headers,
        observe: 'response',
      })
      .pipe(
        tap((res) => {
          this.notifications.addNotification(new SuccessMessage('Dein Passwort wurde erfolgreich aktualisiert'));
        })
      );
  }
}
