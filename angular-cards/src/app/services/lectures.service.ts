import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

import { HttpConfig } from './config';
//Models
import { Vorlesung } from '../models/Vorlesung';
import {
  GetLecturesGQL,
  AddLectureGQL,
  GetLectureByAbbreviationWithCardsAndVotesGQL,
  GetLectureGQL,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class LecturesService {
  private config = new HttpConfig();

  constructor(
    private http: HttpClient, //for sending http requests
    private getLecturesGQL: GetLecturesGQL,
    private addLectureGQL: AddLectureGQL,
    private getLectureGQL: GetLectureGQL
  ) {}

  //get an array of all lectures
  getAllLectures(): Observable<Vorlesung[]> {
    //load lectures from the server
    return this.getLecturesGQL.watch().valueChanges.pipe(map((res) => res.data.getLectures));
  }

  checkUniqueLecture(lecture: Vorlesung): Observable<boolean> {
    return this.getLectureGQL.watch({ abrv: lecture.abrv }).valueChanges.pipe(
      timeout(3000),
      map((res) => {
        return !res.data.getLecture?._id;
      })
    );
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
        timeout(3000),
        map((res) => {
          return res.data.addLecture;
        })
      );
  }
}
