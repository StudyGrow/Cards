import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

/**
 * Input for password reset request
 */
@InputType()
export class RequestAccountPasswordResetInput {

  /**
   * Mail of user who needs a reset password mail
   */
  @Field()
  @IsEmail()
  email!: string;

}
