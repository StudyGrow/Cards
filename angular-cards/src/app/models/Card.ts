export class Card {
  _id?: string;
  thema: string;
  author?: string;
  content: string;
  abrv: string;
  latex: number;
  constructor(thema, content, abrv, latex) {
    this.thema = thema;
    this.content = content;
    this.abrv = abrv;
    latex = latex
  }
}
