import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAccountInput {
  @Field()
  username!: string;

  @Field({ nullable: true })
  @IsString()
  lastName?: string;

  @Field({ nullable: true })
  @IsString()
  firstName?: string;
}
