import { JwtAdapter } from "../../infrastructure/cryptography/jwt.adapter";
import { ok, unauthorized } from "../helpers/http.helper";
import { HttpResponse } from "../protocols/http.response";
import { Middleware } from "../protocols/middleware";

export class AuthMiddleware<
  T1 extends AuthMiddleware.Request,
  T2 extends AuthMiddleware.Response
> implements Middleware<AuthMiddleware.Request, AuthMiddleware.Response>
{
  constructor(private readonly TokenChecker: JwtAdapter) {}

  async handle(
    data: AuthMiddleware.Request
  ): Promise<HttpResponse<AuthMiddleware.Response>> {
    const user = {
      uid: "",
      firebaseToken: data.firebaseToken,
      email: "",
    };
    try {
      if (!user.firebaseToken) throw Error("No firebase token");

      const userData = await this.TokenChecker.checkToken(user.firebaseToken);
      if (!userData.email) throw unauthorized;

      user.uid = userData.uid;
      user.email = userData.email;
    } catch (err) {
      console.error(err);
      return unauthorized();
    }

    return ok({ user });
  }
}

export namespace AuthMiddleware {
  export type Response = {
    statusCode: string;
    user: {
      uid: string;
      email: string;
    };
  };
  export type Request = { firebaseToken?: string };
}
