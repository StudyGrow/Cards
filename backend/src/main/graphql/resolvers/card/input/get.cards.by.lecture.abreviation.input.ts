import { Field, InputType } from "type-graphql";

@InputType()
export class GetCardsByLectureAbbreviationInput {
  @Field({ nullable: false })
  lectureAbbreviation!: string;
}
