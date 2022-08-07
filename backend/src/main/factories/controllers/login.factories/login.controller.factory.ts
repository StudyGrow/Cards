import { LoginController } from "../../../../response/controllers/account/login.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbAuthentication } from "../../usecases.factories/authentication/authentication.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeLoginValidation } from "./login.validation.factory";

export function makeLoginController<T1, T2>(): Controller<
  LoginController.Request,
  T2
> {
  const controller = new LoginController(
    makeDbAuthentication(),
    makeLoginValidation()
  );
  return makeLogControllerDecorator(controller);
}
