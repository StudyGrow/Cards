export class Card {
  thema: string;
  content: string;
  abrv: string;
  latex: number;

  _id?: string;
  authorId?: string;
  authorName?: string;
  date?: Date;

  constructor(thema, content, abrv, latex) {
    this.thema = thema;
    this.content = content;
    this.abrv = abrv;
    latex = latex;
  }
}
