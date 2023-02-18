import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  firstname?: string;
  @Field({ nullable: true })
  lastname?: string;

  @Field({ nullable: false })
  username!: string;

  @Field({ nullable: false })
  email!: string;
}
