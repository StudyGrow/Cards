import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { tap, map } from "rxjs/operators";
import { StatesService } from "./states.service";
import { NotificationsService } from "./notifications.service";
import { Router } from "@angular/router";
//Models
import { Vorlesung } from "../models/Vorlesung";
import { HttpError } from "../models/Notification";
@Injectable({
  providedIn: "root",
})
export class HttpService {
  private urlBase: string = "api/"; //url  base on which to adress the server with

  private lecture$: BehaviorSubject<Vorlesung> = new BehaviorSubject<Vorlesung>(
    new Vorlesung("", "")
  ); //holds the current lecture
  private lectures$: BehaviorSubject<Vorlesung[]>; //holds all lectures

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private notifications: NotificationsService,
    private http: HttpClient, //for sending http requests
    private statesService: StatesService, //set the loading state
    private router: Router //to get info in the current url
  ) {}

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
