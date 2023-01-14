import { Field, ObjectType } from '@nestjs/graphql';
import PaginatedResponse from '../common/pagination/pagination';
import { Card } from 'src/cards/card.entity';

@ObjectType()
export class Lecture {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name!: string;

  @Field({ nullable: true })
  abrv!: string;

  @Field(() => [String], { nullable: true })
  tagList?: string[];

  @Field({ nullable: true })
  totalCards?: number;

  @Field(() => [Card], { nullable: true })
  cards?: Card[];

  // @Field(() => [Vote], { nullable: true })
  // votes?: Vote[];
}

@ObjectType()
export class LectureEdges extends PaginatedResponse(Lecture) {}
