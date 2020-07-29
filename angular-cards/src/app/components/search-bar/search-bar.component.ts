import { Component, OnInit, Input, OnDestroy, ViewChild } from "@angular/core";

import { CardsService } from "../../services/cards.service";

import { MatFormFieldModule } from "@angular/material/form-field";
import { Card } from "../../models/Card";
import { SearchSuggestion } from "../../models/SearchSuggestion";
import { Subscription, Observable, pipe } from "rxjs";
import { Store } from "@ngrx/store";
import { map, share } from "rxjs/operators";
import {
  setTypingMode,
  setSuggestionsMode,
  resetFilter,
} from "src/app/store/actions/actions";
import { setActiveCardIndex } from "src/app/store/actions/cardActions";
import { selectAllCards, selectFilteredCards } from "src/app/store/selector";
import { AppState } from "src/app/store/reducer";
import { MatAutocomplete } from "@angular/material/autocomplete";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  constructor(private store: Store<any>) {}
  currentSelection: Card[]; //Cards which are currently shown
  subscriptions$: Subscription[] = []; //holds all subscriptions from observables to later unsub
  cards: Card[]; //all cards
  suggestions: SearchSuggestion[]; //search suggestions
  allSuggestions: SearchSuggestion[]; //search suggestions
  uInput: string; //userInput
  data$: Observable<AppState> = this.store.select("cardsData").pipe(share()); //state of the store
  clearSuggestions: boolean; //wether to clear search suggestions

  form = new FormControl();

  ngOnInit(): void {
    this.form.valueChanges.subscribe((input) => this.findMatches(input));
    let sub = this.data$
      .pipe(map((state) => state.hideSearchResults))
      .subscribe((value) => {
        this.clearSuggestions = value;
        if (value) {
          this.suggestions = [];
          this.allSuggestions = [];
        }
      });
    this.subscriptions$.push(sub);

    sub = this.data$.pipe(map(selectAllCards)).subscribe((cards) => {
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
    sub = this.data$
      .pipe(map(selectFilteredCards))
      .subscribe((filtered) => (this.currentSelection = filtered));
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
    this.suggestions = [];
    this.allSuggestions = [];

    if (this.uInput && this.uInput.length > 2) {
      const regex = new RegExp(`${this.uInput}`, "gi");

      for (let i = 0; i < this.currentSelection.length; i++) {
        if (this.currentSelection[i].thema.match(regex)) {
          this.suggestions.push({
            title: this.currentSelection[i].thema,
            index: i,
          });
        }
      }
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].thema.match(regex)) {
          this.allSuggestions.push({
            title: this.cards[i].thema,
            index: i,
          });
        }
      }
    }
  }
  navigateTo(e: Event, index: number, all: boolean) {
    e.preventDefault();
    this.uInput = "";
    if (!all) {
      //call from current selection
      this.store.dispatch(setActiveCardIndex({ index: index }));
      this.store.dispatch(setSuggestionsMode({ hide: true }));
    } else if (!this.currentSelection.includes(this.cards[index])) {
      //call from all cards and current selction does not inlude the suggestion
      this.store.dispatch(resetFilter());
      this.store.dispatch(setSuggestionsMode({ hide: true }));
      setTimeout(() => {
        this.store.dispatch(setActiveCardIndex({ index: index }));
      }, 700);
    } else {
      //call from all cards and current selction inludes the suggestion
      this.store.dispatch(setActiveCardIndex({ index: index }));
      this.store.dispatch(setSuggestionsMode({ hide: true }));
    }
  }
  navigate2(e: Event, index: number) {
    e.preventDefault();
    this.uInput = "";
    this.store.dispatch(resetFilter());

    this.store.dispatch(setActiveCardIndex({ index: index }));

    this.store.dispatch(setSuggestionsMode({ hide: true }));
  }
}
