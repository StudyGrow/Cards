import { Injectable } from "@angular/core";
import { HttpService } from "./http-service.service";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { StatesService } from "./states.service";
@Injectable({
  providedIn: "root"
})
export class CardsServiceService {
  private cards$: BehaviorSubject<Card[]>;
  private init: boolean = true;
  private cards: Card[];
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
}
