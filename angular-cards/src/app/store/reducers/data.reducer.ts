import { createReducer, on } from "@ngrx/store";
import { CardsData, LecturesData, UserData } from "src/app/models/state";
import { User } from "src/app/models/User";
import * as CardActions from "../actions/cardActions";
import * as LectureActions from "../actions/LectureActions";
import * as UserActions from "../actions/UserActions";

const initialState: {
  cardData: CardsData;
  userData: UserData;
  lectureData: LecturesData;
} = {
  cardData: {
    cards: [],
    lastUpdated: new Date(),
    currLecture: undefined,
  },
  userData: {
    cards: [],
    authenticated: false,
    user: new User(),
    lastUpdated: new Date(),
  },
  lectureData: {
    lectures: [],
    lastUpdated: new Date(),
  },
};

const _cardsReducer = createReducer(
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
      lastUpdated: new Date(),
      currLecture: {
        ...state.cardData.currLecture,
        tagList: addTags([...state.cardData.currLecture.tagList], card.tags),
      }, //add new tags to the lectures taglist}
    },
  })),

  on(LectureActions.fetchLecturesSuccess, (state, { lectures }) => ({
    ...state,
    lectureData: {
      ...state.lectureData,
      lectures: [...lectures],
    },
  })),

  on(LectureActions.addLercture, (state, { lecture }) => ({
    ...state,
    lectureData: {
      ...state.lectureData,
      lectures: [...state.lectureData.lectures, lecture],
    },
  })),

  on(CardActions.updateCardSuccess, (state, { card }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: updateObjectInArray(state.cardData.cards, card),
      filteredCardsChanged: new Date(),
    },
  })),

  on(CardActions.LoadSuccess, (state, { data }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: data.cards,
      filteredCardsChanged: new Date(),
    },
    lectureData: {
      ...state.lectureData,
      currLecture: data.lecture,
    },
    userData: {
      ...state.userData,
      user: {
        ...state.userData.user,
        _id: data.uid,
      },
    },
  })),

  on(CardActions.setActiveCardIndex, (state, { index }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      activeIndex: index,
    },
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

  on(CardActions.clearCardData, (state) => ({
    ...state,

    lectureData: {
      ...state.lectureData,
      currLecture: initialState.lectureData.currLecture,
    },
    cardData: {
      ...state.cardData,
      cards: initialState.cardData.cards,
      tags: initialState.cardData.tags,
      filteredCardsChanged: new Date(),
      activeIndex: initialState.cardData.activeIndex,
    },
  })),

  on(CardActions.addTag, (state, { tag }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      tags: addTag(state.cardData.tags, tag),
      filteredCardsChanged: new Date(),
    },
  })),

  on(CardActions.removeTag, (state, { tag }) => ({
    ...state,
    tags: removeInArray([...state.tags], tag),
    filteredCardsChanged: new Date(),
  })),
  on(CardActions.resetFilter, (state) => ({
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

export function cardsReducer(state: AppState, action: Action) {
  return _cardsReducer(state, action);
}

function addTag(origin: string[], tag: string) {
  //adds one tag to the original array without duplicates
  if (origin.includes(tag)) return origin;
  return [...origin, tag];
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

function addTags(origin: string[], tags: string[]) {
  //adds a list of tags to the original array without duplicates
  for (const tag of tags) {
    if (!origin.includes(tag)) {
      origin.push(tag);
    }
  }
  return origin;
}

function removeInArray(items: string[], item: string) {
  if (items.length <= 1 && items[0] == item) return [];

  const filterValue = item.toLowerCase();

  return items.filter((item) => !item.toLowerCase().includes(filterValue));
}
