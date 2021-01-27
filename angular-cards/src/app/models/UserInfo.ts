import { Card } from './Card';
import { User } from './User';
export class UserInfo {
  constructor(
    public cards?: Card[],
    public user?: User,
    public authenticated?: boolean
  ) {}
}
