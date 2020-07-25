import { createSelector } from "@ngrx/store";

import { AppState } from "./reducer";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";

export const selectCards = (state: AppState) => state.cards;

export const selectCurrentLecture = (state: AppState) => state.currLecture;

export const selectUserId = (state: AppState) => state.user?._id;

export const selectDrawerState = (state: AppState) => state.showDrawer;

export const getCardsData = createSelector(
  selectCards,
  selectCurrentLecture,
  selectUserId,
  (cards: Card[], currLecture: Vorlesung, uid: string) => ({
    cards,
    currLecture,
    uid,
  })
);

export const selectLectures = (state: AppState) => state.lectures;
