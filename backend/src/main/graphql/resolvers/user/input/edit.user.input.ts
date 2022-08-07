import { Field, InputType } from "type-graphql";
import { RoleEnum } from "../../../../docs/models/user.model";

@InputType()
export class EditUserInput {

  @Field({ nullable: false })
  userId!: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field((type) => RoleEnum, { nullable: true })
  role?: RoleEnum;
}
