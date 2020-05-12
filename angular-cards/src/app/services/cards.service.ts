import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable, BehaviorSubject } from "rxjs";
import { Card } from "../models/Card";
import { StatesService } from "./states.service";
import { tap, map } from "rxjs/operators";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class CardsService {
  //contains lecture abreviation of the current lecutre
  private abrv: string;
  //loads cards once from the server and whenever lecture changes
  //and provides them as an Observable
  private cards$: BehaviorSubject<Card[]>;
  //provides a Subject to set a new index on which card the carousel should show
  private newCardIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  //provides a Subject of the index of the card that is currently shown
  //only the carousel shoul set nex values for this subject
  private activeCardIndex$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);

  constructor(
    private httpService: HttpService, //to make calls to the server
    private statesService: StatesService, //for setting the loading state
    private router: Router //used to get the lecture abreviation from the route
  ) {}

  getCards(): Observable<Card[]> {
    let abrv = this.router.url.split(/vorlesung\//)[1]; //get the lecture abreviation from the route
    if (this.cards$ && this.abrv == abrv) {
      //cards were already loaded for this lecture
      return this.cards$.asObservable();
    } else {
      this.abrv = abrv;
      if (this.cards$) {
        //remove the old cards before fetching the new ones
        this.cards$.next([]);
      } else {
        this.cards$ = new BehaviorSubject<Card[]>([]);
      }
      //returns an observable of the cards from http service while also initializing the cards internally for reuse
      return this.httpService.getCardsFromLectureAbrv(abrv).pipe(
        tap((res) => {
          if (this.cards$) {
            this.cards$.next(res.body);
          } else {
            this.cards$ = new BehaviorSubject<Card[]>(res.body);
          }
        }),
        map((res) => res.body)
      );
    }
  }

  updateCard(card: Card, index: number): Observable<any> {
    this.statesService.setLoadingState(true);
    //send update to server using http service
    return this.httpService.updateCard(card).pipe(
      tap((resp) => {
        this.statesService.setLoadingState(false);
        this.statesService.setFormMode("reset"); //reset form to its previous state
        //update subject
        let cards = this.cards$.getValue();
        cards[index] = card;
        this.cards$.next(cards);
      })
    );
  }

  addCard(card: Card): Observable<any> {
    this.statesService.setLoadingState(true);
    //send new card to server using http service
    return this.httpService.addCard(card).pipe(
      tap((response) => {
        this.statesService.setLoadingState(false);
        card._id = response.body; //set id received from server response
        //upate subject
        let cards = this.cards$.getValue();
        cards.push(card);
        this.cards$.next(cards);

        setTimeout(() => {
          //show new card timeout needed because the carousel needs time to refresh
          //its view
          this.setNewCardIndex(cards.length - 1);
        }, 100);
      })
    );
  }
  goNext() {
    //show the next slide index
    let index = this.newCardIndex$.getValue();
    index++;
    if (index >= this.cards$.getValue().length) {
      index = 0;
    }
    this.newCardIndex$.next(index);
  }
  goPrev() {
    //show the next slide index
    let index = this.newCardIndex$.getValue();
    index--;
    if (index < 0) {
      index = this.cards$.getValue().length - 1;
    }
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
    this.activeCardIndex$.next(i);
  }
  //subsribe to this function to always get the index of the card that is currently shown
  getActiveCardIndex(): Observable<number> {
    return this.activeCardIndex$.asObservable();
  }
}
