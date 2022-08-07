import { Field, ObjectType, registerEnumType } from "type-graphql";
import { modelOptions, prop as Property, Severity } from "@typegoose/typegoose";

export enum RoleEnum {
  admin = "admin",
  user = "user",
}

registerEnumType(RoleEnum, {
  name: "RoleEnum",
  description: "RoleEnum",
});

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

  @Field((type) => RoleEnum, { nullable: false })
  @Property({ required: true })
  role!: RoleEnum;

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
