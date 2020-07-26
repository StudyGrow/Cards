import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";
import { tap, map, share, shareReplay } from "rxjs/operators";
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
  private config = new HttpConfig();
  private cache: Observable<Vorlesung[]>;

  constructor(
    private notifications: NotificationsService,
    private http: HttpClient, //for sending http requests
    private statesService: StatesService, //set the loading state
    private router: Router //to get info in the current url
  ) {}

  //get an array of all lectures
  getAllLectures(): Observable<Vorlesung[]> {
    //load lectures from the server
    if (this.cache) {
      return this.cache;
    } else {
      this.cache = this.http
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
          map((res) => res.body),

          shareReplay({ bufferSize: 1, refCount: true })
        );
      return this.cache;
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
