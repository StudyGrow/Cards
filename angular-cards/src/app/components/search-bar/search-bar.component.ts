import { Component, OnInit, OnDestroy } from "@angular/core";
import { Card } from "../../models/Card";
import { SearchSuggestion } from "../../models/SearchSuggestion";
import { Subscription, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { map, withLatestFrom } from "rxjs/operators";
import {
  setTypingMode,
  setSuggestionsMode,
  resetFilter,
  changeTab,
} from "src/app/store/actions/actions";
import { setActiveCardIndex } from "src/app/store/actions/cardActions";
import {
  selectAllCards,
  selectCurrentTab,
  selectFilteredCards,
  selectFormMode,
} from "src/app/store/selector";
import { FormControl } from "@angular/forms";
import { AppState } from "src/app/models/state";
import { WarnMessage } from "src/app/models/Notification";
import { NotificationsService } from "src/app/services/notifications.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  uInput = new FormControl();

  constructor(
    private store: Store<AppState>,
    private notifs: NotificationsService
  ) {}
  currentSelection: Card[]; //Cards which are currently shown
  subscriptions$: Subscription[] = []; //holds all subscriptions from observables to later unsub
  cards: Card[]; //all cards
  suggestions$: Observable<SearchSuggestion[]>; //search suggestions
  formMode: string;

  allSuggestions$: Observable<SearchSuggestion[]>; //search suggestions
  clearSuggestions: boolean; //wether to clear search suggestions

  form = new FormControl();

  ngOnInit(): void {
    let sub = this.store
      .pipe(map((state) => state.mode.hideSearchResults))
      .subscribe((hide) => {
        if (hide !== this.clearSuggestions) {
          //only reset
          this.clearSuggestions = hide;
          // this.uInput.reset();
        }
      });
    this.subscriptions$.push(sub);
    let allCards$ = this.store.pipe(map(selectAllCards));
    sub = allCards$.subscribe((cards) => {
      this.cards = cards;
    });
    this.subscriptions$.push(sub);
    let filteredCards$ = this.store.pipe(map(selectFilteredCards));
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
    this.store
      .pipe(map(selectFormMode))
      .subscribe((mode) => (this.formMode = mode));
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
    if (this.formMode == "edit") {
      let message = "Du musst erst die Bearbeitung der Karteikarte abschließen";
      this.notifs.addNotification(new WarnMessage(message));
      return;
    }

    this.store.dispatch(changeTab({ tab: 0 }));
    if (!all) {
      //call from current selection
      this.store.dispatch(setActiveCardIndex({ index: index }));
    } else if (!this.currentSelection.includes(this.cards[index])) {
      //call from all cards and current selction does not inlude the suggestion
      this.store.dispatch(resetFilter());

      setTimeout(() => {
        this.store.dispatch(setActiveCardIndex({ index: index }));
      }, 700);
    } else {
      //call from all cards and current selction inludes the suggestion
      this.store.dispatch(setActiveCardIndex({ index: index }));
    }
    this.store.dispatch(setSuggestionsMode({ hide: true }));
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
