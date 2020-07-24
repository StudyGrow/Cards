import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";
import { tap, map } from "rxjs/operators";
import { StatesService } from "./states.service";
import { NotificationsService } from "./notifications.service";
import { Router } from "@angular/router";
import { HttpConfig } from "./config";
//Models
import { Vorlesung } from "../models/Vorlesung";

@Injectable({
  providedIn: "root",
})
export class LecturesService {
  private lecture$: BehaviorSubject<Vorlesung> = new BehaviorSubject<Vorlesung>(
    new Vorlesung("", "")
  ); //holds the current lecture
  private lectures$ = new BehaviorSubject<Vorlesung[]>(null); //holds all lectures
  private config = new HttpConfig();

  constructor(
    private notifications: NotificationsService,
    private http: HttpClient, //for sending http requests
    private statesService: StatesService, //set the loading state
    private router: Router //to get info in the current url
  ) {}

  //get an array of all lectures
  getAllLectures(): Observable<Vorlesung[]> {
    //load lectures from the server
    this.statesService.setLoadingState(true);
    return this.http
      .get<Vorlesung[]>(this.config.urlBase + "lectures", {
        observe: "response",
      })
      .pipe(
        tap(
          (res) => {
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

  //get the Current lecture
  getCurrentLecture(): Observable<Vorlesung> {
    let abrv = this.router.url.split(/vorlesung\//)[1]; //get the abreviation of the lecture from the url
    if (abrv == "neu") {
      let tmp = of(JSON.parse(localStorage.getItem("vl")));
      return tmp;
    } else if (abrv && this.lecture$.getValue().abrv !== abrv) {
      //fetch the lecture from the server
      this.lecture$.next(new Vorlesung("", "")); //reset the lecture
      this.statesService.setLoadingState(true);
      this.http
        .get<Vorlesung>(this.config.urlBase + "lectures/find?abrv=" + abrv, {
          observe: "response",
        })
        .subscribe(
          (res) => {
            this.statesService.setLoadingState(false);
            this.lecture$.next(res.body);
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.router.navigateByUrl("/");
            this.statesService.setLoadingState(false);
          }
        );
    }
    return this.lecture$.asObservable();
  }

  //add a lecture to the database on the server
  addLecture(lecture: Vorlesung): Observable<HttpResponse<any>> {
    this.statesService.setLoadingState(true);
    return this.http
      .post<any>(
        this.config.urlBase + "lectures/new",
        { lecture: lecture },
        {
          headers: this.config.headers,
          observe: "response",
        }
      )
      .pipe(
        tap(
          (res) => {
            //add the new lecture to the lectures subject
            this.statesService.setLoadingState(false);
            let lectures = this.lectures$.getValue();
            if (lectures) {
              lectures.push(lecture);
              this.lectures$.next(lectures);
            }
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        )
      );
  }
}
