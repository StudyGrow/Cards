import { Field, ObjectType } from "type-graphql";
import { modelOptions, prop as Property, Severity } from "@typegoose/typegoose";

@modelOptions({
  options: {
    allowMixed: Severity.ALLOW,
    customName: "Card",
  },
})
@ObjectType()
export class Card {
  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  @Property({ required: true })
  lectureAbreviation!: string;

  @Field({ nullable: true })
  @Property({ required: true })
  thema!: string;

  @Field({ nullable: true })
  @Property({ required: true })
  content!: string;

  @Field((type) => [String], { nullable: true })
  @Property({ required: false })
  tags?: string[];

  @Field({ nullable: true })
  @Property({ required: false })
  authorId?: string;

  @Field({ nullable: true })
  @Property({ required: false })
  authorName?: string;

  @Field({ nullable: true })
  @Property({ required: false })
  date?: Date;

  @Field({ nullable: true })
  @Property({ required: false })
  latex?: number;

  @Field({ nullable: true })
  @Property({ required: false })
  rating?: number;
}
