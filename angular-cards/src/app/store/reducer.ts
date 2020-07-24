import * as Actions from "./actions";
import { createReducer, on } from "@ngrx/store";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";

//defines the state of our app
export interface AppState {
  cardsData: { cards: Card[]; lecture: Vorlesung; uid: string };
  activeIndex: number;
  lectures: Vorlesung[];
}
export class CardsData {
  cards: Card[];
  lecture: Vorlesung;
  uid: string;
}
//initial state of the app
export const initialState: AppState = {
  cardsData: { cards: [], lecture: null, uid: null },
  activeIndex: 0,
  lectures: [],
};

//Reducer which will dispatch changes to the store
const _cardsReducer = createReducer(
  initialState,
  on(Actions.addCard, (state, { card }) => ({
    ...state,
    cardsData: {
      cards: [...state.cardsData.cards, card],
      lecture: state.cardsData.lecture,
    },
  })),
  on(Actions.fetchLecturesSuccess, (state, { lectures }) => ({
    ...state,
    lectures: lectures,
  })),
  on(Actions.updateCardSuccess, (state, { card }) => ({
    ...state,
    cardsData: {
      cards: updateObjectInArray(state.cardsData.cards, card),
      lecture: state.cardsData.lecture,
    },

    //add card to the end of the cards array
  })),
  on(Actions.LoadSuccess, (state, { data }) => ({
    ...state,
    cardsData: {
      cards: data.cards,
      lecture: data.lecture,
      uid: data.uid,
    },
  })),
  on(Actions.setActiveCardIndex, (state, { index }) => ({
    ...state,
    activeIndex: index,
  })),
  on(Actions.LoadFailure, (state) => state) //on failure don't update state
);

export function cardsReducer(state, action) {
  return _cardsReducer(state, action);
}

function updateObjectInArray(cards: Card[], card: Card) {
  console.log(card);
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
