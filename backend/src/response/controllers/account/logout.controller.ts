import { JwtAdapter } from "../../../infrastructure/cryptography/jwt.adapter";
import { ok, serverError } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";

export class LogoutController<T1 extends LogoutController.Request>
  implements Controller<any, any>
{
  constructor(private readonly jwtAdapter: JwtAdapter) {}

  async handle(request: T1): Promise<HttpResponse<{}>> {
    try {
      return ok(true);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace LogoutController {
  export type Request = {
    data: {
      authenticationToken: string;
      refreshToken: string;
    };
  };
  export type Response = {
    id: string;
  };
}
