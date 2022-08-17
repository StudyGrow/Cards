import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { Request, Response } from "express";
import { makeAuthMiddleware } from "../../factories/middlewares/authentication.middleware.factory";
import { AuthenticationError } from "apollo-server-express";
import { UnauthenticatedError } from "../../../response/errors/unauthenticated.error";

interface MyCont {
  req: Request;
  res: Response;
}
export class Authentication implements MiddlewareInterface<MyCont> {
  async use({ context, info }: ResolverData<MyCont>, next: NextFn) {
    let headers = context.req.headers;
    if (headers) {
      if (headers.authorization) {
        const httpResponse = await makeAuthMiddleware().handle({
          firebaseToken: headers.authorization.split(" ")[1],
        });
        if (httpResponse.statusCode === 200) {
          context.req.user = { _id: httpResponse.body.user.uid };
          return next();
        } else {
          throw new UnauthenticatedError();
        }
      } else {
        throw new UnauthenticatedError();
      }
    } else {
      throw new AuthenticationError("No cookies present");
    }
  }
}
