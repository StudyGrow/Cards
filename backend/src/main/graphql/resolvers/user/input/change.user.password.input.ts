import { Field, InputType } from "type-graphql";

@InputType()
export class ChangeUserPasswordInput {

  @Field({ nullable: false })
  password!: string;
}
