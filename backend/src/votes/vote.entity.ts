import { Field, ObjectType } from '@nestjs/graphql';
import PaginatedResponse from '../common/pagination/pagination';
import { Lecture } from 'src/lectures/lecture.entity';
import { User } from 'src/users/user.entity';
import { Card } from 'src/cards/card.entity';

@ObjectType()
export class Vote {
  @Field({ nullable: true })
  id: string;

  @Field(() => User, { nullable: false })
  user!: User;

  @Field(() => Card, { nullable: false })
  card!: Card;

  @Field(() => Lecture, { nullable: false })
  lecture!: Lecture;

  @Field({ nullable: false })
  value!: number;
}

@ObjectType()
export class VoteEdges extends PaginatedResponse(Vote) {}
