import * as StateActions from '../actions/StateActions';

import { createReducer, on, Action } from '@ngrx/store';

import { formMode, Mode } from 'src/app/models/state';
import { Card } from 'src/app/models/Card';
import { SortType } from 'src/app/models/SortType';

export const pageSize = 30;
//initial state of the app
export const initialState: Mode = {
  currentCard: undefined,
  activeIndex: 0,
  formMode: formMode.ADD,
  typingMode: false,
  hideSearchResults: true,
  loading: 0,
  tags: [],
  currTab: 0,
  theme: localStorage.getItem('theme'),
  cardsChanged: undefined,
  sortType: SortType.DATE_ASC,
  startIndex: 0,
  endIndex: pageSize,
};

//Reducer which will dispatch changes to the store
const _modeReducer = createReducer(
  initialState,
  on(StateActions.adjustIndeces, (state, { allCards, newIndex }) => {
    newIndex = newIndex + state.startIndex; //actual position of newIndex considering all cards
    let actualIndex = state.startIndex + state.activeIndex; // actual index considering all cards
    console.log(
      'Current index: ' + actualIndex,
      'Index to be: ' + newIndex,
      'First Index: ' + state.startIndex,
      'Last Index: ' + state.endIndex
    );
    if (
      (newIndex >= state.startIndex && newIndex < state.endIndex) || //in current range
      newIndex < 0 || //no cards on the left
      newIndex >= allCards.length //no cards on the right
    )
      return state;
    if (newIndex < state.startIndex) {
      let newStart =
        state.startIndex - pageSize > 0 ? state.startIndex - pageSize : 0;
      let newEnd = state.startIndex;
      return {
        ...state,
        startIndex: newStart,
        endIndex: newEnd,
        // currentCard: allCards[newIndex],
        activeIndex: newIndex - newStart, //relative position
        cardsChanged: new Date(), //semantically incorrect but gets the desired result, which is refresh carousel
      };
    }
    if (newIndex >= state.endIndex) {
      let newStart = newIndex;
      let newEnd =
        state.endIndex + pageSize < allCards.length
          ? state.endIndex + pageSize
          : allCards.length;
      return {
        ...state,
        startIndex: newStart,
        endIndex: newEnd,
        // currentCard: allCards[newIndex],
        activeIndex: newIndex - newStart, //relative index
        cardsChanged: new Date(),
      };
    }
    return state;
  }),
  on(StateActions.changeTheme, (state, { theme }) =>
    theme === state.theme
      ? state
      : {
          ...state,
          theme: theme,
        }
  ),

  on(StateActions.changeTab, (state, { tab }) =>
    tab === state.currTab ? state : { ...state, currTab: tab }
  ),

  on(StateActions.setFormMode, (state, { mode }) =>
    mode === state.formMode
      ? state
      : {
          ...state,
          formMode: mode,
        }
  ),

  on(StateActions.setActiveCardIndex, (state, { index }) =>
    index === state.activeIndex
      ? state
      : {
          ...state,
          activeIndex: index,
        }
  ),
  on(StateActions.setActiveCard, (state, { card }) => ({
    ...state,
    currentCard: card,
  })),
  on(StateActions.goNext, (state) => ({
    ...state,
    activeIndex: state.activeIndex + 1,
  })),

  on(StateActions.goNext, (state) => ({
    ...state,
    activeIndex: state.activeIndex - 1,
  })),

  on(StateActions.setTypingMode, (state, { typing }) =>
    typing === state.typingMode
      ? state
      : {
          ...state,
          typingMode: typing,
        }
  ),
  on(StateActions.setSuggestionsMode, (state, { hide }) =>
    hide === state.hideSearchResults
      ? state
      : {
          ...state,
          hideSearchResults: hide,
        }
  ),

  on(StateActions.incrementLoading, (state) => ({
    ...state,
    loading: state.loading + 1,
  })),
  on(StateActions.decrementLoading, (state) => ({
    ...state,
    loading: state.loading - 1 < 0 ? 0 : state.loading - 1,
  })),

  on(StateActions.addTag, (state, { tag }) => ({
    ...state,
    tags: addTag(state.tags, tag),
    cardsChanged: new Date(),
  })),

  on(StateActions.removeTag, (state, { tag }) => ({
    ...state,
    tags: removeInArray([...state.tags], tag),
    cardsChanged: new Date(),
  })),

  on(StateActions.resetFilter, (state) => ({
    ...state,
    tags: initialState.tags,
    cardsChanged: new Date(),
  })),
  on(StateActions.changeSorting, (state, { sortType }) => ({
    ...state,
    sortType: sortType,
    cardsChanged: new Date(),
  })),
  on(StateActions.resetCardsState, (state) => ({
    ...state,
    currentCard: initialState.currentCard,
    activeIndex: initialState.activeIndex,
    formMode: initialState.formMode,
    typingMode: false,
    hideSearchResults: true,
    tags: initialState.tags,
    currTab: initialState.currTab,
    cardsChanged: new Date(),
    sortType: initialState.sortType,
    startIndex: initialState.startIndex,
    endIndex: initialState.endIndex,
  }))
);

export function modeReducer(state: Mode, action: Action) {
  return _modeReducer(state, action);
}

function removeInArray(items: string[], item: string) {
  if (items.length <= 1 && items[0] == item) return [];

  const filterValue = item.toLowerCase();

  return items.filter((item) => !item.toLowerCase().includes(filterValue));
}

function addTag(origin: string[], tag: string) {
  //adds one tag to the original array without duplicates

  return origin.includes(tag) ? origin : [...origin, tag];
}

function findIndex(cards: Card[], id: string) {
  let res = cards.findIndex((card) => card._id == id);
  return res >= 0 ? res : 0;
}
