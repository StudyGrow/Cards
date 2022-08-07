import { Field, InputType } from "type-graphql";

@InputType()
export class GetCardsInput {
  @Field({ nullable: false })
  lectureAbbreviation!: string;
}
