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
import { Card } from "../../../main/docs/models/card.model";
import { UpdateCardInput } from "../../../main/graphql/resolvers/card/input/update.card.input";
import { UpdateCard } from "../../../domain/usecases/card/update.card";

export class UpdateCardController<
  T1 extends UpdateCardController.Request,
  T2 extends UpdateCardController.Response
> implements Controller<any, T2>
{
  constructor(
    private readonly validation: Validation,
    private readonly updateCard: UpdateCard
  ) {}

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const project = await this.updateCard.update(request);

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

export namespace UpdateCardController {
  export type Request = {
    data: UpdateCardInput;
    user: {
      id: string;
    };
  };
  export type Response = Card;
}
