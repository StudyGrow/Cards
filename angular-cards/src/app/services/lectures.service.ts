import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, map, share, shareReplay, catchError } from 'rxjs/operators';

import { NotificationsService } from './notifications.service';
import { Router } from '@angular/router';
import { HttpConfig } from './config';
//Models
import { Vorlesung } from '../models/Vorlesung';
import { GetLecturesGQL, AddLectureGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class LecturesService {
  private config = new HttpConfig();

  constructor(
    private http: HttpClient, //for sending http requests
    private getLecturesGQL: GetLecturesGQL,
    private addLectureGQL: AddLectureGQL
  ) {}

  //get an array of all lectures
  getAllLectures(): Observable<Vorlesung[]> {
    //load lectures from the server
    return this.getLecturesGQL.watch().valueChanges.pipe(map((res) => res.data.getLectures));
  }

  checkUniqueLecture(lecture: Vorlesung): Observable<boolean> {
    return this.http
      .post<any>(
        this.config.urlBase + 'lectures/check',
        { lecture: lecture },
        { headers: this.config.headers, observe: 'response' }
      )
      .pipe(map((res) => res.status === 204));
  }

  //add a lecture to the database on the server
  addLecture(lecture: Vorlesung): Observable<Vorlesung> {
    return this.addLectureGQL
      .mutate({
        abrv: lecture.abrv,
        name: lecture.name,
        tagList: lecture.tagList,
      })
      .pipe(
        map((res) => {
          return res.data.addLecture;
        })
      );
  }
}
