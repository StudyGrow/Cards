export class Card {
  id?: string;
  thema: string;
  content: string;

  constructor(thema, content) {
    this.thema = thema;
    this.content = content;
  }
}
