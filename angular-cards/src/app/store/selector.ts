import { createSelector } from "@ngrx/store";

import { AppState } from "./reducer";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { Data, Mode } from "../models/state";

export const selectAllCards = (state: Data) => state.cardData.cards;

export const selectActiveTags = (state: Mode) => state.tags;

export const selectAllTags = (state: Data) =>
  state.cardData.currLecture?.tagList;

export const selectActiveIndex = (state: Mode) => state.activeIndex;

export const selectFormMode = (state: Mode) => state.formMode;

export const selectCurrentLecture = (state: Data) => state.cardData.currLecture;

export const selectUserId = (state: Data) => state.userData.user?._id;

export const selectCurrentTab = (state: Mode) => state.currTab;

export const selectDrawerState = (state: Mode) => state.showDrawer;

export const isLoading = (state: Mode) => state.loading > 0;

export const selectLectures = (state: Data) => state.lectureData.lectures;

export const selectUserInfo = (state: Data) => state.userData;

export const selectUser = (state: Data) => state.userData.user;

export const authenticated = (state: Data) => state.userData.authenticated;

export const lastFilterChange = (state: Mode) => state.filterChanged;

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
  if (!selected) return [];
  return all.filter((tag) => !selected?.includes(tag));
}
