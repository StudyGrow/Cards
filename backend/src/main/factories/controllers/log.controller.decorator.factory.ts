import { LogMongoRepository } from "../../../infrastructure/db/mongodb/log/log.mongo.repository";
import { Controller } from "../../../response/protocols/controller";
import { LogControllerDecorator } from "../decorators/log.controller.decorator";

export const makeLogControllerDecorator = (
  controller: Controller<any, any>
): Controller<any, any> => {
  const logMongoRepository = new LogMongoRepository();
  return new LogControllerDecorator(controller, logMongoRepository);
};
