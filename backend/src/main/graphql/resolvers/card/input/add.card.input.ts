import { Field, InputType } from "type-graphql";

@InputType()
export class AddCardInput {
  @Field({ nullable: false })
  lectureAbreviation!: string;

  @Field({ nullable: false })
  thema!: string;

  @Field({ nullable: false })
  content!: string;

  @Field((type) => [String], { nullable: false })
  tags!: string[];

  @Field({ nullable: false })
  latex!: number;
}
