import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteUserInput {

  @Field({ nullable: false })
  userId!: string;

}
