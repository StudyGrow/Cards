import { GetUsersController } from "../../../../response/controllers/account/get.users.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeGetUsers } from "../../usecases.factories/account/get.user.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";


export function makeGetUsersController<T1, T2>(): Controller<
  GetUsersController.Request,
  T2
> {
  const controller = new GetUsersController(
    makeGetUsers()
  );
  return makeLogControllerDecorator(controller);
}
