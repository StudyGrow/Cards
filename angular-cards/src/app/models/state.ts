import { Card } from "./Card";
import { User } from "./User";
import { UserInfo } from "./UserInfo";
import { Vorlesung } from "./Vorlesung";

export interface AppState {
  data: Data;
  mode: Mode;
}

export interface CardsData {
  cards: Card[];
  currLecture: Vorlesung;
  lastUpdated: Date;
}

export interface UserData {
  cards: Card[];
  user: User;
  authenticated: boolean;
  lastUpdated: Date;
}

export interface LecturesData {
  lectures: Vorlesung[];
  lastUpdated: Date;
}

export interface Data {
  cardData: CardsData;
  userData: UserData;
  lectureData: LecturesData;
}

export interface Mode {
  activeIndex: number;
  formMode: formMode;
  typingMode: boolean;
  hideSearchResults: boolean;
  loading: number;
  tags: string[];
  filterChanged: Date;
  currTab: number;
  theme: string;
}
export enum formMode {
  ADD = "add",
  EDIT = "edit",
}
