export class Card {
  thema: string;
  content: string;
  abrv: string;
  latex: number;

  positionIndex?: number;
  _id?: string;
  authorId?: string;
  authorName?: string;
  date?: Date;
  tags?: string[];
  vote?: number;
  totalVotes?: number;

  constructor(thema, content, abrv, latex, tags) {
    this.thema = thema;
    this.content = content;
    this.abrv = abrv;
    latex = latex;
    this.tags = tags;
  }
}
