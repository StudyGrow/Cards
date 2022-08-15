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
import { GetCardsInput } from "../../../main/graphql/resolvers/card/input/get.cards.input";
import { GetCards } from "../../../domain/usecases/card/get.cards";

export class GetCardsController<
  T1 extends GetCardsController.Request,
  T2 extends GetCardsController.Response
  > implements Controller<any, T2>
{
  constructor(private readonly getCards: GetCards) { }

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const project = await this.getCards.get(request);

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

export namespace GetCardsController {
  export type Request = {
    data: GetCardsInput;
  };
  export type Response = Card;
}
