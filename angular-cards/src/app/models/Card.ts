export class Card {
  _id?: string;
  thema: string;
  content: string;
  abrv?: string;
  constructor(thema, content) {
    this.thema = thema;
    this.content = content;
  }
}
