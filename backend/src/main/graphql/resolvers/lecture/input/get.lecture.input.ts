import { Field, InputType } from "type-graphql";

@InputType()
export class GetLectureInput {
  @Field({ nullable: false })
  abrv!: string;
}
