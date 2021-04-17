import { Card } from './Card';
import { SortType } from './SortType';
import { User } from './User';
import { UserInfo } from './UserInfo';
import { Vorlesung } from './Vorlesung';
import { Vote } from './Vote';

export interface AppState {
  data: Data;
  mode: Mode;
}

export interface Data {
  cardData: CardsData;
  userData: UserData;
  lectureData: LecturesData;
}
export interface CardsData {
  votes: Vote[]; // votes made by the community
  cards: Card[]; //cards added by the community
  currLecture: Vorlesung; // the current Lecture
  lastUpdated: Date; //last update on the cards
}

export interface UserData {
  votes: Vote[]; //votes the user makes
  cards: Card[]; //cards added by the user
  user: User; //current user if authenticated
  authenticated: boolean; //user is logged in or not
  lastUpdated: Date; //last update of userdata
}

export interface LecturesData {
  lectures: Vorlesung[]; //lectures added by the community
  lastUpdated: Date; //last update to the lectures
}

export interface Mode {
  activeIndex: number;
  currentCard: Card; //Card that should be displayed in the carousel
  formMode: formMode;
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
export enum formMode {
  ADD = 'add',
  EDIT = 'edit',
}
