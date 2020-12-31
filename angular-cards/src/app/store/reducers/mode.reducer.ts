import * as StateActions from "../actions/StateActions";

import { createReducer, on, Action } from "@ngrx/store";

import { formMode, Mode } from "src/app/models/state";
import { Card } from "src/app/models/Card";

//initial state of the app
export const initialState: Mode = {
  activeIndex: 0,
  formMode: formMode.ADD,
  typingMode: false,
  hideSearchResults: true,
  loading: 0,
  tags: [],
  currTab: 0,
  theme: localStorage.getItem("theme"),
  filterChanged: undefined,
};

//Reducer which will dispatch changes to the store
const _modeReducer = createReducer(
  initialState,

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
  on(StateActions.setActiveCardIndexById, (state, { id, cards }) => ({
    ...state,
    activeIndex: findIndex(cards, id),
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
    filterChanged: new Date(),
  })),

  on(StateActions.removeTag, (state, { tag }) => ({
    ...state,
    tags: removeInArray([...state.tags], tag),
    filterChanged: new Date(),
  })),

  on(StateActions.resetFilter, (state) => ({
    ...state,
    tags: initialState.tags,
    filterChanged: new Date(),
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
