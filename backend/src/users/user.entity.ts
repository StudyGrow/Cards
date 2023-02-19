import { ObjectType, registerEnumType, Field } from '@nestjs/graphql';
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
  @Field({ nullable: true })
  firstname?: string;
  @Field({ nullable: true })
  lastname?: string;
  // role: Role;
  @Field()
  status: string;
  @Field()
  confirmed: boolean;
}
