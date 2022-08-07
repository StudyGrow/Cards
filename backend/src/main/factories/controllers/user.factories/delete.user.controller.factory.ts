import { DeleteUserController } from "../../../../response/controllers/account/delete.user.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeRemoveUser } from "../../usecases.factories/account/remove.user.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeRemoveUserValidation } from "./remove.user.validation.factory";


export function makeDeleteUserController<T1, T2>(): Controller<
  DeleteUserController.Request,
  T2
> {
  const controller = new DeleteUserController(
    makeRemoveUser(),
    makeRemoveUserValidation()
  );
  return makeLogControllerDecorator(controller);
}
