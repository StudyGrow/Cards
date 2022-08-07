import { Field, InputType } from "type-graphql";

@InputType()
export class CastVoteInput {
  @Field({ nullable: false })
  cardId!: string;

  @Field({ nullable: false })
  lectureId!: string;

  @Field({ nullable: false })
  value!: number;
}
