import { Injectable } from '@angular/core';
import { UserInfo } from '../models/UserInfo';
import { Observable, BehaviorSubject, of, Subject, Subscription } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { tap, map, switchMap } from 'rxjs/operators';
import { defer, from } from 'rxjs';
import { InfoMessage, WarnMessage, SuccessMessage } from '../models/Notification';
import { NotificationsService } from './notifications.service';
import { HttpConfig } from './config';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';
import { Store } from '@ngrx/store';

import { AUTHORIZED } from '../store/selector';
import { AppState } from '../models/state';
import { GetUserGQL, UpdateUserGQL, CreateAccountGQL, RemoveUserGQL } from 'src/generated/graphql';

import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

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
    // private loginGQL: LoginGQL,
    private createAccountGQL: CreateAccountGQL,
    private updateUserGQL: UpdateUserGQL,
    private removeUserGQL: RemoveUserGQL,
    public afs: AngularFirestore, // Inject Firestore service
    public firebaseAuth: AngularFireAuth // Inject Firebase auth service
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
          if (res.data.me) {
            return true;
          } else {
            return false;
          }
        })
      );
    } catch (error) {
      console.error(error);
      return of(false);
    }
  }
  //used to login the user
  login(form: any): Observable<User> {
    return from(this.firebaseAuth.signInWithEmailAndPassword(form.email, form.password)).pipe(
      map((credentials) => credentials.user),
      switchMap((user) => {
        return this.getUserGQL.watch().valueChanges.pipe(
          map((res) => {
            return res.data.me;
          })
        );
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
    this.firebaseAuth.signOut();
    return of(true);
  }

  createAccount(form: any): Observable<User> {
    return from(this.firebaseAuth.createUserWithEmailAndPassword(form.email, form.password)).pipe(
      map((credentials) => credentials.user),
      switchMap((user) => {
        return this.createAccountGQL
          .mutate({
            username: form.username,
            email: form.email,
            firstName: form.name,
            lastName: form.surname,
          })
          .pipe(
            map((res) => {
              return res.data.register;
            })
          );
      })
    );
  }

  getUserInfo(): Observable<UserInfo> {
    return this.getUserGQL.watch().valueChanges.pipe(
      map((res) => {
        return { user: res.data.me };
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
    return this.removeUserGQL.mutate().pipe(
      map((res) => {
        return res.data.deleteUser;
      })
    );
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
    //         console.error(error);
    //       }
    //     ),
    //     map((res) => res.body)
    //   );
    return of(true);
  }
  updateAccount(form: User): Observable<User> {
    return this.updateUserGQL
      .mutate({
        firstname: form.name,
        lastname: form.surname,
      })
      .pipe(
        map((res) => {
          return res.data.updateUser;
        })
      );
  }

  updatePassword(form) {
    // firebase update password
    return from(this.firebaseAuth.currentUser).pipe(
      switchMap((user) => {
        return from(user.updatePassword(form.password));
      }),
      map(() => this.getUserInfo())
    );
  }
}
