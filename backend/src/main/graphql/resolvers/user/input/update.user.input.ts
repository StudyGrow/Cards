import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateUserInput {

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  darkModeEnabled?: boolean;
}
