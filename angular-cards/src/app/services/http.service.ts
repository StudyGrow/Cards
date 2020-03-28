import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  private urlBase: string = "http://localhost:4200/api/";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  //Cards
  getCardsFromLecture(lecture: Vorlesung): Observable<HttpResponse<Card[]>> {
    return this.http.get<Card[]>(
      this.urlBase + "getCards/?abrv=" + lecture.abrv,
      { observe: "response" }
    );
  }

  addCard(card: Card, vlAbrv: string): Observable<HttpResponse<any>> {
    //Cards müssen richtig im Frontend definiert werden
    return this.http.post<any>(
      this.urlBase + "addCard",
      { card: card, abrv: vlAbrv },
      this.httpOptions
    );
  }
  updateCard(card: Card): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.urlBase + "updateCard", card, {
      headers: this.httpOptions.headers,
      observe: "response"
    });
  }

  //Lectures
  getAllLectures(): Observable<HttpResponse<Vorlesung[]>> {
    return this.http.get<Vorlesung[]>(this.urlBase + "getAllLectures", {
      observe: "response"
    });
  }

  addLecture(lecture: Vorlesung): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.urlBase + "addLecture", lecture, {
      headers: this.httpOptions.headers,
      observe: "response"
    });
  }

  getLectureByAbrv(abrv: string): Observable<HttpResponse<Vorlesung>> {
    return this.http.get<Vorlesung>(this.urlBase + "getLecture?abrv=" + abrv, {
      observe: "response"
    });
  }
}
