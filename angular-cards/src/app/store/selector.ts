import { createSelector } from '@ngrx/store';

import { SortType } from '../models/SortType';
import { Vote } from '../models/Vote';

import { Card } from '../models/Card';
import { Vorlesung } from '../models/Vorlesung';
import { AppState } from '../models/state';

const maxCards = 50; // maximum amount of cards which should be displayed in carousel
export const selectAllCards = (state: AppState) => state.data?.cardData?.cards;

/**
 * Get all cards for a certain lecture from store
 * @param state state of the store
 * @deprecated Use CardsSorted instead
 */
export const AllCards = (state: AppState) => state.data?.cardData?.cards;

/**
 * Get the votes that were made by a user for a certain card
 * @param state  state of the store
 * @param cardId ID of the card for which the vote should be fetched
 */
export const UserVote = (
  state: AppState,
  cardId: string //
) =>
  state.data.userData.authenticated ? state.data.userData.votes?.find((vote) => vote.cardId === cardId) : undefined;
/**
 * Returns votes for a certain card
 */
export const VotesForCard = (state: AppState, cardId: string) =>
  state.data.cardData.votes
    ? state.data.cardData.votes.filter((vote) => vote.cardId === cardId && vote.value === 1)
    : undefined;
/**
 * Returns all votes for the current lecture
 */
export const AllVotes = (state: AppState) => state.data.cardData.votes;

/**
 * Counts all votes for a certain card
 * @param state state of the app
 * @param cardId id of the card for which the votes should be counted
 */
export const VoteCount = (state: AppState, cardId: string) =>
  state.data.cardData.votes
    ? state.data.cardData.votes.filter((vote) => vote.cardId == cardId && vote.value == 1).length
    : undefined;
/**
 * Current tags selected by the user
 * @param state state of the app
 */
export const ActiveTags = (state: AppState) => state.mode.tags;
/**
 * Select all tags for the current lecture
 * @param state state of the app
 */
export const AllTags = (state: AppState) => state.data.cardData?.currLecture?.tagList;
/**select the index of the active card in the array */
export const ActiveIndex = (state: AppState) => state.mode.activeIndex;
/**
 * Get the mode of the card form
 * @param state state of the app
 */
export const FormMode = (state: AppState) => state.mode.formMode;
/**
 * Select the current lecture
 * @param state state of the app
 */
export const CurrentLecture = (state: AppState) => state.data?.cardData?.currLecture;
/**
 * Select the id of the user, if user is logged in
 * @param state state of the app
 */
export const UserId = (state: AppState) => state.data?.userData?.user?._id;
/**
 * select the currently active tab in the cards component view
 * @param state state of the app
 */
export const CurrentTab = (state: AppState) => state.mode.currTab;
/**
 * select the loadig state. Will be true if at least one ressource is loading
 * @param state state of the app
 */
export const LoadingState = (state: AppState) => state.mode.loading > 0;
/**
 * select all lectures
 * @param state state of the app
 */
export const Lectures = (state: AppState) => state.data.lectureData.lectures;
/**
 * Select user information
 * @param state state of the app
 */
export const userInfo = (state: AppState) => state.data.userData;
/**
 * select the current user
 * @param state state of the app
 */
export const user = (state: AppState) => state.data.userData.user;
/**
 * check if user is logged in
 * @param state state of the app
 */

const CardIndices = (state: AppState) => [state.mode.startIndex, state.mode.endIndex, state.mode.activeIndex];

export const authenticated = (state: AppState) => state.data.userData.authenticated;

const sortType = (state: AppState) => state.mode.sortType;
/**
 * select the date at which the filter for the cards have changed
 * @param state state of the app
 */
export const lastCardChange = (state: AppState) => state.mode.cardsChanged;
/**
 * Select the cards that the user has added
 */
export const UserCards = createSelector(userInfo, (info) => info.cards);
/**
 * Select the tag options that are still not selected by the user
 */
export const TagOptions = createSelector(AllTags, ActiveTags, (all, selected) => selectRemaining(all, selected));

/**
 * s the current filter as well the date at which it was set
 */
export const FilterObject = createSelector(lastCardChange, ActiveTags, (date, tags) => ({ date, tags }));

/**
 * Returns the cards which are displayed in the carousel; filtered and sorted
 */
export const DisplayedCards = createSelector(
  AllCards,
  ActiveTags,
  AllVotes,
  sortType,
  lastCardChange,
  CardIndices,
  (cards, tags, votes, type, changes, [start, end, curr]) =>
    _sort(_filter(cards, tags), type, changes, votes)?.cards?.slice(start, end)
);

export const CardsSorted = createSelector(
  AllCards,
  AllVotes,
  sortType,
  lastCardChange,
  (cards, votes, type, changes) => _sort(cards, type, changes, votes)?.cards
);

export const CardsSortedAndFiltered = createSelector(
  AllCards,
  ActiveTags,
  AllVotes,
  sortType,
  lastCardChange,
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
export const CurrentCard = (state: AppState) => state.mode.currentCard;
/**
 * get cards data as one object containing the current lecture, the user id and the cards
 */
export const getCardsData = createSelector(
  AllCards,
  CurrentLecture,
  UserId,
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

  let res = cards?.filter((card) => {
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
function selectRemaining(all: any[], selected: any[]) {
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
  let result = { cards: cards, date: new Date() };
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
      result.cards = [...cards].sort((a, b) => countVotesForCard(a, votes) - countVotesForCard(b, votes));
      break;
    case SortType.LIKES_DSC:
      result.cards = [...cards].sort((a, b) => countVotesForCard(b, votes) - countVotesForCard(a, votes));
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
  let res = votes.filter((vote) => vote.cardId === card._id && vote.value === 1).length;
  return res;
}
