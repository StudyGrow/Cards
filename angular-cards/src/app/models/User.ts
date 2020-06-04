export class User {
  username: string;
  email: string;
  _id: string;
  name: string;
  surname: string;
  creationDate?: Date;
  confirmed?: boolean;
  constructor(name: string, email: string) {
    this.username = name;
    this.email = email;
  }
}
