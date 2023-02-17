import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
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
  @Field()
  email: string;
  @Field()
  firstname?: string;
  @Field()
  lastname?: string;
  // role: Role;
  @HideField()
  password: string;
  @Field()
  status: string;
  @Field()
  confirmed: boolean;
}
