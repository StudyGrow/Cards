import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Request, Response } from "express";
import { adaptResolver } from "../../../../adapters/apollo.server.resolver.adapter";
import { User } from "../../../../docs/models/user.model";
import { makeRegisterController } from "../../../../factories/controllers/register.factories/register.controller.factory";
import { RegisterInput } from "../input/register.input";
import { RequestAccountPasswordResetInput } from "../input/request.account.password.reset.input";
import { ResetAccountPasswordInput } from "../input/reset.account.password.input";
import { makeResetAccountPasswordController } from "../../../../factories/controllers/register.factories/reset.account.password.controller.factory";
import { makeRequestAccountPasswordResetController } from "../../../../factories/controllers/register.factories/request.account.password.reset.controller.factory";
import { KeyGenerationMechanism, Throttler } from "../../../directives/throttler.directive";

export interface MyCont {
  req: Request;
  res: Response;
}
@Resolver()
export class RegisterResolver {
  @Mutation(() => User, {
    description:
      `Password should pass this regex validation test:  /^[\w!@#%&/(){}[\]=?+*^~\-.:,;]{1,32}$/`
  })
  async register(
    @Arg("data") data: RegisterInput,
    @Ctx() ctx: MyCont
  ): Promise<User> {
    return adaptResolver(
      makeRegisterController(),
      { data: data, context: ctx },
      ctx
    );
  }

  @Mutation(() => Boolean, { description: "Sends password reset mail. Returns true if mail was sent." })
  async requestAccountPasswordReset(
    @Arg("data") data: RequestAccountPasswordResetInput,
    @Ctx() ctx: MyCont
  ): Promise<boolean> {
    return adaptResolver(
      makeRequestAccountPasswordResetController(),
      {data: data},
      ctx
    );
  }

  @Mutation(() => Boolean, { description: "Sends password reset mail. Returns true if mail was sent." })
  @UseMiddleware(Throttler(10, 3600000, "resetAccountPassword", KeyGenerationMechanism.RESET)) // 10 requests within 24 hours to same mail
  async resetAccountPassword(
    @Arg("data") data: ResetAccountPasswordInput,
    @Ctx() ctx: MyCont
  ): Promise<boolean> {
    return adaptResolver(
      makeResetAccountPasswordController(),
      {data: data},
      ctx
    );
  }
}