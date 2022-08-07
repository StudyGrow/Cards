import { RegisterController } from "../../../../response/controllers/account/register.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbAddAccount } from "../../usecases.factories/account/add.account.factory";
import { makeDbAuthentication } from "../../usecases.factories/authentication/authentication.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeRegisterValidation } from "./register.validation.factory";

export function makeRegisterController<T1, T2>(): Controller<
  RegisterController.Request,
  T2
> {
  const controller = new RegisterController(
    makeDbAuthentication(),
    makeRegisterValidation(),
    makeDbAddAccount()
  );
  return makeLogControllerDecorator(controller);
}
