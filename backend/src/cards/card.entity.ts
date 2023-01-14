import { Field, ObjectType } from '@nestjs/graphql';
import PaginatedResponse from '../common/pagination/pagination';
import { Lecture } from 'src/lectures/lecture.entity';
import { User } from 'src/users/user.entity';

@ObjectType()
export class Card {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: false })
  thema!: string;

  @Field({ nullable: false })
  content!: string;

  @Field((type) => [String], { nullable: true })
  tags?: string[];

  @Field({ nullable: false })
  author: User;

  @Field({ nullable: true })
  authorName?: string;

  @Field({ nullable: true })
  date?: Date;

  @Field({ nullable: true })
  latex?: number;

  @Field({ nullable: true })
  rating?: number;

  @Field(() => Lecture, { nullable: false })
  lecture: Lecture;
}

@ObjectType()
export class CardEdges extends PaginatedResponse(Card) {}
