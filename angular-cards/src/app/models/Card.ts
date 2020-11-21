export class Card {
  constructor(
    public thema?: string,
    public content?: string,
    public tags?: string[],
    public abrv?: string,
    public latex?: number,
    public positionIndex?: number,
    public _id?: string,
    public authorId?: string,
    public authorName?: string,
    public date?: Date
  ) {}
}
