import { GetAccountController } from "../../../../response/controllers/account/get.account.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbGetAccountById } from "../../usecases.factories/account/get.account.by.id.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeGetAccountValidation } from "./get.account.validation.factory";

export function makeGetAccountController<T1, T2>(): Controller<
  GetAccountController.Request,
  T2
> {
  const controller = new GetAccountController(
    makeDbGetAccountById(),
    makeGetAccountValidation()
  );
  return makeLogControllerDecorator(controller);
}
