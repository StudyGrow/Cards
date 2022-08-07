import { Request, Response } from "express";

import {
  UserInputError,
  AuthenticationError,
  ForbiddenError,
  ApolloError,
} from "apollo-server-express";
import { Controller } from "../../response/protocols/controller";
interface MyCont {
  req: Request;
  res: Response;
}
export async function adaptResolver<T1, T2>(
  controller: Controller<T1, T2>,
  args: T1,
  context: MyCont
): Promise<T2> {
  // const request = {
  //   ...(args),
  // };
  const httpResponse = await controller.handle(args);

  switch (httpResponse.statusCode) {
    case 200:
      return httpResponse.body;
    case 204:
      return httpResponse.body;
    case 400:
      throw new UserInputError(String(httpResponse.body));
    case 401:
      throw new AuthenticationError(String(httpResponse.body));
    case 403:
      throw new ForbiddenError(String(httpResponse.body));
    default:
      throw new ApolloError(String(httpResponse.body));
  }
}
