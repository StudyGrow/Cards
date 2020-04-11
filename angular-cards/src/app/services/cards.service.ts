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
  private newCardIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  private activeCardIndex$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);
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
  updateCard(card: Card, vlAbrv: string, index: number) {
    if (!card.abrv) {
      card.abrv = vlAbrv;
    }
    this.httpService.updateCard(card).subscribe(resp => {
      this.statesService.setLoadingState(false);
      this.statesService.setFormMode("reset");
      this.cards[index] = card;
      this.updateCards(this.cards);
    });
  }
  addCard(card: Card, vlAbrv: string) {
    if (!this.cards) {
      this.cards$.subscribe(cards => (this.cards = cards));
    }

    this.httpService.addCard(card, vlAbrv).subscribe(response => {
      this.statesService.setLoadingState(false);
      card._id = response.body;
      this.cards.push(card);
      this.updateCards(this.cards);
    });
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
