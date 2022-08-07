import { Field, ObjectType } from "type-graphql";
import { prop as Property } from "@typegoose/typegoose";

@ObjectType()
export class Lecture {
  @Field({ nullable: true })
  @Property({ required: false })
  _id?: string;

  @Field({ nullable: true })
  @Property({ required: true })
  name!: string;

  @Field({ nullable: true })
  @Property({ required: true })
  abrv!: string;

  @Field((type) => [String], { nullable: true })
  @Property({ required: false })
  tagList?: string[];

  @Field({ nullable: true })
  @Property({ required: false })
  totalCards?: number;
}
