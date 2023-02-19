import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CastVoteInput {
  @Field({ nullable: false })
  cardId!: string;

  @Field({ nullable: false })
  value!: number;
}
