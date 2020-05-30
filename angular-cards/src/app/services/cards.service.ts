import { Injectable } from "@angular/core";

import { Observable, BehaviorSubject, of } from "rxjs";
import { Card } from "../models/Card";
import { StatesService } from "./states.service";
import { tap, map } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpConfig } from "./config";
import { HttpClient } from "@angular/common/http";
import { NotificationsService } from "./notifications.service";
@Injectable({
  providedIn: "root",
})
export class CardsService {
  //contains lecture abreviation of the current lecutre
  private abrv: string;

  //loads cards once from the server and whenever lecture changes
  //and provides them as an Observable
  private cards$: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>([]);
  private copy: Card[]; // a copy of the cards in case the user resets tags filter

  //provides a Subject to set a new index on which card the carousel should show
  private newCardIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  //a Subject of the card that is currently shown
  private activeCard$ = new BehaviorSubject<Card>(null);
  private tags: string[] = []; //save applied filters

  private config = new HttpConfig(); //configuration for http communication with the server

  constructor(
    private notifications: NotificationsService, //display errors to user
    private http: HttpClient, //to make calls to the server
    private statesService: StatesService, //for setting the loading state
    private router: Router //used to get the lecture abreviation from the route
  ) {}

  getCards(): Observable<Card[]> {
    this.statesService.setLoadingState(true);
    let abrv = this.router.url.split(/vorlesung\//)[1]; //get the lecture abreviation from the route
    if (this.abrv === abrv) {
      //cards were already loaded for this lecture
      this.statesService.setLoadingState(false);
      return this.cards$.asObservable();
    } else {
      this.abrv = abrv;
      //remove the old cards before fetching the new ones
      this.cards$.next([]);
      //make server request
      this.http
        .get<Card[]>(this.config.urlBase + "cards/?abrv=" + abrv, {
          observe: "response",
        })
        .subscribe(
          (response) => {
            this.statesService.setLoadingState(false);
            this.copy = response.body;
            this.cards$.next(response.body);
            if (response.body) {
              this.activeCard$.next(response.body[0]); //first card
            }
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        );
      return this.cards$.asObservable();
    }
  }

  updateCard(card: Card, index: number): Observable<any> {
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
            this.statesService.setFormMode("reset"); //reset form to its previous state
            //update subject
            let cards = this.cards$.getValue();
            cards[index] = card;
            this.cards$.next(cards);
            setTimeout(() => {
              //show new card timeout needed because the carousel needs time to refresh
              //its view
              this.setNewCardIndex(index);
            }, 100);
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        )
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
            card._id = response.body.id; //set id received from server response
            //upate subject
            let cards = this.cards$.getValue();
            cards.push(card);
            this.cards$.next(cards);

            setTimeout(() => {
              //show new card timeout needed because the carousel needs time to refresh
              //its view
              this.setNewCardIndex(cards.length - 1);
            }, 100);
          },
          (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
          }
        ),
        map((res) => res.body)
      );
  }
  goNext() {
    //show the next slide index (carousel component handles out of bounds)
    let index = this.newCardIndex$.getValue();
    index++;
    this.newCardIndex$.next(index);
  }
  goPrev() {
    //show the next slide index (carousel component handles out of bounds)
    let index = this.newCardIndex$.getValue();
    index--;
    this.newCardIndex$.next(index);
  }

  //only the carousel should be subscribed to this
  getNewCardIndex(): Observable<number> {
    return this.newCardIndex$.asObservable();
  }
  //use this function to tell the carousel to go to a specific slide i
  setNewCardIndex(i: number) {
    this.newCardIndex$.next(i);
  }
  //only the carousel should call this method (on the sliding event)
  setActiveCardIndex(i: number) {
    let active = this.cards$.getValue()[i];
    active.positionIndex = i;
    this.activeCard$.next(active);
  }
  //subsribe to this function to always get the card that is currently shown
  activeCard(): Observable<Card> {
    return this.activeCard$.asObservable();
  }

  applyFilter(tags: string[]): Observable<boolean> {
    let cards = this.cards$.getValue();
    if (this.tags === tags || tags === undefined) {
      this.resetFilter();
      return of(false);
    } else if (tags.length === 0) {
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
    this.setNewCardIndex(0);
    this.cards$.next(this.copy); //reset the cards to their initial state
  }
}
