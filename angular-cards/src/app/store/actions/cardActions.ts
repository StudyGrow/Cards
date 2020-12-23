import { Action, createAction, props, union } from "@ngrx/store";

import { Card, CardsData } from "../../models/Card";
import { Vorlesung } from "../../models/Vorlesung";

//Types of Actions
enum ActionTypes {
  FETCH_CARDS = "[Cards] Fetch from server, also loads current lecture and user.id",
  LOAD_SUCCESS = "[Cards] Load success",
  LOAD_FAILURE = "[Cards] Load failure",
  ADD_CARD = "[Card] Add new card to the collection",
  ADD_CARD_SUCCESS = "[Card] Add card success",
  UPDATE_CARD = "[Card] update card in the  collection and on server",
  UPDATE_CARD_SUCCESS = "[Card] update card success successfully updated on server, now update in store",
  SET_ACITVE_CARD_INDEX = "[Index] update the index of the card which is currently showing",
  CLEAR_CARD_DATA = "[Cards] clear data about cards",
  GO_NEXT = "[Cards] Go to the next slide ",
  GO_PREV = "[Cards] Go to the prev. slide ",
  APPLY_FILTER = "[Filter] change the current cards filter for carousel cards",
  RESET_FILTER = "[Filter] reset the filter to show all cards",
  REMOVE_TAG = "[Filter] remove tag from the filter",
  ADD_TAG = "[Filter] add tag to the filter",
}

//Concrete Actions for each type

export const fetchCards = createAction(ActionTypes.FETCH_CARDS);
export const goNext = createAction(ActionTypes.GO_NEXT);
export const goPrev = createAction(ActionTypes.GO_PREV);
export const clearCardData = createAction(ActionTypes.CLEAR_CARD_DATA);
export const applyFilter = createAction(
  ActionTypes.APPLY_FILTER,
  props<{ tags: string[] }>()
);
export const addTag = createAction(
  ActionTypes.ADD_TAG,
  props<{ tag: string }>()
);

export const removeTag = createAction(
  ActionTypes.REMOVE_TAG,
  props<{ tag: string }>()
);

export const resetFilter = createAction(ActionTypes.RESET_FILTER);

export const setActiveCardIndex = createAction(
  ActionTypes.SET_ACITVE_CARD_INDEX,
  props<{ index: number }>()
);

export const LoadSuccess = createAction(
  ActionTypes.LOAD_SUCCESS,
  props<{ data: CardsData }>()
);

export const LoadFailure = createAction(
  ActionTypes.LOAD_FAILURE,
  props<{ reason: string }>()
);

export const addCard = createAction(
  ActionTypes.ADD_CARD,
  props<{ card: Card }>()
);

export const addCardSuccess = createAction(
  ActionTypes.ADD_CARD_SUCCESS,
  props<{ card: Card }>()
);

export const updateCard = createAction(
  ActionTypes.UPDATE_CARD,
  props<{ card: Card }>()
);

export const updateCardSuccess = createAction(
  ActionTypes.UPDATE_CARD_SUCCESS,
  props<{ card: Card }>()
);

export const FetchCardsActions = {
  //this loads lectures cards and user id
  fetchCards,
  LoadSuccess,
};

export const AddCardActions = { addCard, addCardSuccess };

export const UpdateCardActions = { updateCard, updateCardSuccess };
