export class Card {
  thema: string;
  content: string;
  abrv: string;
  latex: number;

  _id?: string;
  authorId?: string;
  authorName?: string;
  date?: Date;
  tags?: string[];

  constructor(thema, content, abrv, latex, tags) {
    this.thema = thema;
    this.content = content;
    this.abrv = abrv;
    latex = latex;
    this.tags = tags;
  }
}
