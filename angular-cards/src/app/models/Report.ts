import { Card } from './Card';
import { User } from './User';
import { Vorlesung } from './Vorlesung';

export interface Reports {
  'flash-cards': Card[];
  lectures: Vorlesung[];
  users: User[];
}
