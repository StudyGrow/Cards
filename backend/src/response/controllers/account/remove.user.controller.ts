import { RemoveUser } from "../../../domain/usecases/account/remove.user";
import { UpdateUser } from "../../../domain/usecases/account/update.user";
import { User } from "../../../main/docs/models/user.model";
import { UpdateUserInput } from "../../../main/graphql/resolvers/user/input/update.user.input";
import { unauthenticated, unauthorized, ok, serverError, badRequest } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";


export class RemoveUserController<
  T1 extends RemoveUserController.Request,
  T2 extends User
  > implements Controller<any, any>
{
  constructor(
    private readonly removeUser: RemoveUser,
    private readonly validation: Validation
  ) { }

  async handle(request: T1): Promise<HttpResponse<User>> {
    try {
      const error = this.validation.validate({ ...request.user });
      if (error) {
        return badRequest(error);
      }
      const user = await this.removeUser.remove({ user: { userId: request.user.userId } });
      if (!user) {
        return unauthorized();
      }
      return ok(user);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace RemoveUserController {
  export type Request = {
    user: {
      userId: string;
    };
  };
}
