import { RemoveUser } from "../../../domain/usecases/account/remove.user";
import { User } from "../../../main/docs/models/user.model";
import { DeleteUserInput } from "../../../main/graphql/resolvers/user/input/delete.user.input";
import { unauthorized, ok, serverError, badRequest } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";


export class DeleteUserController<
  T1 extends DeleteUserController.Request,
  T2 extends User
  > implements Controller<any, any>
{
  constructor(
    private readonly removeUser: RemoveUser,
    private readonly validation: Validation
  ) { }

  async handle(request: T1): Promise<HttpResponse<User>> {
    try {
      const error = this.validation.validate({ ...request.data });
      if (error) {
        return badRequest(error);
      }
      const user = await this.removeUser.remove({ user: { userId: request.data.userId } });
      if (!user) {
        return unauthorized();
      }
      return ok(user);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace DeleteUserController {
  export type Request = { data: DeleteUserInput }
}
