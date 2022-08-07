import { Field, ObjectType } from "type-graphql";
import { modelOptions, prop as Property, Severity } from "@typegoose/typegoose";
import { Card } from "./card.model";
import { Vote } from "./vote.model";

@modelOptions({
  options: {
    allowMixed: Severity.ALLOW,
    customName: "Lecture",
  },
})
@ObjectType()
export class Lecture {
  @Field({ nullable: true })
  readonly _id?: string;

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

  @Field((type) => [Card], { nullable: true })
  cards?: Card[];

  @Field((type) => [Vote], { nullable: true })
  votes?: Vote[];
}
