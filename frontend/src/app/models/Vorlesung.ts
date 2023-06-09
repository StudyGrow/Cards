export class Lecture {
  constructor(
    public name?: string,
    public abrv?: string,
    public tagList?: string[],
    public totalCards?: number,
    public _id?: string
  ) {
    this.tagList = tagList || [];
    this.totalCards = totalCards || 0;
  }
}
