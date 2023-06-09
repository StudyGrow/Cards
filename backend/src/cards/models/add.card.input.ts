import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddCardInput {
  @Field(() => String, { nullable: false })
  lectureAbbreviation!: string;

  @Field(() => String, { nullable: false })
  thema!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => [String], { nullable: false })
  tags!: string[];

  @Field(() => Number, { nullable: false })
  latex!: number;
}
