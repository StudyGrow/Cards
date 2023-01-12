import { UpdateUser } from "../../../domain/usecases/account/update.user";
import { User } from "../../../main/docs/models/user.model";
import { UpdateUserInput } from "../../../main/graphql/resolvers/user/input/update.user.input";
import { EmailInUseError } from "../../errors/email.in.use.error";
import {
  unauthorized,
  ok,
  serverError,
  badRequest,
  forbidden,
} from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";

export class UpdateUserController<
  T1 extends UpdateUserController.Request,
  T2 extends User
> implements Controller<any, any>
{
  constructor(
    private readonly updateAccount: UpdateUser,
    private readonly validation: Validation
  ) {}

  async handle(request: T1): Promise<HttpResponse<User>> {
    try {
      const error = this.validation.validate({
        ...request.user,
        ...request.data,
      });
      if (error) {
        return badRequest(error);
      }
      const user = await this.updateAccount.update({
        data: request.data,
        user: { userId: request.user.userId },
      });
      if (!user) {
        return unauthorized();
      } else if (user instanceof EmailInUseError) {
        return forbidden(new EmailInUseError());
      } else {
        return ok<User>(user);
      }
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace UpdateUserController {
  export type Request = {
    data: UpdateUserInput;
    user: {
      userId: string;
    };
  };
}
