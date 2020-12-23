import * as Actions from "../actions/cardActions";
import * as LectureActions from "../actions/LectureActions";
import * as StateActions from "../actions/actions";
import * as UserActions from "../actions/UserActions";
import { createReducer, on, Action } from "@ngrx/store";
import { Card } from "../../models/Card";
import { Vorlesung } from "../../models/Vorlesung";
import { User } from "../../models/User";
import { UserInfo } from "../../models/UserInfo";
import { formMode, Mode } from "src/app/models/state";

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

  on(Actions.setActiveCardIndex, (state, { index }) =>
    index === state.activeIndex
      ? state
      : {
          ...state,
          activeIndex: index,
        }
  ),

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
  })),

  on(Actions.goNext, (state) => ({
    ...state,
    activeIndex: state.activeIndex + 1,
  })),

  on(Actions.goNext, (state) => ({
    ...state,
    activeIndex: state.activeIndex - 1,
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
  if (origin.includes(tag)) return origin;
  return [...origin, tag];
}
