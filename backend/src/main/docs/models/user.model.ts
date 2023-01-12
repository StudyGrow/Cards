import { Field, ObjectType, registerEnumType } from "type-graphql";
import { modelOptions, prop as Property, Severity } from "@typegoose/typegoose";

@modelOptions({
  options: {
    allowMixed: Severity.ALLOW,
    customName: "User",
  },
})
@ObjectType()
export class User {
  @Field({ nullable: false })
  _id?: string;

  @Field({ nullable: false })
  @Property({ required: true })
  uid!: string;

  @Field()
  @Property({ required: true, unique: true })
  username!: string;

  @Field({ nullable: true })
  @Property({ required: false })
  creationDate?: Date;

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
  confirmed!: boolean;
}
