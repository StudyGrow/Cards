import * as StateActions from '../actions/StateActions';

import { createReducer, on, Action } from '@ngrx/store';

import { CardsFeatureState } from 'src/app/models/State';
import { Card } from 'src/app/models/Card';
import { SortType } from 'src/app/models/SortType';

export const cardsFeatureReducerKey = 'cardsFeature';
enum CardFormMode {
  ADD = 'add',
  EDIT = 'edit',
}

export const pageSize = 30;
// initial state of the app
export const initialState: CardsFeatureState = {
  carousel: {
    activeIndex: 0,
    tags: [],
    cardsChanged: undefined,
    sortType: SortType.DATE_ASC,
    startIndex: 0,
    endIndex: pageSize,
    newCard: undefined,
    currentCard: undefined,
  },

  formMode: CardFormMode.ADD,
  typingInInputField: false,
  hideQuestionSearchResults: true,
  loading: 0,
  currTab: 0,
};

// Reducer which will dispatch changes to the store
const _carouselStateReducer = createReducer(
  initialState,
  on(StateActions.updateCarouselInfo, (state, { info }) => ({
    ...state,
    carousel: {
      ...state.carousel,
      currentCard: info.currentCard,
      activeIndex: info.absoluteIndex,
      endIndex: info.end,
      startIndex: info.start,
    },
  })),
  on(StateActions.showNewCardSuccess, (state, { card }) => ({
    ...state,
    carousel: {
      ...state.carousel,
      newCard: card,
    },
  })),
  on(StateActions.changeTab, (state, { tab }) => (tab === state.currTab ? state : { ...state, currTab: tab })),

  on(StateActions.setFormMode, (state, { mode }) =>
    mode === state.formMode
      ? state
      : {
          ...state,
          formMode: mode,
        }
  ),

  on(StateActions.setTypingMode, (state, { typing }) =>
    typing === state.typingInInputField
      ? state
      : {
          ...state,
          typingInInputField: typing,
        }
  ),
  on(StateActions.setSuggestionsMode, (state, { hide }) =>
    hide === state.hideQuestionSearchResults
      ? state
      : {
          ...state,
          hideQuestionSearchResults: hide,
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
    carousel: {
      ...state.carousel,
      tags: addTag(state.carousel.tags, tag),
      cardsChanged: new Date(),
    },
  })),

  on(StateActions.removeTag, (state, { tag }) => ({
    ...state,
    carousel: {
      ...state.carousel,
      tags: removeInArray([...state.carousel.tags], tag),
      cardsChanged: new Date(),
    },
  })),

  on(StateActions.resetFilter, (state) => ({
    ...state,
    carousel: {
      ...state.carousel,
      tags: initialState.carousel.tags,
      cardsChanged: new Date(),
    },
  })),
  on(StateActions.changeSorting, (state, { sortType }) => ({
    ...state,
    carousel: {
      ...state.carousel,
      sortType: sortType,
      newCard: null,
      cardsChanged: new Date(),
    },
  })),
  on(StateActions.resetCardsState, (state) => ({
    ...state,
    carousel: {
      ...state.carousel,
      tags: initialState.carousel.tags,
      activeIndex: initialState.carousel.activeIndex,
      cardsChanged: new Date(),
      sortType: initialState.carousel.sortType,
      startIndex: initialState.carousel.startIndex,
      endIndex: initialState.carousel.endIndex,
    },
    formMode: initialState.formMode,
    typingInInputField: false,
    hideQuestionSearchResults: true,
    currTab: initialState.currTab,
  })),
  on(StateActions.fail, (state) => state)
);

export function carouselStateReducer(state: CardsFeatureState, action: Action) {
  return _carouselStateReducer(state, action);
}

function removeInArray(items: string[], item: string) {
  if (items.length <= 1 && items[0] == item) return [];

  const filterValue = item.toLowerCase();

  return items.filter((item) => !item.toLowerCase().includes(filterValue));
}

function addTag(origin: string[], tag: string) {
  // adds one tag to the original array without duplicates

  return origin.includes(tag) ? origin : [...origin, tag];
}

function findIndex(cards: Card[], id: string) {
  const res = cards.findIndex((card) => card._id == id);
  return res >= 0 ? res : 0;
}
