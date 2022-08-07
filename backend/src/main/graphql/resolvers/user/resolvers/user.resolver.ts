import { Request, Response } from "express";
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { adaptResolver } from "../../../../adapters/apollo.server.resolver.adapter";
import { User } from "../../../../docs/models/user.model";
import { makeGetAccountController } from "../../../../factories/controllers/login.factories/get.account.controller.factory";
import { makeDeleteUserController } from "../../../../factories/controllers/user.factories/delete.user.controller.factory";
import { makeEditUserController } from "../../../../factories/controllers/user.factories/edit.user.controller.factory";
import { makeGetUsersController } from "../../../../factories/controllers/user.factories/get.users.controller.factory";
import { makeRemoveUserController } from "../../../../factories/controllers/user.factories/remove.user.controller.factory";
import { makeUpdateUserController } from "../../../../factories/controllers/user.factories/update.user.controller.factory";
import { Admin } from "../../../directives/admin.directive";
import { Authentication } from "../../../directives/authentication.directive";
import { DeleteUserInput } from "../input/delete.user.input";
import { EditUserInput } from "../input/edit.user.input";
import { UpdateUserInput } from "../input/update.user.input";


interface MyCont {
  req: Request;
  res: Response;
}

@Resolver()
export class UserResolver {
  @Query(() => User)
  @UseMiddleware(Authentication)
  async getUser(
    @Ctx() ctx: MyCont
  ): Promise<User> {
    return adaptResolver(
      makeGetAccountController(),
      { context: ctx },
      ctx
    );
  }

  @Mutation(() => User, { description: "ADMIN ONLY: Admin only can edit user by providing userId" })
  @UseMiddleware(Admin)
  async editUser(
    @Arg("data") data: EditUserInput,
    @Ctx() ctx: MyCont
  ): Promise<User> {
    return adaptResolver(
      makeEditUserController(),
      {
        data: data,
        context: ctx
      },
      ctx
    );
  }

  @Mutation(() => User, {
    description:
      `Update user based on logged in user, Password should pass this regex validation test:  /^[\w!@#%&/(){}[\]=?+*^~\-.:,;]{1,32}$/`
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

  @Mutation(() => Boolean, { description: "ADMIN ONLY: Remove user by admin by providing userId" })
  @UseMiddleware(Admin)
  async deleteUser(
    @Arg("data") data: DeleteUserInput,
    @Ctx() ctx: MyCont
  ): Promise<boolean> {
    return adaptResolver(
      makeDeleteUserController(),
      {
        data: data
      },
      ctx
    );
  }

  @Mutation(() => Boolean, { description: "Remove user based on logged in user" })
  @UseMiddleware(Authentication)
  async removeUser(
    @Ctx() ctx: MyCont
  ): Promise<boolean> {
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

  @Query(() => [User])
  @UseMiddleware(Admin)
  async getUsers(
    @Ctx() ctx: MyCont
  ): Promise<User[]> {
    return adaptResolver(
      makeGetUsersController(),
      null,
      ctx
    );
  }
}
