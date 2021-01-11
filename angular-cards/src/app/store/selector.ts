import { createSelector } from "@ngrx/store";

import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";
import { AppState } from "../models/state";

import { SortType } from "../models/SortType";
import { Vote } from "../models/Vote";

/**
 * Get all cards for a certain lecture from store
 * @param state state of the store
 */
export const selectAllCards = (state: AppState) => state.data?.cardData?.cards;

/**
 * Get the votes that were made by a user for a certain card
 * @param state  state of the store
 * @param cardId ID of the card for which the vote should be fetched
 */
export const selectUserVote = (
  state: AppState,
  cardId: string //
) =>
  state.data.userData.authenticated
    ? state.data.userData.votes?.find((vote) => vote.cardId == cardId)
    : undefined;

export const selectVotes = (state: AppState, cardId: string) =>
  state.data.cardData.votes
    ? state.data.cardData.votes.filter(
        (vote) => vote.cardId == cardId && vote.value == 1
      )
    : undefined;
/**
 * Counts all votes for a certain card
 * @param state state of the app
 * @param cardId id of the card for which the votes should be counted
 */
export const selectVoteCount = (state: AppState, cardId: string) =>
  state.data.cardData.votes
    ? state.data.cardData.votes.filter(
        (vote) => vote.cardId == cardId && vote.value == 1
      ).length
    : undefined;
/**
 * Current tags selected by the user
 * @param state state of the app
 */
export const selectActiveTags = (state: AppState) => state.mode.tags;
/**
 * Select all tags for the current lecture
 * @param state state of the app
 */
export const selectAllTags = (state: AppState) =>
  state.data.cardData?.currLecture?.tagList;
/**select the index of the active card in the array */
export const selectActiveIndex = (state: AppState) => state.mode.activeIndex;
/**
 * Get the mode of the card form
 * @param state state of the app
 */
export const selectFormMode = (state: AppState) => state.mode.formMode;
/**
 * Select the current lecture
 * @param state state of the app
 */
export const selectCurrentLecture = (state: AppState) =>
  state.data?.cardData?.currLecture;
/**
 * Select the id of the user, if user is logged in
 * @param state state of the app
 */
export const selectUserId = (state: AppState) =>
  state.data?.userData?.user?._id;
/**
 * select the currently active tab in the cards component view
 * @param state state of the app
 */
export const selectCurrentTab = (state: AppState) => state.mode.currTab;
/**
 * select the loadig state. Will be true if at least one ressource is loading
 * @param state state of the app
 */
export const selectLoadingState = (state: AppState) => state.mode.loading > 0;
/**
 * select all lectures
 * @param state state of the app
 */
export const selectLectures = (state: AppState) =>
  state.data.lectureData.lectures;
/**
 * Select user information
 * @param state state of the app
 */
export const selectUserInfo = (state: AppState) => state.data.userData;
/**
 * select the current user
 * @param state state of the app
 */
export const selectUser = (state: AppState) => state.data.userData.user;
/**
 * check if user is logged in
 * @param state state of the app
 */
export const authenticated = (state: AppState) =>
  state.data.userData.authenticated;

const selectSortType = (state: AppState) => state.mode.sortType;
/**
 * select the date at which the filter for the cards have changed
 * @param state state of the app
 */
export const lastCardChange = (state: AppState) => state.mode.cardsChanged;
/**
 * Select the cards that the user has added
 */
export const selectUserCards = createSelector(
  selectUserInfo,
  (info) => info.cards
);
/**
 * Selects the current filter as well the date at which it was set
 */
export const selectFilterObject = createSelector(
  lastCardChange,
  selectActiveTags,
  (date, tags) => ({ date, tags })
);
/**
 * Select the tag options that are still not selected by the user
 */
export const selectTagOptions = createSelector(
  selectAllTags,
  selectActiveTags,
  (all, selected) => selectedRemaining(all, selected)
);
export const selectAllCardsSorted = createSelector(
  selectAllCards,
  selectVotes,
  selectSortType,
  lastCardChange,
  (cards, votes, type, lastChanges) => _sort(cards, type, lastChanges, votes)
);
/**
 * Returns the cards filtered by the selected tags
 */
export const selectDisplayedCards = createSelector(
  selectAllCardsSorted,
  selectActiveTags,
  (obj, filter) => _filter(obj.cards, filter)
);
/**
 * Selects the last cardindex in the carousel
 */
export const selectLastCardIndex = createSelector(
  selectDisplayedCards,
  (cards) => cards.length - 1
);

/**
 * Select the card which is currently shown in the carousel
 * @param state state of the app
 */
export const selectCurrentCard = (state: AppState) => state.mode.currentCard;
/**
 * get cards data as one object containing the current lecture, the user id and the cards
 */
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
/**
 * Function which filters cars
 * @param cards cards which should be filtered
 * @param filters the tags by which the cards should be filtered. The card is retained if at least one filter matches
 */
function _filter(cards: Card[], filters: string[]): Card[] {
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
function selectedRemaining(all: any[], selected: any[]) {
  if (!selected) return [];
  return all.filter((tag) => !selected?.includes(tag));
}
/**
 * Function which sorts the cards by a certain sortig type
 * @param cards cards which should be sorted
 * @param type the type of sorting that should be applied
 * @param date Date by which the cards array has changed
 * @param votes Votes are needed if the user wants to sort cards by the number of likes
 */
function _sort(
  cards: Card[],
  type: SortType,
  date: Date,
  votes: Vote[]
): { date: Date; cards: Card[] } {
  let result = { cards: cards, date: new Date() };
  switch (type) {
    case SortType.DATE_ASC:
      result.cards = [...cards].sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        if (new Date(a.date).getTime() < new Date(b.date).getTime()) return -1;
        if (new Date(a.date).getTime() > new Date(b.date).getTime()) return 1;
        return 0;
      });
      break;
    case SortType.DATE_DSC:
      result.cards = [...cards].sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        if (new Date(a.date).getTime() > new Date(b.date).getTime()) return -1;
        if (new Date(a.date).getTime() < new Date(b.date).getTime()) return 1;
        return 0;
      });
      break;
    case SortType.AUTHOR_ASC:
      result.cards = [...cards].sort((a, b) => {
        if (!a.authorName && !b.authorName) return 0;
        if (!a.authorName) return 1;
        if (!b.authorName) return -1;
        if (a.authorName < b.authorName) return -1;
        if (a.authorName > b.authorName) return 1;
        return 0;
      });
      break;
    case SortType.AUTHOR_DSC:
      result.cards = [...cards].sort((a, b) => {
        if (!a.authorName && !b.authorName) return 0;
        if (!a.authorName) return 1;
        if (!b.authorName) return -1;
        if (a.authorName > b.authorName) return -1;
        if (a.authorName < b.authorName) return 1;
        return 0;
      });
      break;
    case SortType.TAGS_ASC:
      result.cards = [...cards].sort((a, b) => {
        if (!a.tags && !b.tags) return 0;
        if (!a.tags) return 1;
        if (!b.tags) return -1;
        if (a.tags[0] > b.tags[0]) return 1;
        if (a.tags[0] < b.tags[0]) return -1;
        return 0;
      });
      break;
    case SortType.TAGS_DSC:
      result.cards = [...cards].sort((a, b) => {
        if (!a.tags && !b.tags) return 0;
        if (!a.tags) return 1;
        if (!b.tags) return -1;
        if (a.tags[0] > b.tags[0]) return -1;
        if (a.tags[0] < b.tags[0]) return 1;
        return 0;
      });
      break;
    case SortType.LIKES_ASC:
      result.cards = [...cards].sort(
        (a, b) => countVotesForCard(a, votes) - countVotesForCard(b, votes)
      );
      break;
    case SortType.LIKES_DSC:
      result.cards = [...cards].sort(
        (a, b) => countVotesForCard(b, votes) - countVotesForCard(a, votes)
      );
      break;
    default:
      result.date = date; //no changes were made so reset to initial date
      break;
  }
  return result;
}
/**
 * Count the Rating of a card
 * @param card card for which the votes should be counted
 * @param votes all votes
 */
function countVotesForCard(card: Card, votes: Vote[]) {
  let res = votes.filter((vote) => vote.cardId === card._id && vote.value === 1)
    .length;
  return res;
}
