import { cardsFeatureReducerKey } from '../store/reducers/cards.feature.reducer';
import { dataReducerKey } from '../store/reducers/data.reducer';
import { Card } from './Card';
import { Reports } from './Report';

import { SortType } from './SortType';
import { User } from './User';
import { Lecture } from './Vorlesung';
import { Vote } from './Vote';

/**
 * Overall state of the application
 */
export interface AppState {
  [dataReducerKey]: Data;
  [cardsFeatureReducerKey]: CardsFeatureState;
}

/**
 * Data state of the application
 * contains cards, user and lectures
 */
export interface Data {
  cards: CardsData;
  user: UserData;
  lectures: LecturesData;
}

/**
 * Cards state of the application
 */
export interface CardsData {
  votes: Vote[]; // votes made by the community
  cards: Card[]; // cards added by the community
  currLecture: Lecture; // the current Lecture
  lastUpdated: Date; // last update on the cards
}

/**
 * User state of the application
 */
export interface UserData {
  votes: Vote[]; // votes the user makes
  cards: Card[]; // cards added by the user
  user: User; // current user if authenticated
  authenticated: boolean; // user is logged in or not
  lastUpdated: Date; // last update of userdata
  reports: Reports;
}

/**
 * Lectures state of the application
 */
export interface LecturesData {
  lectures: Lecture[]; // lectures added by the community
  lastUpdated: Date; // last update to the lectures
}

/**
 * state of the cards feature module
 */
export interface CardsFeatureState {
  carousel: CarouselState;
  formMode: CardFormMode;
  typingInInputField: boolean;
  hideQuestionSearchResults: boolean;
  loading: number;
  currTab: number;
}

/**
 * state of the carousel of cards
 */
export interface CarouselState {
  activeIndex: number;
  currentCard: Card; // Card that should be displayed in the carousel
  tags: string[];
  cardsChanged: Date;
  sortType: SortType;
  startIndex: number;
  endIndex: number;
  newCard: Card;
}

export enum CardFormMode {
  ADD = 'add',
  EDIT = 'edit',
}
