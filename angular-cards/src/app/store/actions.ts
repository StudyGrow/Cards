import { Action, createAction, props, union } from "@ngrx/store";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { CardsData } from "./reducer";

//Types of Actions
export enum ActionTypes {
  ADD_CARD = "[Card] Add new card to the collection",
  FETCH_CARDS = "[Cards] Fetch cards from server",
  LOAD_SUCCESS = "[Cards] Load success",
  LOAD_FAILURE = "[Cards] Load failure",
}

//Concrete Actions for each type
export const addCard = createAction(
  ActionTypes.ADD_CARD,
  props<{ card: Card }>()
);

export const fetchCards = createAction(
  ActionTypes.FETCH_CARDS,
  props<{ abrv: string }>()
);

export const LoadSuccess = createAction(
  ActionTypes.LOAD_SUCCESS,
  props<{ data: CardsData }>()
);

export const LoadFailure = createAction(
  ActionTypes.LOAD_FAILURE,
  props<{ reason: string }>()
);

export const Actions = { addCard, fetchCards, LoadSuccess, LoadFailure };
