import { Card } from "./Card";
import { User } from "./User";
import { UserInfo } from "./UserInfo";
import { Vorlesung } from "./Vorlesung";

export interface AppState {
  formMode: string;
  typingMode: boolean;
  hideSearchResults: boolean;
  showDrawer: boolean;
  loading: number;
  currTab: number;
  theme: string;
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
