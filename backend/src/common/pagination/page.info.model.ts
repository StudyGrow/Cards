import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {
  @Field(() => String, { nullable: true })
  endCursor?: string;

  @Field(() => Boolean, { nullable: true })
  hasNextPage: boolean;

  @Field(() => Boolean, { nullable: true })
  hasPreviousPage: boolean;

  @Field(() => String, { nullable: true })
  startCursor?: string;
}
