import { Card } from './Card';
import { Report } from './Report';
import { User } from './User';
export class UserInfo {
  constructor(public cards?: Card[], public user?: User, public authenticated?: boolean, public reports?: Report[]) {}
}
