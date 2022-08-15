import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";
import { UserFeedbackError } from "../../errors/user.feedback.error";
import { AddCardInput } from "../../../main/graphql/resolvers/card/input/add.card.input";
import { Card } from "../../../main/docs/models/card.model";
import { AddCard } from "../../../domain/usecases/card/add.card";

export class AddCardController<
  T1 extends AddCardController.Request,
  T2 extends AddCardController.Response
  > implements Controller<any, T2>
{
  constructor(
    private readonly validation: Validation,
    private readonly addCard: AddCard
  ) { }

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const project = await this.addCard.add(request);

      if (!project) {
        return forbidden(
          new UserFeedbackError({ message: "Some Error Occurred" })
        );
      } else {
        return ok<T2>(project as unknown as T2);
      }
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace AddCardController {
  export type Request = {
    data: AddCardInput;
    user: {
      id: string;
    };
  };
  export type Response = Card;
}
