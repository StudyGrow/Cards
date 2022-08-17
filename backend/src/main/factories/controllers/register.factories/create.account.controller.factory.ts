import { CreateAccountController } from "../../../../response/controllers/account/create.account.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbAddAccount } from "../../usecases.factories/account/add.account.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeRegisterValidation } from "./register.validation.factory";

export function makeCreateAccountController<T1, T2>(): Controller<
  CreateAccountController.Request,
  T2
> {
  const controller = new CreateAccountController(
    makeRegisterValidation(),
    makeDbAddAccount()
  );
  return makeLogControllerDecorator(controller);
}
