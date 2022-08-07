import { TokenType } from "../../data/protocols/cryptography/token.type";
import { JwtAdapter } from "../../infrastructure/cryptography/jwt.adapter";
import { RoleEnum } from "../../main/docs/models/user.model";
import { ok, unauthorized } from "../helpers/http.helper";
import { HttpResponse } from "../protocols/http.response";
import { Middleware } from "../protocols/middleware";


export class AuthMiddleware<
  T1 extends AuthMiddleware.Request,
  T2 extends AuthMiddleware.Response
  > implements Middleware<AuthMiddleware.Request, AuthMiddleware.Response> {
  constructor(
    private readonly TokenChecker: JwtAdapter,
    private readonly role?: string
  ) { }

  async handle(data: AuthMiddleware.Request): Promise<HttpResponse<AuthMiddleware.Response>> {
    const user = {
      id: "",
      role:"" as RoleEnum,
      authToken: data.authToken,
      refreshToken: data.refreshToken
    }

    try{
      if(!user.authToken) throw Error("no auth token provided")

      // we have an auth token -> check if it is valid. If it is not valid the TokenChecker will throw an error. if it expired the frontend will have to send a refresh token
      const userData = await this.TokenChecker.checkToken(user.authToken, TokenType.AuthToken);
      user.id = userData.id;
      user.role = userData.role;      
    } catch {
      // auth token could not be verified -> try refresh token
      if(!user.refreshToken) throw unauthorized() // we don't have a refresh token -> throw unauthorized 'cause there's neither a valid auth nor a refresh token

      // we have a refresh token -> check if it is valid -> if not an error is thrown in the check
      const userData = await this.TokenChecker.checkToken(user.refreshToken, TokenType.RefreshToken);
      user.id = userData.id;
      user.role = userData.role;

      // no error was thrown -> the token is valid -> get a new refresh token and a new auth token
      user.authToken = await this.TokenChecker.generateToken(user.id, user.role, TokenType.AuthToken);
      user.refreshToken = await this.TokenChecker.generateToken(user.id, user.role, TokenType.RefreshToken);
    }  

    return ok({ user })
  }
}

export namespace AuthMiddleware {
  export type Response = {
    statusCode: string, user: {
      id: string,
      role: RoleEnum,
      authToken: string,
      refreshToken: string
    }
  };
  export type Request = { authToken?: string, refreshToken?: string };
}
