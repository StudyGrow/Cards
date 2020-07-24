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
    new Vorlesung()
  ); //holds the current lecture
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
    if (!abrv) {
      return of(new Vorlesung()); //return empty object when not on cards route
    }
    if (abrv == "neu") {
      //on route where we are creating a new  lecture
      let tmp = of(JSON.parse(localStorage.getItem("vl")));
      return tmp;
    }
  }

  //add a lecture to the database on the server
  addLecture(lecture: Vorlesung): Observable<Vorlesung> {
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
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        ),
        map((res) => res.body)
      );
  }
}
