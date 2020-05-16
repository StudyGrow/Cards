export class User {
  username: string;
  email: string;
  _id: string;
  constructor(name: string, email: string) {
    this.username = name;
    this.email = email;
  }
}
