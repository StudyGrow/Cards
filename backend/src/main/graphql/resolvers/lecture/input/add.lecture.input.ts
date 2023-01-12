import { Field, InputType } from "type-graphql";

@InputType()
export class AddLectureInput {
  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  abrv!: string;

  @Field((type) => [String], { nullable: true })
  tagList?: string[];
}
