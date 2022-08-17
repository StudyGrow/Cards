import { JwtAdapter } from "../../../infrastructure/cryptography/jwt.adapter";
import { AuthMiddleware } from "../../../response/middlewares/authentication.middleware";
import { Middleware } from "../../../response/protocols/middleware";
import env from "../../config/env";

const jwtAdapter = new JwtAdapter(env.authentication.secret);
export const makeAuthMiddleware = (): Middleware<
  AuthMiddleware.Request,
  AuthMiddleware.Response
> => {
  return new AuthMiddleware(jwtAdapter);
};
