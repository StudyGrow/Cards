import { Actions } from "./actions";
import { createReducer, on } from "@ngrx/store";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";

//defines the state of our app
export interface State {
  cardsData: { cards: Card[]; lecture: Vorlesung };
}

//initial state of the app
export const initialState: State = {
  cardsData: { cards: [], lecture: new Vorlesung() },
};

//Reducer which will dispatch changes to the store
const _cardsReducer = createReducer(
  initialState,
  on(Actions.addCard, (state, { card }) => ({
    ...state,
    cards: [...state.cardsData.cards, card],
    lecture: state.cardsData.lecture,
    //add card to the end of the cards array
  })),
  on(Actions.LoadSuccess, (state, { cards }) => ({
    ...state,
    cards: cards, //update cards with newly fecthed cards
  })),
  on(Actions.LoadFailure, (state) => state) //on failure don't update state
);

export function cardsReducer(state, action) {
  return _cardsReducer(state, action);
}
