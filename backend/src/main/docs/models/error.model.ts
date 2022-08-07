import { modelOptions, prop as Property, Severity } from "@typegoose/typegoose";

export class Error {
  @Property({ required: true })
  error!: string;

  @Property({ required: true })
  date?: Date;
}
