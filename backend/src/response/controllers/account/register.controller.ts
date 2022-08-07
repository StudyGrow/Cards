import { AddAccount } from "../../../domain/usecases/account/add.account";
import { Authentication } from "../../../domain/usecases/authentication/authentication";
import { User } from "../../../main/docs/models/user.model";
import { RegisterInput } from "../../../main/graphql/resolvers/user/input/register.input";
import { MyCont } from "../../../main/graphql/resolvers/user/resolvers/register.resolver";
import { EmailInUseError } from "../../errors/email.in.use.error";
import { badRequest, forbidden, unauthorized, ok, serverError } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";

export class RegisterController<
  T1 extends RegisterController.Request,
  T2 extends User
  > implements Controller<any, T2>
{
  constructor(
    private readonly authentication: Authentication,
    private readonly validation: Validation,
    private readonly addAccount: AddAccount
  ) { }

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const account = await this.addAccount.add(request.data);
      if (!account) {
        return forbidden(new EmailInUseError());
      }
      const authenticationModel = await this.authentication.auth(request.data);
      if (!authenticationModel) {
        return unauthorized();
      }
      request.context.res.cookie("authToken", authenticationModel.authToken);
      request.context.res.cookie("refreshToken", authenticationModel.refreshToken);
      return ok<T2>(account as unknown as T2);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace RegisterController {
  export type Request = {
    data: RegisterInput;
    context: MyCont;
  };
}
