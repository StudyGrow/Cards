import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { Request, Response } from "express";
import { makeAuthMiddleware } from "../../factories/middlewares/authentication.middleware.factory";
import { AuthenticationError } from "apollo-server-express";
import { UnauthenticatedError } from "../../../response/errors/unauthenticated.error";
import { UnauthorizedError } from "../../../response/errors/unauthorized.error";


interface MyCont {
  req: Request;
  res: Response;
}
export class Authentication implements MiddlewareInterface<MyCont> {
  async use({ context, info }: ResolverData<MyCont>, next: NextFn) {
    let cookies = context.req.cookies;
    if (cookies) {
      if (cookies["authToken"] || cookies['refreshToken']) {
        const httpResponse = await makeAuthMiddleware().handle(
          { authToken: cookies['authToken'], refreshToken: cookies['refreshToken'] },
        );
        if (httpResponse.statusCode === 200) {
          context.req.user = { _id: httpResponse.body.user.id };

          if (httpResponse.body.user.authToken) {
            context.res.cookie("authToken", httpResponse.body.user.authToken);
          }

          if (httpResponse.body.user.refreshToken) {
            context.res.cookie("refreshToken", httpResponse.body.user.refreshToken);
          }
          return next();
        } else {
          throw new UnauthorizedError({});
        }
      } else {
        throw new UnauthenticatedError();
      }
    } else {
      throw new AuthenticationError("No cookies present");
    }
  }
}
