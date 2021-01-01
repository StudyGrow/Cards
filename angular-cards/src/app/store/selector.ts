import { createSelector } from "@ngrx/store";

import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { AppState } from "../models/state";

const maxCards = 50; //maximum amount of cards which should be displayed in carousel

export const selectAllCards = (state: AppState) => state.data?.cardData?.cards;

export const selectUserVote = (state: AppState, cardId: string) =>
  state.data.userData.authenticated
    ? state.data.userData.votes?.find((vote) => vote.cardId == cardId)
    : undefined;

export const selectVoteCount = (state: AppState, cardId: string) =>
  state.data.cardData.votes
    ? state.data.cardData.votes.filter(
        (vote) => vote.cardId == cardId && vote.value == 1
      ).length
    : undefined;

export const selectActiveTags = (state: AppState) => state.mode.tags;

export const selectAllTags = (state: AppState) =>
  state.data.cardData?.currLecture?.tagList;

export const selectActiveIndex = (state: AppState) => state.mode.activeIndex;

export const selectFormMode = (state: AppState) => state.mode.formMode;

export const selectCurrentLecture = (state: AppState) =>
  state.data?.cardData?.currLecture;

export const selectUserId = (state: AppState) =>
  state.data?.userData?.user?._id;

export const selectCurrentTab = (state: AppState) => state.mode.currTab;

export const isLoading = (state: AppState) => state.mode.loading > 0;

export const selectLectures = (state: AppState) =>
  state.data.lectureData.lectures;

export const selectUserInfo = (state: AppState) => state.data.userData;

export const selectUser = (state: AppState) => state.data.userData.user;

const selectIndices = (state: AppState) => [
  state.mode.startIndex,
  state.mode.endIndex,
  state.mode.activeIndex,
];

export const authenticated = (state: AppState) =>
  state.data.userData.authenticated;

export const lastFilterChange = (state: AppState) => state.mode.filterChanged;

export const selectUserCards = createSelector(
  selectUserInfo,
  (info) => info.cards
);

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

const selectCurrentCards = createSelector(
  selectAllCards,
  selectIndices,
  (cards, [start, end, curr]) => cards?.slice(start, end)
);

export const selectFilteredCards = createSelector(
  selectCurrentCards,
  selectActiveTags,
  (cards, filter) => applyFilter(cards, filter)
);

export const selectLastCardIndex = createSelector(
  selectFilteredCards,
  (cards) => cards.length - 1
);

export const selectCurrentCard = (state: AppState) => state.mode.currentCard;

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
