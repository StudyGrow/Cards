import { SendPasswordResetMail } from "../../../data/protocols/mail.service/send.password.reset.mail";
import { ResetAccountPasswordInput } from "../../../main/graphql/resolvers/user/input/reset.account.password.input";
import { NotFoundError } from "../../errors/not.found.error";
import { UnauthorizedError } from "../../errors/unauthorized.error";
import {
  badRequest,
  ok,
  serverError,
  unauthorized,
} from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";
import { Request, Response } from "express";
import { Hasher } from "../../../data/protocols/cryptography/hasher";

export interface MyCont {
  req: Request;
  res: Response;
}

export class ResetAccountPasswordController<
  T1 extends ResetAccountPasswordController.Request,
  T2 extends ResetAccountPasswordController.Response
> implements Controller<any, any>
{
  constructor(
    private readonly sendPasswordResetMail: SendPasswordResetMail,
    private readonly validation: Validation
  ) {}

  /**
   * Sends reset mail and saves reset token with timestamp
   *
   * @param request contains mail of user that wants to reset password
   * @returns boolean indicating success of operation
   */
  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      //validate request format
      if (this.validation.validate(request.data)) {
        return badRequest(new Error("Validation failed"));
      }

      //send a mail to the user to inform him about the password reset
      const passwordResetOrError = await this.sendPasswordResetMail.send({
        email: request.data.email,
        code: request.data.code,
        password: request.data.password,
      });
      if (passwordResetOrError instanceof NotFoundError) {
        return badRequest(passwordResetOrError);
      } else if (passwordResetOrError instanceof UnauthorizedError) {
        return unauthorized(passwordResetOrError);
      } else if (passwordResetOrError === true) {
        return ok<T2>(true as T2);
      } else {
        return serverError(new Error("An unexpected error occured"));
      }
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace ResetAccountPasswordController {
  export type Request = {
    data: ResetAccountPasswordInput;
  };
  export type Response = boolean;
}
