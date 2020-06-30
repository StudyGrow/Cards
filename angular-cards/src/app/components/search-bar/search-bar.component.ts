import { Component, OnInit, Input, OnDestroy } from "@angular/core";

import { CardsService } from "../../services/cards.service";
import { StatesService } from "../../services/states.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Card } from "../../models/Card";
import { SearchSuggestion } from "../../models/SearchSuggestion";
import { Subscription } from "rxjs";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  constructor(
    private cardsService: CardsService,
    private stateService: StatesService
  ) {}
  subscriptions$: Subscription[] = [];
  cards: Card[];
  suggestions: SearchSuggestion[];
  uInput: string;
  clearSuggestions: boolean;

  ngOnInit(): void {
    let sub = this.stateService.getHideSuggestions().subscribe((value) => {
      this.clearSuggestions = value;
      if (value) {
        this.suggestions = [];
      }
    });
    this.subscriptions$.push(sub);
    sub = this.cardsService.getCards().subscribe((cards) => {
      this.cards = cards;
      cards.forEach((card) => {
        if (card.thema == null) {
          card.thema = "";
        }
        if (card.content == null) {
          card.content = "";
        }
      });
    });
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  inField() {
    this.stateService.setTyping(true);
  }
  resetNav() {
    setTimeout(() => {
      this.uInput = "";
    }, 120);

    this.stateService.setTyping(false);
  }
  findMatches(e: Event) {
    this.stateService.setHideSuggestions(false); //show suggestions

    if (this.uInput && this.uInput.length > 2) {
      this.suggestions = [];
      const regex = new RegExp(`${this.uInput}`, "gi");

      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].thema.match(regex)) {
          this.suggestions.push({ title: this.cards[i].thema, index: i });
        }
      }
    }
  }
  navigateTo(e: Event, index: number) {
    e.preventDefault();
    this.uInput = "";
    this.cardsService.setNewCardIndex(index);
    this.stateService.setHideSuggestions(true);
  }
}
