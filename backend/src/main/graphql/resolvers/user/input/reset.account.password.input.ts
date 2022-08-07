import { IsEmail, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

/**
 * Input for password reset request
 */
@InputType()
export class ResetAccountPasswordInput {

  @Field({description: "Mail of user who want to reset a password"})
  @IsEmail()
  email!: string;

  @Field({description: "Reset token to verify ownership or access to registered email"})
  @IsString()
  code!: string;   
    
  @Field({description: "New password. Must satisfy password policy"})
  @IsString()
  password!: string;

}
