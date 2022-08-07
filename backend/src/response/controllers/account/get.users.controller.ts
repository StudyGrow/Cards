import { GetUsers } from "../../../domain/usecases/account/get.users";
import { User } from "../../../main/docs/models/user.model";
import { unauthorized, ok, serverError } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";


export class GetUsersController<
  T1 extends GetUsersController.Request,
  T2 extends GetUsersController.Response
  > implements Controller<any, any>
{
  constructor(
    private readonly getUsers: GetUsers
  ) { }

  async handle(request: T1): Promise<HttpResponse<User>> {
    try {
      const users = await this.getUsers.getUsers();
      if (!users) {
        return unauthorized();
      }
      return ok(users);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace GetUsersController {
  export type Request = null
  export type Response = User[];
}
