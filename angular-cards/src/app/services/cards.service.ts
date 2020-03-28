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
  private cards: Card[];
  private activeCardIndex: number = 0;

  constructor(
    private httpService: HttpService,
    private statesService: StatesService
  ) {}

  getCards(): Observable<Card[]> {
    return this.cards$.asObservable();
  }

  initCards(cards: Card[]) {
    this.cards$ = new BehaviorSubject<Card[]>(cards);
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
    this.activeCardIndex$.next(i);
    this.activeCardIndex = i;
  }
  getActiveCard(): Card {
    return this.cards[this.activeCardIndex];
  }
}
