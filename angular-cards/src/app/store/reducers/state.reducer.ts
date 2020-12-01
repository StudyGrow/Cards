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
  showDrawer: false,
  loading: 0,
  tags: [],
  currTab: 0,
  theme: localStorage.getItem("theme"),
  filterChanged: new Date(),
};

//Reducer which will dispatch changes to the store
const _cardsReducer = createReducer(
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
  on(StateActions.setDrawerState, (state, { show }) =>
    show === state.showDrawer
      ? state
      : {
          ...state,
          showDrawer: show,
        }
  ),

  on(StateActions.toggleDrawerState, (state) => ({
    ...state,
    showDrawer: !state.showDrawer,
  })),

  on(StateActions.incrementLoading, (state) => ({
    ...state,
    loading: state.loading + 1,
  })),
  on(StateActions.decrementLoading, (state) => ({
    ...state,
    loading: state.loading - 1 < 0 ? 0 : state.loading - 1,
  })),
  on(UserActions.fetchUserDataSuccess, (state, info) => ({
    ...state,
    userData: { ...state.userData, cards: info.cards, user: info.user },
  })),
  on(UserActions.updateUserDataSuccess, (state, user) => ({
    ...state,
    userData: { ...state.userData, user: user },
  })),
  on(UserActions.authenticated, (state, { auth }) => ({
    ...state,
    userData: { ...state.userData, authenticated: auth },
  })),
  on(UserActions.loginSuccess, (state, user) => ({
    ...state,
    userData: { ...state.userData, user: user, authenticated: true },
  })),
  on(UserActions.logoutSuccess, (state) => ({
    ...state,
    userData: initialState.userData,
    showDrawer: false,
  })),
  on(Actions.clearCardData, (state) => ({
    ...state,
    formMode: initialState.formMode,
    currLecture: initialState.currLecture,
    cards: initialState.cards,
    tags: initialState.tags,
    filteredCardsChanged: new Date(),
    currTab: initialState.currTab,
    activeIndex: initialState.activeIndex,
  })),

  on(StateActions.addTag, (state, { tag }) => ({
    ...state,
    tags: addTag(state.tags, tag),
    filteredCardsChanged: new Date(),
  })),
  on(StateActions.removeTag, (state, { tag }) => ({
    ...state,
    tags: removeInArray([...state.tags], tag),
    filteredCardsChanged: new Date(),
  })),
  on(StateActions.resetFilter, (state) => ({
    ...state,
    tags: initialState.tags,

    filteredCardsChanged: new Date(),
  })),
  on(Actions.goNext, (state) => ({
    ...state,
    activeIndex: state.activeIndex + 1,
  })),
  on(Actions.goNext, (state) => ({
    ...state,
    activeIndex: state.activeIndex - 1,
  })),

  on(Actions.LoadFailure, (state) => state) //on failure don't update state
);

export function cardsReducer(state: Mode, action: Action) {
  return _cardsReducer(state, action);
}

function updateObjectInArray(cards: Card[], card: Card) {
  return cards.map((item, index) => {
    if (item._id !== card._id) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...card,
    };
  });
}

function removeInArray(items: string[], item: string) {
  if (items.length <= 1 && items[0] == item) return [];

  const filterValue = item.toLowerCase();

  return items.filter((item) => !item.toLowerCase().includes(filterValue));
}

function addTags(origin: string[], tags: string[]) {
  //adds a list of tags to the original array without duplicates
  for (const tag of tags) {
    if (!origin.includes(tag)) {
      origin.push(tag);
    }
  }
  return origin;
}

function addTag(origin: string[], tag: string) {
  //adds one tag to the original array without duplicates
  if (origin.includes(tag)) return origin;
  return [...origin, tag];
}
