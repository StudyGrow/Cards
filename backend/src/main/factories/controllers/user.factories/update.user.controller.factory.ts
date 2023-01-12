import { UpdateUserController } from "../../../../response/controllers/account/update.user.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbUpdateUser } from "../../usecases.factories/account/update.user.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeUpdateUserValidation } from "./update.user.validation.factory";


export function makeUpdateUserController<T1, T2>(): Controller<
  UpdateUserController.Request,
  T2
> {
  const controller = new UpdateUserController(
    makeDbUpdateUser(),
    makeUpdateUserValidation()
  );
  return makeLogControllerDecorator(controller);
}
