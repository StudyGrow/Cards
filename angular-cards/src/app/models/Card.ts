export class Card {
  _id?: string;
  thema: string;
  content: string;
  abrv: string;
  constructor(thema, content, abrv) {
    this.thema = thema;
    this.content = content;
    this.abrv = abrv;
  }
}
