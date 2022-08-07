import { EditUserController } from "../../../../response/controllers/account/edit.user.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbEditUser } from "../../usecases.factories/account/edit.user.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeEditUserValidation } from "./edit.user.validation.factory";


export function makeEditUserController<T1, T2>(): Controller<
  EditUserController.Request,
  T2
> {
  const controller = new EditUserController(
    makeDbEditUser(),
    makeEditUserValidation()
  );
  return makeLogControllerDecorator(controller);
}
