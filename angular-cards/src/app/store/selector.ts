import { createSelector } from "@ngrx/store";

import { AppState } from "./reducer";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { state } from "@angular/animations";

export const selectCards = (state: AppState) => state.cards;

export const selectCurrentLecture = (state: AppState) => state.currLecture;

export const selectUserId = (state: AppState) => state.userData.user?._id;

export const selectDrawerState = (state: AppState) => state.showDrawer;

export const isLoading = (state: AppState) => state.loading > 0;

export const selectLectures = (state: AppState) => state.lectures;

export const selectUserInfo = (state: AppState) => state.userData;

export const selectUser = (state: AppState) => state.userData.user;

export const authenticated = (state: AppState) => state.userData.authenticated;

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
