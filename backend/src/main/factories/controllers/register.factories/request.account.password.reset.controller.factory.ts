import { RequestAccountPasswordResetController } from "../../../../response/controllers/account/request.account.password.reset.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeSendPasswordResetRequestMail } from "../../usecases.factories/mailservice/send.password.reset.request.mail.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeRequestAccountPasswordResetValidation } from "./request.account.password.reset.validation.factory";

export function makeRequestAccountPasswordResetController<T1, T2>(): Controller<
  RequestAccountPasswordResetController.Request,
  T2
> {
  const mailService = makeSendPasswordResetRequestMail();
  const validator = makeRequestAccountPasswordResetValidation();

  const controller = new RequestAccountPasswordResetController(
    mailService,
    validator,
  );

  return makeLogControllerDecorator(controller);
}
