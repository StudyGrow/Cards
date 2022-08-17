import { Request, Response } from "express";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { adaptResolver } from "../../../../adapters/apollo.server.resolver.adapter";
import { User } from "../../../../docs/models/user.model";
import { makeGetAccountController } from "../../../../factories/controllers/login.factories/get.account.controller.factory";
import { makeCreateAccountController } from "../../../../factories/controllers/register.factories/create.account.controller.factory";
import { makeRemoveUserController } from "../../../../factories/controllers/user.factories/remove.user.controller.factory";
import { makeUpdateUserController } from "../../../../factories/controllers/user.factories/update.user.controller.factory";
import { Authentication } from "../../../directives/authentication.directive";
import { CreateAccountInput } from "../input/create.account.input";
import { UpdateUserInput } from "../input/update.user.input";

export interface MyCont {
  req: Request;
  res: Response;
}

@Resolver()
export class UserResolver {
  @Mutation(() => User, {})
  @UseMiddleware(Authentication)
  async createAccount(
    @Arg("data") data: CreateAccountInput,
    @Ctx() ctx: MyCont
  ): Promise<User> {
    return adaptResolver(
      makeCreateAccountController(),
      {
        data: data,
        user: {
          uid: ctx.req.user._id,
        },
      },
      ctx
    );
  }

  @Query(() => User)
  @UseMiddleware(Authentication)
  async getUser(@Ctx() ctx: MyCont): Promise<User> {
    return adaptResolver(makeGetAccountController(), { context: ctx }, ctx);
  }

  @Mutation(() => User, {
    description: `Update user based on logged in user`,
  })
  @UseMiddleware(Authentication)
  async updateUser(
    @Arg("data") data: UpdateUserInput,
    @Ctx() ctx: MyCont
  ): Promise<User> {
    return adaptResolver(
      makeUpdateUserController(),
      {
        data: data,
        user: {
          userId: ctx.req.user._id,
        },
      },
      ctx
    );
  }

  @Mutation(() => Boolean, {
    description: "Remove user based on logged in user",
  })
  @UseMiddleware(Authentication)
  async removeUser(@Ctx() ctx: MyCont): Promise<boolean> {
    return adaptResolver(
      makeRemoveUserController(),
      {
        user: {
          userId: ctx.req.user._id,
        },
      },
      ctx
    );
  }

  // @Mutation(() => Boolean, {
  //   description: `Logout user. Invalidates their token. To use this mutation the authentication and refresh token must be provided in the cookies.`,
  //   nullable: true,
  // })
  // @UseMiddleware(Authentication)
  // async logout(@Ctx() ctx: MyCont): Promise<Boolean> {
  //   return adaptResolver(
  //     makeLogoutController(),
  //     {
  //       data: {
  //         authenticationToken: ctx.req.cookies["authToken"],
  //         refreshToken: ctx.req.cookies["refreshToken"],
  //       },
  //     },
  //     ctx
  //   );
  // }
}
