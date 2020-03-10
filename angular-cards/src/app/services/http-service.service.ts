import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  private urlBase: string = "http://localhost/";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  //Cards

  getCardsFromLecture(lecture: Vorlesung): Observable<Card[]> {
    return this.http.get<Card[]>(
      this.urlBase + "vorlesung/getCards/" + lecture.abrv
    );
  }

  addCard(card: Card, vlAbrv: string): Observable<any> {
    //Cards müssen richtig im Frontend definiert werden
    return this.http.post<any>(
      this.urlBase + "vorlesung/addCard",
      card,
      this.httpOptions
    );
  }
  updateCard(card: Card): Observable<any> {
    return this.http.put<any>(
      this.urlBase + "vorlesung/updateCard",
      card,
      this.httpOptions
    );
  }

  //Lectures

  getAllLectures(): Observable<Vorlesung[]> {
    return this.http.get<Vorlesung[]>(this.urlBase + "/getAllLectures");
  }

  addLecture(lecture: Vorlesung): Observable<any> {
    return this.http.post<any>(
      this.urlBase + "/addLecture",
      lecture,
      this.httpOptions
    );
  }

  getLectureByAbrv(abrv: string): Observable<Vorlesung> {
    return this.http.get<Vorlesung>(this.urlBase + "/" + abrv);
  }
}
