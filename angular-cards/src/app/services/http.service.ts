import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { tap, map } from "rxjs/operators";
import { StatesService } from "./states.service";
import { NotificationsService } from "./notifications.service";
import { Router } from "@angular/router";
//Models
import { User } from "../models/User";
import { UserInfo } from "../models/userInfo";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { HttpError, SuccessMessage } from "../models/Notification";
@Injectable({
  providedIn: "root",
})
export class HttpService {
  private urlBase: string = "api/"; //url  base on which to adress the server with

  private lecture$: BehaviorSubject<Vorlesung> = new BehaviorSubject<Vorlesung>(
    new Vorlesung("", "")
  ); //holds the current lecture
  private lectures$: BehaviorSubject<Vorlesung[]>; //holds all lectures

  private profileInfo$: BehaviorSubject<UserInfo> = new BehaviorSubject<
    UserInfo
  >(null);
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private notifications: NotificationsService,
    private http: HttpClient, //for sending http requests
    private statesService: StatesService, //set the loading state
    private router: Router //to get info in the current url
  ) {}

  //get Cards for a specific lecture from server
  //This function shoul only be called by the cardsservice to initially load cards from server
  getCardsFromLectureAbrv(abrv: string): Observable<Card[]> {
    this.statesService.setLoadingState(true);
    {
      return this.http
        .get<Card[]>(this.urlBase + "cards/?abrv=" + abrv, {
          observe: "response",
        })
        .pipe(
          tap(
            (res) => {
              this.statesService.setLoadingState(false);
            },
            (error) => {
              this.addErrors(error);
              this.statesService.setLoadingState(false);
            }
          ),
          map((res) => res.body)
        );
    }
  }

  //add card to the database on server
  addCard(card: Card): Observable<HttpResponse<any>> {
    return this.http
      .post<any>(
        this.urlBase + "cards/new",
        { card: card },
        {
          headers: this.httpOptions.headers,
          observe: "response",
        }
      )
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
          },
          (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
          }
        )
      );
  }

  //update card on server
  updateCard(card: Card): Observable<HttpResponse<any>> {
    return this.http
      .put<any>(
        this.urlBase + "cards/update",
        { card: card },
        {
          headers: this.httpOptions.headers,
          observe: "response",
        }
      )
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
          },
          (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
          }
        )
      );
  }

  //get an array of all lectures
  getAllLectures(): Observable<Vorlesung[]> {
    this.statesService.setLoadingState(true);
    if (this.lectures$) {
      //lectures were already loaded once
      this.statesService.setLoadingState(false);
      return this.lectures$.asObservable();
    } else {
      //load lectures from the server
      return this.http
        .get<Vorlesung[]>(this.urlBase + "lectures", {
          observe: "response",
        })
        .pipe(
          tap(
            (res) => {
              this.statesService.setLoadingState(false);
              this.lectures$ = new BehaviorSubject<Vorlesung[]>(res.body); //set the lectures subject
            },
            (error) => {
              this.addErrors(error);
              this.statesService.setLoadingState(false);
            }
          ),
          map((res) => res.body)
        );
    }
  }

  //get the Current lecture
  getCurrentLecture(): Observable<Vorlesung> {
    let abrv = this.router.url.split(/vorlesung\//)[1]; //get the abreviation of the lecture from the url
    if (this.lecture$.getValue().abrv == abrv) {
      //the lecture was already loaded
      return this.lecture$.asObservable();
    } else {
      //fetch the lecture from the server
      this.http
        .get<Vorlesung>(this.urlBase + "lectures/find?abrv=" + abrv, {
          observe: "response",
        })
        .subscribe(
          (res) => {
            this.lecture$.next(res.body);
          },
          (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
          }
        );
      return this.lecture$.asObservable();
    }
  }

  //add a lecture to the database on the server
  addLecture(lecture: Vorlesung): Observable<HttpResponse<any>> {
    this.statesService.setLoadingState(true);
    return this.http
      .post<any>(
        this.urlBase + "lectures/new",
        { lecture: lecture },
        {
          headers: this.httpOptions.headers,
          observe: "response",
        }
      )
      .pipe(
        tap(
          (res) => {
            //add the new lecture to the lectures subject
            this.statesService.setLoadingState(false);
            let lectures = this.lectures$.getValue();
            lectures.push(lecture);
            this.lectures$.next(lectures);
          },
          (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
          }
        )
      );
  }

  //login the user on the server
  login(form): Observable<User> {
    this.statesService.setLoadingState(true);
    return this.http
      .post<User>(this.urlBase + "login", form, {
        headers: this.httpOptions.headers,
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
            this.notifications.addNotification(
              new SuccessMessage("Willkommen " + res.body.username)
            );
          },
          (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
          }
        ),
        map((res) => res.body)
      );
  }

  getUserInfo(): Observable<UserInfo> {
    this.statesService.setLoadingState(true);
    return this.http
      .get<UserInfo>(this.urlBase + "user/info", {
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
          },
          (error) => {
            this.statesService.setLoadingState(false);
            this.addErrors(error);
          }
        ),
        map((res) => res.body)
      );
  }

  //logout the user in front- and backend
  logout() {
    this.statesService.setLoadingState(true);
    this.http.get<any>(this.urlBase + "user/logout").subscribe((res) => {
      this.statesService.setLoadingState(false);
    });
  }

  //form = {username,email,password}
  createAccount(form): Observable<User> {
    this.statesService.setLoadingState(true);
    return this.http
      .post<User>(this.urlBase + "user/new", form, {
        headers: this.httpOptions.headers,
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
            this.statesService.setLoadingState(false);
          },
          (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
          }
        ),
        map((res) => res.body)
      );
  }

  updatePassword(form) {
    this.statesService.setLoadingState(true);
    return this.http
      .put<any>(this.urlBase + "user/updatePassword", form, {
        headers: this.httpOptions.headers,
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
            this.addErrors(error);
            this.statesService.setLoadingState(false);
          }
        )
      );
  }
  updateAccount(form) {
    this.statesService.setLoadingState(true);
    this.http
      .put<any>(this.urlBase + "user/updateAccount", form, {
        headers: this.httpOptions.headers,
        observe: "response",
      })
      .subscribe(
        (res) => {
          this.statesService.setLoadingState(false);

          let info = this.profileInfo$.getValue();
          info.user = form;
          this.profileInfo$.next(info);
          this.notifications.addNotification(
            new SuccessMessage(
              "Deine Informationen wurden erfolgreich aktualisiert"
            )
          );
        },
        (error) => {
          this.addErrors(error);
          this.statesService.setLoadingState(false);
        }
      );
  }

  //because errors suck and we dont have a unified error handling system in the backend
  addErrors(error) {
    let err = error.error;
    console.log(error);
    if (error.status == 400) {
      this.notifications.addNotification(
        new HttpError("Bitte logge dich erst ein.", error.status)
      );
      this.router.navigateByUrl("/login");
    } else if (error.status == 422) {
      if (typeof err == "string") {
        this.notifications.addNotification(new HttpError(err, error.status));
      } else if (typeof err == "object") {
        this.notifications.addNotification(
          new HttpError(
            "Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.",
            error.status
          )
        );
        console.log(err);
      } else {
        for (const e of err) {
          this.notifications.addNotification(new HttpError(e, error.status));
        }
      }
    } else if (error.status >= 500) {
      this.notifications.addNotification(
        new HttpError(
          "Der Server scheint offline zu sein. Versuche es später erneut.",
          error.status
        )
      );
    } else {
      this.notifications.addNotification(
        new HttpError(
          "Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.",
          error.status
        )
      );
    }
  }
}
