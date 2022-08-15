import { Request, Response } from "express";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { adaptResolver } from "../../../../adapters/apollo.server.resolver.adapter";
import env from "../../../../config/env";
import { User } from "../../../../docs/models/user.model";
import { makeLoginController } from "../../../../factories/controllers/login.factories/login.controller.factory";
import { makeLogoutController } from "../../../../factories/controllers/login.factories/logout.controller.factory";
import { Authentication } from "../../../directives/authentication.directive";
import { LoginInput } from "../input/login.input";

@InputType()
export class LogoutInput {
  @Field()
  authenticationToken!: string;

  @Field()
  refreshToken!: string;
}

interface MyCont {
  req: Request;
  res: Response;
}

@Resolver((of) => User)
export class LoginResolver {
  @Query(() => User, {
    description: `Login user.
      Returns user with authentication token and refresh token.
      Authentication token is valid for ${env.authentication.jwtAuthTokenValidityDuration} and refresh token is valid for  ${env.authentication.jwtRefreshTokenValidityDuration}.
      If refresh token is still valid authentication token will be generated automatically
      on every request which needs authentication and returned.
      If refresh token is expired, user must login again, in this case
      an error with message "Refresh Token invalid" or "Refresh Token expired" will be returned.`,
  })
  async login(
    @Arg("data") data: LoginInput,
    @Ctx() ctx: MyCont
  ): Promise<User> {
    return adaptResolver(
      makeLoginController(),
      { data: data, context: ctx },
      ctx
    );
  }

  // @Mutation(() => LogoutResponse, {
  //   description:
  //     `Logout user. Invalidates their token. To use this mutation the authentication and refresh token must be provided in the cookies.`,
  // })
  // @UseMiddleware(Authentication)
  // async logout(
  //   @Ctx() ctx: MyCont
  // ): Promise<User> {
  //   return adaptResolver(
  //     makeLogoutController(),
  //     {
  //       data: {
  //         authenticationToken: ctx.req.cookies["authToken"],
  //         refreshToken: ctx.req.cookies["refreshToken"]
  //       }
  //     },
  //     ctx
  //   );
  // }
}
