import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";
import { tap, map, share, shareReplay, catchError } from "rxjs/operators";

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
    private http: HttpClient //for sending http requests
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
            (res) => {},
            (error) => {
              this.notifications.handleErrors(error);
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
          },
          (error) => {
            this.notifications.handleErrors(error);
          }
        ),
        map((res) => res.body)
      );
  }
}
