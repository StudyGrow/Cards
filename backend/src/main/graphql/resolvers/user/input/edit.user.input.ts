import { Field, InputType } from "type-graphql";

@InputType()
export class EditUserInput {
  @Field({ nullable: false })
  userId!: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
