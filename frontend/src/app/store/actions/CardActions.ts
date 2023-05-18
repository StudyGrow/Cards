import { Action, createAction, props, union } from '@ngrx/store';

import { Card, CardsData } from '../../models/Card';
import { Vorlesung } from '../../models/Vorlesung';

import { Vote } from 'src/app/models/Vote';

// Types of Actions
enum ActionTypes {
  FETCH_CARDS = '[Cards] Fetch from server, also loads current lecture and user.id',
  LOAD_SUCCESS = '[Cards] Load success',
  LOAD_FAILURE = '[Cards] Load failure',
  ADD_CARD = '[Card] Add new card to the collection',
  ADD_CARD_SUCCESS = '[Card] Add card success',
  UPDATE_CARD = '[Card] update card in the  collection and on server',
  UPDATE_CARD_SUCCESS = '[Card] update card success successfully updated on server, now update in store',
  CLEAR_CARD_DATA = '[Cards] clear data about cards',
  CHANGE_VOTE = '[Vote] Change the vote on a card',
  CHANGE_VOTE_SUCCESS = '[Vote] Change vote successfull on server',
  FETCH_USER_VOTES = '[Votes] Fetch votes made by the current user from server',
  FETCH_VOTES_SUCCESS = '[Votes] Fetch votes from server success',
  REPORT_CARD = '[Card] Report card',
  REPORT_CARD_SUCCESS = '[Card] Report card successful',
}

export const Failure = ActionTypes.LOAD_FAILURE;
// Concrete Actions for each type

export const fetchCards = createAction(ActionTypes.FETCH_CARDS);
export const storeCardData = createAction(ActionTypes.LOAD_SUCCESS, props<{ data: CardsData }>());
export const clearCardData = createAction(ActionTypes.CLEAR_CARD_DATA);

export const addCard = createAction(ActionTypes.ADD_CARD, props<{ card: Card }>());
export const storeCard = createAction(ActionTypes.ADD_CARD_SUCCESS, props<{ card: Card }>());
export const updateCard = createAction(ActionTypes.UPDATE_CARD, props<{ card: Card }>());
export const updateChangedCard = createAction(ActionTypes.UPDATE_CARD_SUCCESS, props<{ card: Card }>());

export const reportCard = createAction(ActionTypes.REPORT_CARD);
export const updateReportedCard = createAction(ActionTypes.REPORT_CARD_SUCCESS, props<{ card: Card }>());

export const changeVote = createAction(ActionTypes.CHANGE_VOTE, props<{ vote: Vote }>());
export const updateVoteChange = createAction(ActionTypes.CHANGE_VOTE_SUCCESS, props<{ vote: Vote }>());
export const fetchVotes = createAction(ActionTypes.FETCH_USER_VOTES);
export const storeVotes = createAction(ActionTypes.FETCH_VOTES_SUCCESS, props<{ votes: Vote[] }>());

export const httpFailure = createAction(ActionTypes.LOAD_FAILURE, props<{ reason: string | Error }>());
