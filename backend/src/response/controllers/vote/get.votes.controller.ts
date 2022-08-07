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
import { Vote } from "../../../main/docs/models/vote.model";
import { GetVotesInput } from "../../../main/graphql/resolvers/vote/input/get.votes.input";
import { GetVotes } from "../../../domain/usecases/vote/get.votes";

export class GetVotesController<
  T1 extends GetVotesController.Request,
  T2 extends GetVotesController.Response
> implements Controller<any, T2>
{
  constructor(
    private readonly validation: Validation,
    private readonly getVotes: GetVotes
  ) {}

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const project = await this.getVotes.get(request);

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

export namespace GetVotesController {
  export type Request = {
    data: GetVotesInput;
    user: {
      id: string;
    };
  };
  export type Response = Vote;
}
