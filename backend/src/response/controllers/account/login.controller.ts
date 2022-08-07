import { Authentication } from "../../../domain/usecases/authentication/authentication";
import { User } from "../../../main/docs/models/user.model";
import { LoginInput } from "../../../main/graphql/resolvers/user/input/login.input";
import { RegisterInput } from "../../../main/graphql/resolvers/user/input/register.input";
import { MyCont } from "../../../main/graphql/resolvers/user/resolvers/register.resolver";
import {
  badRequest,
  unauthorized,
  ok,
  serverError,
} from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";

export class LoginController<
  T1 extends LoginController.Request,
  T2 extends User
> implements Controller<any, any>
{
  constructor(
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) {}

  async handle(request: T1): Promise<HttpResponse<User>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const authenticationModel = await this.authentication.auth(request.data);
      if (!authenticationModel) {
        return unauthorized();
      }
      request.context.res.cookie("authToken", authenticationModel.authToken);
      request.context.res.cookie(
        "refreshToken",
        authenticationModel.refreshToken
      );
      return ok<User>(authenticationModel.user);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace LoginController {
  export type Request = {
    data: LoginInput;
    context: MyCont;
  };
}
