import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
  // @Field()
  // @IsEmail()
  // email!: string;

  @Field()
  username!: string;

  @Field()
  password!: string;
}
