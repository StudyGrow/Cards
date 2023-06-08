import { createSelector } from '@ngrx/store';

import { SortType } from '../../models/SortType';
import { Vote } from '../../models/Vote';

import { Card } from '../../models/Card';
import { Vorlesung } from '../../models/Vorlesung';
import { AppState, CardFormMode, UserData } from '../../models/state';
import { Reports } from '../../models/Report';
import { User } from '../../models/User';

/**
 * Get all cards for a certain lecture from store
 * @param state state of the store
 * @deprecated Use CardsSorted instead
 */
const ALL_CARDS = (state: AppState) => state.data?.cardData?.cards;
export const USER_STATUS = (state: AppState): string => state.data.userData?.user?.status;
export const USER_REPORTS = (state: AppState): Reports => state.data.userData.reports;
export const NOTIFICATION_COUNT = (state: AppState): number => countUserReports(state.data.userData.reports);
/**
 * Get the votes that were made by a user for a certain card
 * @param state  state of the store
 * @param cardId ID of the card for which the vote should be fetched
 */
export const USER_VOTE = (state: AppState, cardId: string): Vote =>
  state.data.userData.authenticated ? state.data.userData.votes?.find((vote) => vote.cardId === cardId) : undefined;
/**
 * Returns votes for a certain card
 */
export const CARD_VOTES = (state: AppState, cardId: string): Vote[] =>
  state.data.cardData.votes
    ? state.data.cardData.votes.filter((vote) => vote.cardId === cardId && vote.value === 1)
    : undefined;
/**
 * Returns all votes for the current lecture
 */
export const ALL_VOTES_FOR_LECTURE = (state: AppState): Vote[] => state.data.cardData.votes;

/**
 * Holds the card which should be shown
 */
export const CARD_TO_SHOW_NEXT = (state: AppState): Card => state.carouselState?.newCard;

/**
 * Counts all votes for a certain card
 * @param state state of the app
 * @param cardId id of the card for which the votes should be counted
 */
export const VOTE_COUNT = (state: AppState, cardId: string): number =>
  state.data.cardData.votes
    ? state.data.cardData.votes.filter((vote) => vote.cardId === cardId && vote.value === 1).length
    : undefined;
/**
 * Current tags selected by the user
 * @param state state of the app
 */
export const ACTIVE_TAGS = (state: AppState): string[] => state.carouselState?.tags;
/**
 * Select all tags for the current lecture
 * @param state state of the app
 */
export const ALL_TAGS = (state: AppState): string[] => state.data.cardData?.currLecture?.tagList;
/** select the index of the active card in the array */
export const ACTIVE_INDEX = (state: AppState): number => state.carouselState?.activeIndex;
/**
 * Get the mode of the card form
 * @param state state of the app
 */
export const FORM_MODE = (state: AppState): CardFormMode => state.carouselState?.formMode;

export const HIDE_CARD_SEARCH_RESULTS = (state: AppState) => state.carouselState?.hideSearchResults;

/**
 * Select the current lecture
 * @param state state of the app
 */
export const SELECTED_LECTURE = (state: AppState): Vorlesung => state.data?.cardData?.currLecture;
/**
 * Select the id of the user, if user is logged in
 * @param state state of the app
 */
export const USER_ID = (state: AppState): string => state.data?.userData?.user?._id;
/**
 * select the currently active tab in the cards component view
 * @param state state of the app
 */
export const SELECTED_TAB = (state: AppState): number => state.carouselState?.currTab;
/**
 * select the loadig state. Will be true if at least one ressource is loading
 * @param state state of the app
 */
export const LOADING = (state: AppState): boolean => state.carouselState?.loading > 0;
/**
 * select all lectures
 * @param state state of the app
 */
export const LECTURES = (state: AppState): Vorlesung[] => state.data.lectureData.lectures;
/**
 * Select user information
 * @param state state of the app
 */
export const USER_INFO = (state: AppState): UserData => state.data.userData;
/**
 * select the current user
 * @param state state of the app
 */
export const USER = (state: AppState): User => state.data.userData.user;
/**
 * check if user is logged in
 * @param state state of the app
 */

export const CARD_INDEXES = (state: AppState): number[] => [
  state.carouselState?.startIndex,
  state.carouselState?.endIndex,
  state.carouselState?.activeIndex,
];

export const AUTHORIZED = (state: AppState): boolean => state.data.userData.authenticated;

export const SORT_TYPE = (state: AppState): SortType => state.carouselState?.sortType;
/**
 * select the date at which the filter for the cards have changed
 * @param state state of the app
 */
export const LAST_CARD_CHANGE = (state: AppState): Date => state.carouselState?.cardsChanged;
/**
 * Select the cards that the user has added
 */
export const USER_CARDS = createSelector(USER_INFO, (info) => info.cards);
/**
 * Select the tag options that are still not selected by the user
 */
export const TAG_OPTIONS = createSelector(ALL_TAGS, ACTIVE_TAGS, (all, selected) => selectRemaining(all, selected));

/**
 * s the current filter as well the date at which it was set
 */
export const FILTER_AND_DATE = createSelector(LAST_CARD_CHANGE, ACTIVE_TAGS, (date, tags) => ({ date, tags }));

/**
 * Returns the cards which are displayed in the carousel; filtered and sorted
 */
export const SHOWN_CARDS = createSelector(
  ALL_CARDS,
  ACTIVE_TAGS,
  ALL_VOTES_FOR_LECTURE,
  SORT_TYPE,
  LAST_CARD_CHANGE,
  CARD_INDEXES,
  (cards, tags, votes, type, changes, [start, end]) =>
    _sort(_filter(cards, tags), type, changes, votes)?.cards?.slice(start, end)
);

export const SORTED_CARDS = createSelector(
  ALL_CARDS,
  ALL_VOTES_FOR_LECTURE,
  SORT_TYPE,
  LAST_CARD_CHANGE,
  (cards, votes, type, changes) => _sort(cards, type, changes, votes)?.cards
);

export const SORTED_AND_FILTERED_CARDS = createSelector(
  ALL_CARDS,
  ACTIVE_TAGS,
  ALL_VOTES_FOR_LECTURE,
  SORT_TYPE,
  LAST_CARD_CHANGE,
  (cards, tags, votes, type, changes) => _sort(_filter(cards, tags), type, changes, votes)?.cards
);

// /**
//  * Selects the last cardindex in the carousel
//  */
// export const selectLastCardIndex = createSelector(
//   selectDisplayedCards,
//   (cards) => cards.length - 1
// );

/**
 * Select the card which is currently shown in the carousel
 * @param state state of the app
 */
export const CURRENT_CARD = (state: AppState): Card => state.carouselState?.currentCard;
/**
 * get cards data as one object containing the current lecture, the user id and the cards
 */
export const CARDS_DATA_OBJECT = createSelector(
  ALL_CARDS,
  SELECTED_LECTURE,
  USER_ID,
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

  const res = cards?.filter((card) => {
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
function selectRemaining<T>(all: T[], selected: T[]) {
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
function _sort(cards: Card[], type: SortType, date: Date, votes: Vote[]): { date: Date; cards: Card[] } {
  const result = { cards, date: new Date() };
  if (!cards) {
    return result;
  }
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
        if (!a.tags) return -1;
        if (!b.tags) return -1;
        if (a.tags[0] > b.tags[0]) return 1;
        if (a.tags[0] < b.tags[0]) return -1;
        return -1;
      });
      break;
    case SortType.TAGS_DSC:
      result.cards = [...cards].sort((a, b) => {
        if (!a.tags && !b.tags) return 0;
        if (!a.tags) return -1;
        if (!b.tags) return -1;
        if (a.tags[0] > b.tags[0]) return -1;
        if (a.tags[0] < b.tags[0]) return 1;
        return -1;
      });
      break;
    case SortType.LIKES_ASC:
      result.cards = [...cards].sort((a, b) => countVotesForCard(a, votes) - countVotesForCard(b, votes));
      break;
    case SortType.LIKES_DSC:
      result.cards = [...cards].sort((a, b) => countVotesForCard(b, votes) - countVotesForCard(a, votes));
      break;
    default: // no changes were made so reset to initial date
      result.date = date;
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
  const res = votes.filter((vote) => vote.cardId === card._id && vote.value === 1).length;
  return res;
}

function countUserReports(reports: Reports) {
  if (!reports) return undefined;
  return Object.values(reports).reduce((acc, items) => acc + items.length, 0);
}
