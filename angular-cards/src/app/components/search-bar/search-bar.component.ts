import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../../models/Card';
import { SearchSuggestion } from '../../models/SearchSuggestion';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';
import {
  setTypingMode,
  setSuggestionsMode,
  resetFilter,
  changeTab,
} from 'src/app/store/actions/StateActions';

import { CardsSorted, DisplayedCards, FormMode } from 'src/app/store/selector';
import { FormControl } from '@angular/forms';
import { AppState } from 'src/app/models/state';
import { WarnMessage } from 'src/app/models/Notification';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  uInput = new FormControl();

  constructor(private store: Store<AppState>, private notifs: NotificationsService) {}
  currentSelection: Card[]; //Cards which are currently shown
  subscriptions$: Subscription[] = []; //holds all subscriptions from observables to later unsub
  allCards: Card[]; //all cards
  suggestions$: Observable<SearchSuggestion[]>; //search suggestions
  formMode: string;

  allSuggestions$: Observable<SearchSuggestion[]>; //search suggestions
  clearSuggestions: boolean; //wether to clear search suggestions

  form = new FormControl();

  ngOnInit(): void {
    let sub = this.store.pipe(map((state) => state.mode.hideSearchResults)).subscribe((hide) => {
      if (hide !== this.clearSuggestions) {
        //only reset
        this.clearSuggestions = hide;
        // this.uInput.reset();
      }
    });
    this.subscriptions$.push(sub);
    let allCards$ = this.store.select(CardsSorted);
    sub = allCards$.subscribe((allCards) => {
      this.allCards = allCards;
    });
    this.subscriptions$.push(sub);
    let DisplayedCards$ = this.store.select(DisplayedCards);
    sub = DisplayedCards$.subscribe((filtered) => {
      this.currentSelection = filtered;
    });
    this.subscriptions$.push(sub);

    let filteredSuggestions = this.uInput.valueChanges.pipe(
      withLatestFrom(allCards$, DisplayedCards$),
      map(
        ([input, allCards, filteredCards]) =>
          this.findMatches(input, allCards, filteredCards) || {
            suggestions: [],
            allSuggestions: [],
          }
      )
    );
    this.suggestions$ = filteredSuggestions.pipe(map((res) => res?.suggestions));
    this.allSuggestions$ = filteredSuggestions.pipe(map((res) => res?.allSuggestions));
    this.store.select(FormMode).subscribe((mode) => (this.formMode = mode));
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
    input: string, //user input
    allCards: Card[], //all cards
    filteredCards: Card[] //cards currently in carousel
  ): { suggestions: SearchSuggestion[]; allSuggestions: SearchSuggestion[] } {
    if (this.clearSuggestions) this.store.dispatch(setSuggestionsMode({ hide: false })); //show suggestions
    let suggestions: SearchSuggestion[] = []; //suggestions from cards currently in the carousel
    let allSuggestions: SearchSuggestion[] = []; //suggestions from all cards, more specifically from cards not in the carousel

    if (input?.length > 2) {
      const regex = new RegExp(`${input}`, 'gi');

      for (let i = 0; i < this.allCards.length; i++) {
        if (i < filteredCards.length && filteredCards[i].thema.match(regex)) {
          suggestions.push(new SearchSuggestion(filteredCards[i].thema, filteredCards[i]._id));
        } else if (allCards[i].thema.match(regex)) {
          allSuggestions.push(new SearchSuggestion(allCards[i].thema, allCards[i]._id));
        }
      }

      return { suggestions: suggestions, allSuggestions: allSuggestions };
    }
  }

  navigateTo(e: Event, id: string) {
    e.preventDefault();
    this.uInput.reset();
    if (this.formMode == 'edit') {
      let message = 'Du musst erst die Bearbeitung der Karteikarte abschließen';
      this.notifs.addNotification(new WarnMessage(message));
      return;
    }
    this.store.dispatch(changeTab({ tab: 0 }));
    let newCard = this.allCards.find((card) => card._id === id);
    // this.store.dispatch(setActiveCard({ card: newCard }));
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
    paragraph.classList.add('textToScroll');
    paragraph.style.setProperty('--time', time.toString());
  }
  endScroll(paragraph: HTMLElement) {
    this.enabled = false;
    paragraph.classList.remove('textToScroll');
  }
}
