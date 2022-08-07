import { getModelForClass } from "@typegoose/typegoose";
import { LogErrorRepository } from "../../../../data/protocols/log/log.error.repository";
import { Error } from "../../../../main/docs/models/error.model";

export class LogMongoRepository implements LogErrorRepository {
  async logError(stack: string): Promise<void> {
    getModelForClass(Error).create({
      error: stack,
      date: new Date(),
    });
  }
}
