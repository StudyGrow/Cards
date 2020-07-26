import { Component, OnInit, Input, OnDestroy } from "@angular/core";

import { CardsService } from "../../services/cards.service";

import { MatFormFieldModule } from "@angular/material/form-field";
import { Card } from "../../models/Card";
import { SearchSuggestion } from "../../models/SearchSuggestion";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import {
  setTypingMode,
  setSuggestionsMode,
} from "src/app/store/actions/actions";
import { setActiveCardIndex } from "src/app/store/actions/cardActions";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  constructor(
    private cardsService: CardsService,

    private store: Store<any>
  ) {}
  subscriptions$: Subscription[] = [];
  cards: Card[];
  suggestions: SearchSuggestion[];
  uInput: string;
  clearSuggestions: boolean;

  ngOnInit(): void {
    let sub = this.store
      .select("cardsData")
      .pipe(map((state) => state.hideSearchResults))
      .subscribe((value) => {
        this.clearSuggestions = value;
        if (value) {
          this.suggestions = [];
        }
      });
    this.subscriptions$.push(sub);

    sub = this.store
      .select("cardsData")
      .pipe(map((data) => data.cards))
      .subscribe((cards) => {
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
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  resetNav() {
    setTimeout(() => {
      this.uInput = "";
    }, 120);

    this.store.dispatch(setTypingMode({ typing: false }));
  }
  findMatches(e: Event) {
    this.store.dispatch(setSuggestionsMode({ hide: false })); //show suggestions

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
    this.store.dispatch(setActiveCardIndex({ index: index }));

    this.store.dispatch(setSuggestionsMode({ hide: true }));
  }
}
