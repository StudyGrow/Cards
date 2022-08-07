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
import { CastVoteInput } from "../../../main/graphql/resolvers/vote/input/cast.vote.input";
import { Vote } from "../../../main/docs/models/vote.model";
import { CastVote } from "../../../domain/usecases/vote/cast.vote";

export class CastVoteController<
  T1 extends CastVoteController.Request,
  T2 extends CastVoteController.Response
> implements Controller<any, T2>
{
  constructor(
    private readonly validation: Validation,
    private readonly castVote: CastVote
  ) {}

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const project = await this.castVote.vote(request);

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

export namespace CastVoteController {
  export type Request = {
    data: CastVoteInput;
    user: {
      id: string;
    };
  };
  export type Response = Vote;
}
