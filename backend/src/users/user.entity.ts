import { ObjectType, registerEnumType, HideField } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/base.entity';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseEntity {
  id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  // role: Role;
  @HideField()
  password: string;
  status: string;
  confirmed: boolean;
}
