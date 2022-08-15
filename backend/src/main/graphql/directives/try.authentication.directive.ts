import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { Request, Response } from "express";
import { makeAuthMiddleware } from "../../factories/middlewares/authentication.middleware.factory";


interface MyCont {
  req: Request;
  res: Response;
}

/**
 *  Used to allow getting the users id from the token
 * or to continue without authentication.
 * This is needed for example for public projects.
 *
 * */
export class TryAuthentication implements MiddlewareInterface<MyCont> {
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
          context.req.user = { _id: "null" };
          return next();
        }
      } else {
        context.req.user = { _id: "null" };
        return next();
      }
    } else {
      context.req.user = { _id: "null" };
      return next();
    }
  }
}
