import { EditUser } from "../../../domain/usecases/account/edit.user";
import { GetAccountById } from "../../../domain/usecases/account/get.account.by.id";
import { User } from "../../../main/docs/models/user.model";
import { EditUserInput } from "../../../main/graphql/resolvers/user/input/edit.user.input";
import { MyCont } from "../../../main/graphql/resolvers/user/resolvers/register.resolver";
import { unauthenticated, unauthorized, ok, serverError, badRequest } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";


export class EditUserController<
  T1 extends EditUserController.Request,
  T2 extends User
  > implements Controller<any, any>
{
  constructor(
    private readonly editAccount: EditUser,
    private readonly validation: Validation
  ) { }

  async handle(request: T1): Promise<HttpResponse<User>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const user = await this.editAccount.edit(request.data);
      if (!user) {
        return unauthorized();
      }
      return ok<User>(user);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace EditUserController {
  export type Request = {
    data: EditUserInput;
    context: MyCont;
  };
}
