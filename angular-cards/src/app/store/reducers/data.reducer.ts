import { Action, createReducer, on } from "@ngrx/store";
import { Card } from "src/app/models/Card";
import { CardsData, Data, LecturesData, UserData } from "src/app/models/state";
import { User } from "src/app/models/User";
import * as CardActions from "../actions/cardActions";
import * as LectureActions from "../actions/LectureActions";
import * as UserActions from "../actions/UserActions";

const initialState: Data = {
  cardData: {
    cards: [],
    lastUpdated: undefined,
    currLecture: undefined,
  },
  userData: {
    cards: undefined,
    authenticated: false,
    user: new User(),
    lastUpdated: undefined,
  },
  lectureData: {
    lectures: [],
    lastUpdated: undefined,
  },
};

const _dataReducer = createReducer(
  initialState,

  on(CardActions.addCardSuccess, (state, { card }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: [
        ...state.cardData.cards,
        {
          //add card
          ...card,
          authorId: state.userData.user._id, //add user id
          authorName: state.userData.user.username, //add username
        },
      ],
      currLecture: {
        ...state.cardData.currLecture,
        tagList: addTags([...state.cardData.currLecture.tagList], card.tags),
      }, //add new tags to the lectures taglist
      lastUpdated: new Date(),
    },
  })),

  on(LectureActions.fetchLecturesSuccess, (state, { lectures }) => ({
    ...state,
    lectureData: {
      ...state.lectureData,
      lectures: [...lectures],
      lastUpdated: new Date(),
    },
  })),

  on(LectureActions.addLercture, (state, { lecture }) => ({
    ...state,
    lectureData: {
      ...state.lectureData,
      lectures: [...state.lectureData.lectures, lecture],
      lastUpdated: new Date(),
    },
  })),

  on(CardActions.updateCardSuccess, (state, { card }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: updateObjectInArray(state.cardData.cards, card),
      lastUpdated: new Date(),
    },
  })),

  on(CardActions.LoadSuccess, (state, { data }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: data.cards,
      lastUpdated: new Date(),
      currLecture: data.lecture,
    },
    userData: {
      ...state.userData,
      user: {
        ...state.userData.user,
        _id: data.uid,
      },
      lastUpdated: new Date(),
    },
  })),

  on(UserActions.fetchUserDataSuccess, (state, info) => ({
    ...state,
    userData: {
      ...state.userData,
      cards: info.cards,
      user: info.user,
      lastUpdated: new Date(),
    },
  })),

  on(UserActions.updateUserDataSuccess, (state, user) => ({
    ...state,
    userData: { ...state.userData, user: user, lastUpdated: new Date() },
  })),

  on(UserActions.authenticated, (state, { auth }) => ({
    ...state,
    userData: {
      ...state.userData,
      authenticated: auth,
    },
  })),

  on(UserActions.loginSuccess, (state, user) => ({
    ...state,
    userData: {
      ...state.userData,
      user: user,
      authenticated: true,
      lastUpdated: new Date(),
    },
  })),

  on(UserActions.logoutSuccess, (state) => ({
    ...state,
    userData: initialState.userData,
  })),

  on(CardActions.clearCardData, (state) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: initialState.cardData.cards,
      currLecture: initialState.cardData.currLecture,
      lastUpdated: initialState.cardData.lastUpdated,
    },
  }))
);

export function dataReducer(state: Data, action: Action) {
  return _dataReducer(state, action);
}

function updateObjectInArray(cards: Card[], card: Card) {
  return cards.map((item) =>
    item._id !== card._id
      ? item
      : {
          ...item,
          ...card,
        }
  );
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
