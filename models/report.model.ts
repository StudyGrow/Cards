import { prop as Property } from "@typegoose/typegoose";

export class Report {
  readonly _id!: string;

  @Property({ required: true })
  resourceId!: string;

  @Property({ required: false })
  lectureId?: string;

  @Property({ required: true })
  resourceType!: string;

  @Property({ required: true })
  blockedById!: string[];
}
