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
      if (cookies["authToken"] || cookies["refreshToken"]) {
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
