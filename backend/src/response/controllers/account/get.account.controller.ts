import { GetAccountById } from "../../../domain/usecases/account/get.account.by.id";
import { User } from "../../../main/docs/models/user.model";
import { MyCont } from "../../../main/graphql/resolvers/user/resolvers/user.resolver";
import {
  unauthenticated,
  unauthorized,
  ok,
  serverError,
} from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";
export class GetAccountController<
  T1 extends GetAccountController.Request,
  T2 extends User
> implements Controller<any, any>
{
  constructor(
    private readonly getAccount: GetAccountById,
    private readonly validation: Validation
  ) {}

  async handle(request: T1): Promise<HttpResponse<User>> {
    try {
      const error = this.validation.validate(request.context.req.user);
      if (error) {
        return unauthenticated();
      }
      const user = await this.getAccount.get({
        id: request.context.req.user._id,
      });
      if (!user) {
        return unauthorized();
      }
      return ok<User>(user);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace GetAccountController {
  export type Request = {
    context: MyCont;
  };
}
