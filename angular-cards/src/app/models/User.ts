export class User {
  constructor(
    public username?: string,
    public email?: string,
    public name?: string,
    public surname?: string,
    public _id?: string,
    public creationDate?: Date,
    public confirmed?: boolean,
    public status?: string
  ) {}
}
