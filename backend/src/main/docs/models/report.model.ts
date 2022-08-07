import { Field, ObjectType } from "type-graphql";
import { prop as Property } from "@typegoose/typegoose";

@ObjectType()
export class Report {
  @Field({ nullable: true})
  readonly _id!: string;

  @Field({ nullable: true })
  @Property({ required: true })
  resourceId!: string;

  @Field({ nullable: true })
  @Property({ required: false })
  lectureId?: string;

  @Field({ nullable: true })
  @Property({ required: true })
  resourceType!: string;

  @Field({ nullable: true })
  @Property({ required: true })
  blockedById!: string[];
}
