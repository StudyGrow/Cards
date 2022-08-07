import { ResetAccountPasswordController } from "../../../../response/controllers/account/reset.account.password.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeSendPasswordResetMail } from "../../usecases.factories/mailservice/send.password.reset.mail.factory";
import { makeResetAccountPasswordValidation } from "./reset.account.password.validation.factory";

export function makeResetAccountPasswordController<T1, T2>(): Controller<
  ResetAccountPasswordController.Request,
  T2
> {
  const validator = makeResetAccountPasswordValidation();
  const mailService = makeSendPasswordResetMail();
  const controller = new ResetAccountPasswordController(
    mailService,
    validator,
  );

  return makeLogControllerDecorator(controller);
}
