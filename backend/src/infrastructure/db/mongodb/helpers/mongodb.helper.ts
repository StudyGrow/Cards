import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import {
  AnyParamConstructor,
  BeAnObject,
} from "@typegoose/typegoose/lib/types";
import mongoose, { Mongoose } from "mongoose";

export const MongoHelper = {
  client: null as unknown as Mongoose,
  uri: null as unknown as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await mongoose.connect(uri, {});
  },

  async disconnect(): Promise<void> {
    await this.client.disconnect();
  },

  async getCollection<T extends AnyParamConstructor<any>>(
    classType: T
  ): Promise<ReturnModelType<T, BeAnObject>> {
    if (!this.client?.connection.readyState) {
      await this.connect(this.uri);
    }
    return getModelForClass(classType);
  },

  getMongoObjectIdAsString(): string {
    return new mongoose.Types.ObjectId().toHexString();
  },
};
