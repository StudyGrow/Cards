export class User {
  username: string;
  email: string;
  _id: string;
  name: string;
  surname: string;
  constructor(name: string, email: string) {
    this.username = name;
    this.email = email;
  }
}
