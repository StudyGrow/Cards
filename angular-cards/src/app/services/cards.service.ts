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
  private errors$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );
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

  getErrors() {
    return this.errors$.asObservable();
  }
  removeError(index: number) {
    let errors = this.errors$.getValue();
    errors.splice(index, 1);
    this.errors$.next(errors);
  }
  updateCard(card: Card, index: number): Observable<any> {
    this.statesService.setLoadingState(true);
    return this.httpService.updateCard(card).pipe(
      tap(
        (resp) => {
          this.statesService.setLoadingState(false);
          this.statesService.setFormMode("reset");
          let cards = this.cards$.getValue();
          cards[index] = card;
          this.cards$.next(cards);
        },
        (error) => {
          let errors = this.errors$.getValue();
          errors.push(error.error);
          this.errors$.next(errors);
          this.statesService.setLoadingState(false);
        }
      )
    );
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
        setTimeout(() => {
          //show new card timeout needed because the carousel needs time to refresh
          //its view
          this.setNewCardIndex(cards.length - 1);
        }, 20);
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
