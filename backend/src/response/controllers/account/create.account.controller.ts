import { AddAccount } from "../../../domain/usecases/account/add.account";
import { User } from "../../../main/docs/models/user.model";
import { CreateAccountInput } from "../../../main/graphql/resolvers/user/input/create.account.input";
import { EmailInUseError } from "../../errors/email.in.use.error";
import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";

export class CreateAccountController<
  T1 extends CreateAccountController.Request,
  T2 extends User
> implements Controller<any, T2>
{
  constructor(
    private readonly validation: Validation,
    private readonly addAccount: AddAccount
  ) {}

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const account = await this.addAccount.add({
        data: request.data,
        user: request.user,
      });
      if (!account) {
        return forbidden(new EmailInUseError());
      }
      return ok<T2>(account as unknown as T2);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace CreateAccountController {
  export type Request = {
    data: CreateAccountInput;
    user: {
      uid: string;
    };
  };
}
