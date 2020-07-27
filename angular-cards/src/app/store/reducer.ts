import * as Actions from "./actions/cardActions";
import * as LectureActions from "./actions/LectureActions";
import {
  setFormMode,
  setTypingMode,
  setSuggestionsMode,
  setDrawerState,
  toggleDrawerState,
  incrementLoading,
  decrementLoading,
} from "./actions/actions";
import { createReducer, on, Action } from "@ngrx/store";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { User } from "../models/User";
import { UserInfo } from "../models/UserInfo";
import { state } from "@angular/animations";
import * as UserActions from "./actions/UserActions";

//defines the state of our app
export interface AppState {
  cards: Card[];
  currLecture: Vorlesung;
  activeIndex: number;
  lectures: Vorlesung[];
  formMode: string;
  typingMode: boolean;
  hideSearchResults: boolean;
  userData: UserInfo;
  showDrawer: boolean;
  loading: number;
}
export class CardsData {
  cards: Card[];
  lecture: Vorlesung;
  uid: string;
}
//initial state of the app
export const initialState: AppState = {
  cards: [],
  currLecture: null,
  activeIndex: 0,
  lectures: [],
  formMode: "none",
  typingMode: false,
  hideSearchResults: true,
  userData: new UserInfo(null, new User()),
  showDrawer: false,
  loading: 0,
};

//Reducer which will dispatch changes to the store
const _cardsReducer = createReducer(
  initialState,
  on(Actions.addCardSuccess, (state, { card }) => ({
    ...state,
    cards: [...state.cards, card],
    lecture: state.currLecture,
  })),
  on(LectureActions.fetchLecturesSuccess, (state, { lectures }) => ({
    ...state,
    lectures: lectures,
  })),
  on(setFormMode, (state, { mode }) => ({
    ...state,
    formMode: mode,
  })),
  on(LectureActions.addLercture, (state, { lecture }) => ({
    ...state,
    lectures: [...state.lectures, lecture],
  })),
  on(Actions.updateCardSuccess, (state, { card }) => ({
    ...state,
    cards: updateObjectInArray(state.cards, card),
  })),
  on(Actions.LoadSuccess, (state, { data }) => ({
    ...state,
    cards: data.cards,
    currLecture: data.lecture,
    userData: {
      ...state.userData,
      user: {
        ...state.userData.user,
        _id: data.uid,
      },
    },
  })),
  on(Actions.setActiveCardIndex, (state, { index }) => ({
    ...state,
    activeIndex: index,
  })),
  on(setTypingMode, (state, { typing }) => ({
    ...state,
    typingMode: typing,
  })),
  on(setSuggestionsMode, (state, { hide }) => ({
    ...state,
    hideSearchResults: hide,
  })),
  on(setDrawerState, (state, { show }) => ({ ...state, showDrawer: show })),
  on(toggleDrawerState, (state) => ({
    ...state,
    showDrawer: !state.showDrawer,
  })),
  on(incrementLoading, (state) => ({
    ...state,
    loading: state.loading + 1,
  })),
  on(decrementLoading, (state) => ({
    ...state,
    loading: state.loading - 1,
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
  on(UserActions.login, (state, user) => ({
    ...state,
    userData: { ...state.userData, user: user, authenticated: true },
  })),
  on(UserActions.logoutSuccess, (state) => ({
    ...state,
    userData: { ...state.userData, user: new User(), authenticated: false },
  })),
  on(Actions.clearCardData, (state) => ({
    ...state,
    currLecture: initialState.currLecture,
    cards: initialState.cards,
  })),
  on(Actions.LoadFailure, (state) => state) //on failure don't update state
);

export function cardsReducer(state: AppState, action: Action) {
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
