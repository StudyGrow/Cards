import { JwtAdapter } from "../../../../infrastructure/cryptography/jwt.adapter";
import { LogoutController } from "../../../../response/controllers/account/logout.controller";
import { Controller } from "../../../../response/protocols/controller";
import env from "../../../config/env";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";

export function makeLogoutController<T1, T2>(): Controller<
  LogoutController.Request,
  T2
> {
  const jwtAdapter = new JwtAdapter(env.authentication.secret);

  const controller = new LogoutController(jwtAdapter);
  return makeLogControllerDecorator(controller);
}
