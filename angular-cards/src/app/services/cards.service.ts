import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Subject, Observable, BehaviorSubject, of, from } from "rxjs";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { StatesService } from "./states.service";
import { tap, map } from "rxjs/operators";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class CardsService {
  private cards$: BehaviorSubject<Card[]>;
  private abrv: string;
  private newCardIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  private activeCardIndex$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);
  private cards: Card[];

  constructor(
    private httpService: HttpService,
    private statesService: StatesService,
    private router: Router
  ) {}

  getCards(): Observable<Card[]> {
    let abrv = this.router.url.split(/vorlesung\//)[1];
    if (this.cards$ && this.abrv == abrv) {
      //cards were already loaded for this lecture
      return this.cards$.asObservable();
    } else {
      this.abrv = abrv;
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

  // initCards(cards: Card[]) {
  //   //this fucntion is obsolete, its features are implemented in getCards
  //   // this.cards$ = new BehaviorSubject<Card[]>(cards);
  //   // this.cards = cards;
  // }
  // updateCards(cards: Card[]) {
  //   this.cards$.next(cards);
  // }

  updateCard(card: Card, index: number) {
    this.statesService.setLoadingState(true);
    this.httpService.updateCard(card).subscribe((resp) => {
      this.statesService.setLoadingState(false);
      this.statesService.setFormMode("reset");
      let cards = this.cards$.getValue();
      cards[index] = card;
      this.cards$.next(cards);
    });
  }
  addCard(card: Card): Observable<any> {
    this.statesService.setLoadingState(true);
    return this.httpService.addCard(card).pipe(
      tap((response) => {
        this.statesService.setLoadingState(false);
        card._id = response.body;
        let cards = this.cards$.getValue();
        cards.push(card);
        this.cards$.next(cards);
      })
    );
  }
  getNewCardIndex(): Observable<number> {
    return this.newCardIndex$.asObservable();
  }
  setNewCardIndex(i: number) {
    this.newCardIndex$.next(i);
  }
  setActiveCardIndex(i: number) {
    this.activeCardIndex$.next(i);
  }
  getActiveCardIndex(): Observable<number> {
    return this.activeCardIndex$.asObservable();
  }
}