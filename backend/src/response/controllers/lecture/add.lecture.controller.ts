import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Validation } from "../../protocols/validation";
import { AddLectureInput } from "../../../main/graphql/resolvers/lecture/input/add.lecture.input";
import { Lecture } from "../../../main/docs/models/lecture.model";
import { AddLecture } from "../../../domain/usecases/lecture/add.lecture";
import { UserFeedbackError } from "../../errors/user.feedback.error";

export class AddLectureController<
  T1 extends AddLectureController.Request,
  T2 extends AddLectureController.Response
> implements Controller<any, T2>
{
  constructor(
    private readonly validation: Validation,
    private readonly addLecture: AddLecture
  ) {}

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const error = this.validation.validate(request.data);
      if (error) {
        return badRequest(error);
      }
      const project = await this.addLecture.add(request.data);

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

export namespace AddLectureController {
  export type Request = {
    data: AddLectureInput;
    user: {
      id: string;
    };
  };
  export type Response = Lecture;
}
