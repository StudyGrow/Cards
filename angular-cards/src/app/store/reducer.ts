import { ActionsUnion, ActionTypes } from "./actions";

export const initialState = {
  cards: [],
  loading: false,
};

export function Reducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.Add:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case ActionTypes.LoadSuccess:
      return {
        ...state,
        cards: [action.payload],
      };

    default:
      return state;
  }
}
