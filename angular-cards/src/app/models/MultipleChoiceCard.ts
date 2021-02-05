import { Vorlesung } from './Vorlesung';
import { Vote } from './Vote';

export class MultipleChoiceCard {
  constructor(
    public _id?: string,
    public cardDeckID?: string,
    public question?: string,
    public answers?: string[],
    public latex?: number,
    public positionIndex?: number,
    public authorId?: string,
    public authorName?: string,
    public date?: Date
  ) {}
}

export interface MultipleChoiceCardsData {
  multipleChoiceCards: MultipleChoiceCard[];
  lecture: Vorlesung;
}
