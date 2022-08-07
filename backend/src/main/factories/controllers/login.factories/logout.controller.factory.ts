import { LogoutController } from "../../../../response/controllers/account/logout.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";

export function makeLogoutController<T1, T2>(): Controller<
  LogoutController.Request,
  T2
> {
  const controller = new LogoutController();
  return makeLogControllerDecorator(controller);
}
