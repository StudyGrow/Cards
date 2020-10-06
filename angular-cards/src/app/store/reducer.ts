import * as Actions from "./actions/cardActions";
import * as LectureActions from "./actions/LectureActions";
import * as StateActions from "./actions/actions";
import { createReducer, on, Action } from "@ngrx/store";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { User } from "../models/User";
import { UserInfo } from "../models/UserInfo";
import * as UserActions from "./actions/UserActions";
import { state } from "@angular/animations";

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
  tags: string[];
  filteredCardsChanged: Date;
}
export class CardsData {
  cards: Card[];
  lecture: Vorlesung;
  uid: string;
}
//initial state of the app
export const initialState: AppState = {
  cards: [],
  currLecture: new Vorlesung(),
  activeIndex: 0,
  lectures: [],
  formMode: "none",
  typingMode: false,
  hideSearchResults: true,
  userData: new UserInfo(null, new User()),
  showDrawer: false,
  loading: 0,
  tags: [],
  filteredCardsChanged: new Date(),
};
var oldMode = "none";
//Reducer which will dispatch changes to the store
const _cardsReducer = createReducer(
  initialState,
  on(Actions.addCardSuccess, (state, { card }) => ({
    ...state,
    cards: [
      ...state.cards,
      {
        //add card
        ...card,
        authorId: state.userData.user._id, //add user id
        authorName: state.userData.user.username, //add username
      },
    ],
    currLecture: {
      ...state.currLecture,
      tagList: addTags([...state.currLecture.tagList], card.tags),
    }, //add new tags to the lectures taglist
    filteredCardsChanged: new Date(),
  })),
  on(LectureActions.fetchLecturesSuccess, (state, { lectures }) => ({
    ...state,
    lectures: lectures,
  })),
  on(StateActions.setFormMode, (state, { mode }) => ({
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
    filteredCardsChanged: new Date(),
  })),
  on(Actions.LoadSuccess, (state, { data }) => ({
    ...state,
    cards: data.cards,
    filteredCardsChanged: new Date(),
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
  on(StateActions.setTypingMode, (state, { typing }) => ({
    ...state,
    typingMode: typing,
  })),
  on(StateActions.setSuggestionsMode, (state, { hide }) => ({
    ...state,
    hideSearchResults: hide,
  })),
  on(StateActions.setDrawerState, (state, { show }) => ({
    ...state,
    showDrawer: show,
  })),
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
    formMode: "none",
    currLecture: initialState.currLecture,
    cards: initialState.cards,
    filteredCardsChanged: new Date(),
  })),
  on(StateActions.applyFilter, (state, { tags }) => ({
    ...state,
    tags: addTags([...state.tags], tags),
    filteredCardsChanged: new Date(),
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
    tags: [],

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

function removeInArray(items: string[], item: string) {
  if (items.length == 1 && items[0] == item) {
    return [];
  } else {
    const filterValue = item.toLowerCase();

    return items.filter(
      (item) => item.toLowerCase().indexOf(filterValue) === 0
    );
  }
}

function addTags(origin: string[], tags: string[]) {
  tags.forEach((tag) => {
    if (!origin.includes(tag)) {
      origin.push(tag);
    }
  });
  return origin;
}

function addTag(origin: string[], tag: string) {
  if (!origin.includes(tag)) {
    return [...origin, tag];
  }
  return origin;
}
