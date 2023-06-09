import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCardInput {
  @Field({ nullable: false })
  id!: string;

  @Field({ nullable: true })
  thema!: string;

  @Field({ nullable: true })
  content!: string;

  @Field((type) => [String], { nullable: true })
  tags!: string[];

  @Field({ nullable: true })
  latex!: number;
}
