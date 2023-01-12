import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LogoutResponse {
  @Field({ nullable: true, description: "the id of the logged out user" })
  _id?: string;
}
