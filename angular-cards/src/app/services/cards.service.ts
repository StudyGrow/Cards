import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Subject, Observable, BehaviorSubject, of } from "rxjs";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { StatesService } from "./states.service";
@Injectable({
  providedIn: "root"
})
export class CardsService {
  private cards$: BehaviorSubject<Card[]>;
  private activeCardIndex$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);
  private activeIndex: number;
  private cards: Card[];

  constructor(
    private httpService: HttpService,
    private statesService: StatesService
  ) {}

  getCards(): Observable<Card[]> {
    if (this.cards$) {
      return this.cards$.asObservable();
    } else {
      return of([]);
    }
  }

  initCards(cards: Card[]) {
    this.cards$ = new BehaviorSubject<Card[]>(cards);
    this.cards = cards;
  }
  updateCards(cards: Card[]) {
    this.cards$.next(cards);
  }

  addCard(card: Card, vlAbrv: string) {
    if (!this.cards) {
      this.cards$.subscribe(cards => (this.cards = cards));
    }

    this.httpService.addCard(card, vlAbrv).subscribe(response => {
      this.statesService.setLoadingState(false);
      card._id = response.body;
      this.cards.push(card);
      this.cards$.next(this.cards);
    });
  }
  getActiveCardIndex(): Observable<number> {
    return this.activeCardIndex$.asObservable();
  }
  setActiveCardIndex(i: number) {
    console.log(i);
    this.activeCardIndex$.next(i);
  }
}
