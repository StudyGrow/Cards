export class User {
  username: string;
  email: string;
  _id: string;
  name: string;
  surname: string;
  creationDate?: Date;
  constructor(name: string, email: string) {
    this.username = name;
    this.email = email;
  }
}
