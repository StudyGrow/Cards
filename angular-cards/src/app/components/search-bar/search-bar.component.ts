import { Component, OnInit, Input, OnDestroy } from "@angular/core";

import { Card } from "../../models/Card";
import { SearchSuggestion } from "../../models/SearchSuggestion";
import { Subscription, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { map, share, withLatestFrom } from "rxjs/operators";
import {
  setTypingMode,
  setSuggestionsMode,
  resetFilter,
  changeTab,
} from "src/app/store/actions/actions";
import { setActiveCardIndex } from "src/app/store/actions/cardActions";
import { selectAllCards, selectFilteredCards } from "src/app/store/selector";
import { AppState } from "src/app/store/reducer";
import { MatAutocomplete } from "@angular/material/autocomplete";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  uInput = new FormControl();

  constructor(private store: Store<any>) {}
  currentSelection: Card[]; //Cards which are currently shown
  subscriptions$: Subscription[] = []; //holds all subscriptions from observables to later unsub
  cards: Card[]; //all cards
  suggestions$: Observable<SearchSuggestion[]>; //search suggestions

  allSuggestions$: Observable<SearchSuggestion[]>; //search suggestions

  data$: Observable<AppState> = this.store.select("cardsData").pipe(share()); //state of the store
  clearSuggestions: boolean; //wether to clear search suggestions

  form = new FormControl();

  ngOnInit(): void {
    let sub = this.data$
      .pipe(map((state) => state.hideSearchResults))
      .subscribe((hide) => {
        this.clearSuggestions = hide;
        if (hide) {
          this.uInput.reset();
        }
      });
    this.subscriptions$.push(sub);
    let allCards$ = this.data$.pipe(map(selectAllCards));
    sub = allCards$.subscribe((cards) => {
      this.cards = cards;
    });
    this.subscriptions$.push(sub);
    let filteredCards$ = this.data$.pipe(map(selectFilteredCards));
    sub = filteredCards$.subscribe((filtered) => {
      this.currentSelection = filtered;
    });
    let filteredSuggestions = this.uInput.valueChanges.pipe(
      withLatestFrom(allCards$, filteredCards$),
      map(
        ([input, allCards, filteredCards]) =>
          this.findMatches(input, allCards, filteredCards) || {
            suggestions: [],
            allSuggestions: [],
          }
      )
    );
    this.suggestions$ = filteredSuggestions.pipe(
      map((res) => res?.suggestions)
    );
    this.allSuggestions$ = filteredSuggestions.pipe(
      map((res) => res?.allSuggestions)
    );
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
      this.uInput.reset();
    }, 120);

    this.store.dispatch(setTypingMode({ typing: false }));
  }
  findMatches(
    input: string,
    allCards: Card[],
    filteredCards: Card[]
  ): { suggestions: SearchSuggestion[]; allSuggestions: SearchSuggestion[] } {
    this.store.dispatch(setSuggestionsMode({ hide: false })); //show suggestions
    let suggestions = [];
    let allSuggestions = [];

    if (input?.length > 1) {
      const regex = new RegExp(`${input}`, "gi");

      let i = 0;
      while (i < this.cards.length) {
        if (i < filteredCards.length && filteredCards[i].thema.match(regex)) {
          suggestions.push({
            title: filteredCards[i].thema,
            index: i,
          });
        } else if (allCards[i].thema.match(regex)) {
          allSuggestions.push({
            title: allCards[i].thema,
            index: i,
          });
        }
        i++;
      }

      return { suggestions: suggestions, allSuggestions: allSuggestions };
    }
  }

  navigateTo(e: Event, index: number, all: boolean) {
    e.preventDefault();
    this.uInput.reset();
    setTimeout(() => this.store.dispatch(changeTab({ tab: 1 })), 400);
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
  enabled = false;
  size = 0;

  beginScroll(paragraph: HTMLElement) {
    if (this.enabled == true && this.size < paragraph.offsetWidth) {
      this.size = paragraph.offsetWidth;
    }
    this.size = paragraph.offsetWidth;
    this.enabled = true;
    var time = this.size * 0.02;
    paragraph.classList.add("textToScroll");
    paragraph.style.setProperty("--time", time.toString());
  }
  endScroll(paragraph: HTMLElement) {
    this.enabled = false;
    paragraph.classList.remove("textToScroll");
  }
}
