import RedisClientInstance from "../../../infrastructure/db/redis/redis.client";
import { badRequest, ok, serverError } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";

export class LogoutController<T1 extends LogoutController.Request> implements Controller<any, any> {
  async handle(request: T1): Promise<HttpResponse<{}>> {
    const redis = RedisClientInstance.getInstance();

    try {
      if (!request.data.authenticationToken) {
        return badRequest(new Error("Auth token must be set in request cookies"));
      }

      if (!request.data.refreshToken) {
        return badRequest(new Error("Refresh token must be set in request cookies"));
      }

      const authenticationTokenId = JSON.parse(String(await redis.get(request.data.authenticationToken))).id;
      const refreshTokenId = JSON.parse(String(await redis.get(request.data.refreshToken))).id;

      if (!authenticationTokenId) {
        return badRequest(new Error("Authentication token could not be resolved"));
      }

      if (!refreshTokenId) {
        return badRequest(new Error("Refresh token could not be resolved"));
      }

      if (authenticationTokenId !== refreshTokenId) {
        return badRequest(new Error("IDs associated to tokens do not match"));
      }

      await redis.del(request.data.authenticationToken);
      await redis.del(request.data.refreshToken);

      return ok({ id: authenticationTokenId });
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
    }
  };
  export type Response = {
    id: string;
  }
}
