import { Vorlesung } from './Vorlesung';
import { Vote } from './Vote';

export class Card {
  constructor(
    public thema?: string,
    public content?: string,
    public tags?: string[],
    public lectureAbreviation?: string,
    public latex?: number,
    public positionIndex?: number,
    public _id?: string,
    public authorId?: string,
    public authorName?: string,
    public date?: Date
  ) {}
}

export interface CardsData {
  cards: Card[];
  lecture: Vorlesung;
  uid: string;
  votes: Vote[];
}
