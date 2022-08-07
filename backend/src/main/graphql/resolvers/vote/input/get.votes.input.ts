import { Field, InputType } from "type-graphql";

@InputType()
export class GetVotesInput {
  @Field({ nullable: false })
  lectureAbbreviation!: string;

  @Field({ nullable: true })
  userId?: string;
}
