import { Injectable } from "@angular/core";

import { Observable, BehaviorSubject, of, from } from "rxjs";
import { Card } from "../models/Card";
import { StatesService } from "./states.service";
import { tap, map, shareReplay, publish, refCount } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpConfig } from "./config";
import { HttpClient } from "@angular/common/http";
import { NotificationsService } from "./notifications.service";
import { Vorlesung } from "../models/Vorlesung";
import { CardsData, AppState } from "../store/reducer";
import { Store, select } from "@ngrx/store";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  //provides a Subject to set a new index on which card the carousel should show
  private newCardIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );

  private config = new HttpConfig(); //configuration for http communication with the server

  constructor(
    private notifications: NotificationsService, //display errors to user
    private http: HttpClient, //to make calls to the server
    private statesService: StatesService, //for setting the loading state
    private router: Router, //used to get the lecture abreviation from the route
    private store: Store<any>
  ) {}

  //This loads all cards specific data which is needed on the route of a specific lecture
  fetchCardsData(): Observable<CardsData> {
    let abrv = this.router.url.split(/vorlesung\//)[1]; //get the lecture abreviation from the route
    return this.http.get<CardsData>(
      this.config.urlBase + "cards/a?abrv=" + abrv
    );
  }

  updateCard2(card: Card): Observable<any> {
    this.statesService.setLoadingState(true);
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
      .pipe(
        tap(
          (resp) => {
            this.statesService.setLoadingState(false);
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        ),
        map((res) => card)
      );
  }

  addCard(card: Card): Observable<any> {
    this.statesService.setLoadingState(true);
    //send new card to server using http service
    return this.http
      .post<any>(
        this.config.urlBase + "cards/new",
        { card: card },
        {
          headers: this.config.headers,
          observe: "response",
        }
      )
      .pipe(
        tap(
          (response) => {
            this.statesService.setLoadingState(false);
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        ),
        map((res) => {
          card._id = res.body.id;
          return card;
        })
      );
  }

  /*
  applyFilter(tags: string[]): Observable<boolean> {
    let cards = this.cards$.getValue();

    if (this.tags === tags) {
      return of(false);
    }
    if (tags.length === 0) {
      this.resetFilter();
      return of(false);
    }
    this.tags = tags;
    //filter out cards which dont match any of the tags
    let res = cards.filter((card) => {
      for (const tag of tags) {
        if (card.tags.includes(tag)) {
          return true;
        }
      }
      return false;
    });
    this.cards$.next(res);
    this.setNewCardIndex(0);
    return of(true);
  }
  resetFilter() {
    this.tags = [];
    this.setNewCardIndex(0);
    this.cards$.next(this.copy); //reset the cards to their initial state
  }*/
}
