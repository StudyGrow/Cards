import { createSelector } from "@ngrx/store";

import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { AppState, Data, Mode } from "../models/state";

export const selectAllCards = (state: AppState) => state.data?.cardData?.cards;

export const selectActiveTags = (state) => state.tags;

export const selectAllTags = (state: Data) =>
  state.cardData.currLecture?.tagList;

export const selectActiveIndex = (state: Mode) => state?.activeIndex;

export const selectFormMode = (state: Mode) => state.formMode;

export const selectCurrentLecture = (state: AppState) =>
  state.data?.cardData?.currLecture;

export const selectUserId = (state: AppState) =>
  state.data?.userData?.user?._id;

export const selectCurrentTab = (state: Mode) => state.currTab;

export const selectDrawerState = (state: Mode) => state.showDrawer;

export const isLoading = (state: Mode) => state.loading > 0;

export const selectLectures = (state: Data) => state.lectureData.lectures;

export const selectUserInfo = (state: Data) => state.userData;

export const selectUser = (state: Data) => state.userData.user;

export const authenticated = (state: Data) => state.userData.authenticated;

export const lastFilterChange = (state: Mode) => state.filterChanged;

export const filter = createSelector(
  lastFilterChange,
  selectActiveTags,
  (date, tags) => ({ date, tags })
);

export const selectTagOptions = createSelector(
  selectAllTags,
  selectActiveTags,
  (all, selected) => _filter(all, selected)
);

export const selectFilteredCards = createSelector(
  selectAllCards,
  selectActiveTags,
  (cards, filter) => applyFilter(cards, filter)
);

export const selectLastCardIndex = createSelector(
  selectFilteredCards,
  (cards) => cards.length - 1
);

export const selectCurrentCard = createSelector(
  selectFilteredCards,
  selectActiveIndex,
  (cards, index) => (cards ? cards[index] : undefined)
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
  if (!selected) return [];
  return all.filter((tag) => !selected?.includes(tag));
}
