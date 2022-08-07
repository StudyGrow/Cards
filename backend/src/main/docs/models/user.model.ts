import { Field, ObjectType } from "type-graphql";
import { prop as Property } from "@typegoose/typegoose";

@ObjectType()
export class User {
  @Field({ nullable: false })
  _id?: undefined | string;

  @Field()
  @Property({ required: true, unique: true })
  username!: string;

  @Field()
  @Property({ required: true, unique: true })
  email!: string;

  @Property({ required: true })
  password!: string;

  @Field({ nullable: true })
  @Property({ required: false })
  creationDate?: number;

  @Field({ nullable: true })
  @Property({ required: false })
  name?: string;

  @Field({ nullable: true })
  @Property({ required: false })
  surname?: string;

  @Field({ nullable: false })
  @Property({ required: true })
  status!: string;

  @Field({ nullable: false })
  @Property({ required: false })
  confirmed?: boolean;
}
