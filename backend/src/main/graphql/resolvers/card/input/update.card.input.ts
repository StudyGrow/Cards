import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateCardInput {
  @Field({ nullable: false })
  _id!: string;

  @Field({ nullable: true })
  thema!: string;

  @Field({ nullable: true })
  content!: string;

  @Field((type) => [String], { nullable: true })
  tags!: string[];

  @Field({ nullable: true })
  latex!: number;
}
