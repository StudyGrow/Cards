import { Card } from './Card';
import { User } from './User';
import { Lecture } from './Vorlesung';

export interface Reports {
  'flash-cards': Card[];
  lectures: Lecture[];
  users: User[];
}
