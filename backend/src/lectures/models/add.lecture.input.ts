import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddLectureInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  abrv!: string;

  @Field(() => [String], { nullable: true })
  tagList?: string[];
}
