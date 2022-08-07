import { Field, ObjectType } from "type-graphql";
import { prop as Property } from "@typegoose/typegoose";

@ObjectType()
export class Vote {
  @Field({ nullable: true })
  readonly _id!: string;

  @Field({ nullable: true })
  @Property({ required: true })
  userId!: string;

  @Field({ nullable: true })
  @Property({ required: false })
  cardId!: string;

  @Field({ nullable: true })
  @Property({ required: true })
  lectureId!: string[];

  @Field({ nullable: true })
  @Property({ required: true })
  value!: number;
}
