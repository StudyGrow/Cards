import { RequestAccountPasswordResetInput } from "../../../main/graphql/resolvers/user/input/request.account.password.reset.input";
import { badRequest, ok, serverError } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Request, Response } from "express";
import { Validation } from "../../protocols/validation";
import { SendPasswordResetRequestMail } from "../../../data/protocols/mail.service/send.password.reset.request.mail";

export interface MyCont {
  req: Request;
  res: Response;
}

export class RequestAccountPasswordResetController<
  T1 extends RequestAccountPasswordResetController.Request,
  T2 extends RequestAccountPasswordResetController.Response
  > implements Controller<any, any>
{
  constructor(
    private readonly sendPasswordResetMail: SendPasswordResetRequestMail,
    private readonly validation: Validation
  ) { }

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
        return badRequest(new Error("email field is required"));
      }
      //send reset mail
      const isSentSuccessfully = await this.sendPasswordResetMail.send(
        request.data
      );

      return ok<T2>(isSentSuccessfully as T2);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace RequestAccountPasswordResetController {
  export type Request = {
    data: RequestAccountPasswordResetInput;
  };
  export type Response = boolean;
}
