import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Card } from "../models/Card";

import { tap, map, share } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpConfig } from "./config";
import { HttpClient } from "@angular/common/http";
import { NotificationsService } from "./notifications.service";

import { CardsData } from "../store/reducer";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  private save: string; //save the abrv call so we dont make a new call if the lecture hasnt changed
  private chache: Observable<CardsData>;
  private config = new HttpConfig(); //configuration for http communication with the server

  constructor(
    private notifications: NotificationsService, //display errors to user
    private http: HttpClient, //to make calls to the server

    private router: Router //used to get the lecture abreviation from the route
  ) {}

  //This loads all cards specific data which is needed on the route of a specific lecture
  fetchCardsData(): Observable<CardsData> {
    let abrv = this.router.url.split(/vorlesung\//)[1]; //get the lecture abreviation from the route
    if (abrv === this.save && this.chache) {
      return this.chache;
    } else {
      this.save = abrv;
      this.chache = this.http
        .get<CardsData>(this.config.urlBase + "cards/a?abrv=" + abrv)
        .pipe(share());
      return this.chache;
    }
  }

  updateCard2(card: Card): Observable<any> {
    //send update to server using http service
    return this.http
      .put<any>(
        this.config.urlBase + "cards/update",
        { card: card },
        {
          headers: this.config.headers,
          observe: "response",
        }
      )
      .pipe(map((res) => card));
  }

  addCard(card: Card): Observable<Card> {
    //send new card to server using http service
    return this.http
      .post<{ id: string }>(
        this.config.urlBase + "cards/new",
        { card: card },
        {
          headers: this.config.headers,
          observe: "response",
        }
      )
      .pipe(map((res) => ({ ...card, _id: res.body.id })));
  }
}
