import { GetAccountById } from "../../../domain/usecases/account/get.account.by.id";
import { GetServicesOnlineStatus } from "../../../domain/usecases/helpers/get.services.online.status";
import { User } from "../../../main/docs/models/user.model";
import { GetServicesOnlineStatusOutput } from "../../../main/graphql/resolvers/helpers/output/get.services.online.status.output";
import { MyCont } from "../../../main/graphql/resolvers/user/resolvers/register.resolver";
import { unauthenticated, unauthorized, ok, serverError } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";


export class GetServicesOnlineStatusController<
  T1 extends GetServicesOnlineStatusController.Request,
  T2 extends GetServicesOnlineStatusController.Response
  > implements Controller<any, any>
{
  constructor(
    private readonly getStatus: GetServicesOnlineStatus
  ) { }

  async handle(request: T1): Promise<HttpResponse<User>> {
    try {
      const onlineStatus = await this.getStatus.getOnlineStatus();
      if (onlineStatus === null) {
        return serverError(new Error("Server error"));
      }
      return ok<GetServicesOnlineStatusController.Response>(onlineStatus);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace GetServicesOnlineStatusController {
  export type Request = {
    context: MyCont;
  };
  export type Response = GetServicesOnlineStatusOutput;
}
