import { IsEmail, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field()
  username!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  password!: string;

  @Field({ nullable: true })
  @IsString()
  lastName?: string;

  @Field({ nullable: true })
  @IsString()
  firstName?: string;
}
