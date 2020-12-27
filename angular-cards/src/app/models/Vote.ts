export class Vote {
  constructor(
    public cardId?: string,
    public userId?: string,
    public lectureId?: string,
    public value?: 0 | 1,
    public _id?: string
  ) {}
}
