import { Card } from './Card';
import { Reports } from './Report';

import { SortType } from './SortType';
import { User } from './User';
import { Vorlesung } from './Vorlesung';
import { Vote } from './Vote';

export interface AppState {
  data: Data;
  carousel?: CarouselState;
}

export interface Data {
  cards: CardsData;
  user: UserData;
  lectures: LecturesData;
}
export interface CardsData {
  votes: Vote[]; // votes made by the community
  cards: Card[]; // cards added by the community
  currLecture: Vorlesung; // the current Lecture
  lastUpdated: Date; // last update on the cards
}

export interface UserData {
  votes: Vote[]; // votes the user makes
  cards: Card[]; // cards added by the user
  user: User; // current user if authenticated
  authenticated: boolean; // user is logged in or not
  lastUpdated: Date; // last update of userdata
  reports: Reports;
}

export interface LecturesData {
  lectures: Vorlesung[]; // lectures added by the community
  lastUpdated: Date; // last update to the lectures
}

export interface CarouselState {
  activeIndex: number;
  currentCard: Card; // Card that should be displayed in the carousel
  formMode: CardFormMode;
  typingMode: boolean;
  hideSearchResults: boolean;
  loading: number;
  tags: string[];
  cardsChanged: Date;
  currTab: number;
  sortType: SortType;
  startIndex: number;
  endIndex: number;
  newCard: Card;
}
export enum CardFormMode {
  ADD = 'add',
  EDIT = 'edit',
}
