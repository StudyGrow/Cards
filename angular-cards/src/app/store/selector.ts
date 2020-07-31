import { createSelector } from "@ngrx/store";

import { AppState } from "./reducer";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";

export const selectAllCards = (state: AppState) => state.cards;

export const selectTags = (state: AppState) => state.tags;

export const selectAllTags = (state: AppState) => state.currLecture.tagList;

export const selectActiveIndex = (state: AppState) => state.activeIndex;

export const selectCurrentLecture = (state: AppState) => state.currLecture;

export const selectUserId = (state: AppState) => state.userData.user?._id;

export const selectDrawerState = (state: AppState) => state.showDrawer;

export const isLoading = (state: AppState) => state.loading > 0;

export const selectLectures = (state: AppState) => state.lectures;

export const selectUserInfo = (state: AppState) => state.userData;

export const selectUser = (state: AppState) => state.userData.user;

export const authenticated = (state: AppState) => state.userData.authenticated;

export const selectTagOptions = createSelector(
  selectAllTags,
  selectTags,
  (all, selected) => _filter(all, selected)
);

export const selectFilteredCards = createSelector(
  selectAllCards,
  selectTags,
  (cards, filter) => applyFilter(cards, filter)
);
export const selectLastCardIndex = createSelector(
  selectFilteredCards,
  (cards) => cards.length - 1
);

export const selectCurrentCard = createSelector(
  selectFilteredCards,
  selectActiveIndex,
  (cards, index) => cards[index]
);

export const getCardsData = createSelector(
  selectAllCards,
  selectCurrentLecture,
  selectUserId,
  (cards: Card[], currLecture: Vorlesung, uid: string) => ({
    cards,
    currLecture,
    uid,
  })
);

function applyFilter(cards: Card[], filters: string[]): Card[] {
  if (!filters || filters.length === 0) {
    return cards;
  }

  let res = cards.filter((card) => {
    for (const tag of filters) {
      if (!card.tags) {
        return false;
      }
      if (card.tags.includes(tag)) {
        return true;
      }
    }
    return false;
  });
  return res;
}
function _filter(all: any[], selected: any[]) {
  if (!selected) {
    return all;
  } else if (!all) {
    return all;
  } else {
    return all.filter((tag) => !selected.includes(tag));
  }
}
