import { RemoveUserController } from "../../../../response/controllers/account/remove.user.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeRemoveUser } from "../../usecases.factories/account/remove.user.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeRemoveUserValidation } from "./remove.user.validation.factory";


export function makeRemoveUserController<T1, T2>(): Controller<
  RemoveUserController.Request,
  T2
> {
  const controller = new RemoveUserController(
    makeRemoveUser(),
    makeRemoveUserValidation()
  );
  return makeLogControllerDecorator(controller);
}
