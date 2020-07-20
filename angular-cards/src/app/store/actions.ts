import { Action } from "@ngrx/store";
import { Card } from "../models/Card";

export enum ActionTypes {
  Add = "[Card] Add new card to the collection",
  LoadCards = "[Cards] Load cards from server",
  LoadSuccess = "[Cards] Load success",
}
export class AddCard implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Card) {}
}

export class GetCards implements Action {
  readonly type = ActionTypes.LoadCards;
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Card[]) {}
}

export type ActionsUnion = AddCard | LoadItems | GetCards;
