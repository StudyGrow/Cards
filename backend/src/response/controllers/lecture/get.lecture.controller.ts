import { forbidden, ok, serverError } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Lecture } from "../../../main/docs/models/lecture.model";
import { UserFeedbackError } from "../../errors/user.feedback.error";
import { GetLectures } from "../../../domain/usecases/lecture/get.lectures";
import { GetLectureInput } from "../../../main/graphql/resolvers/lecture/input/get.lecture.input";
import { GetLecture } from "../../../domain/usecases/lecture/get.lecture";

export class GetLectureController<
  T1 extends GetLectureController.Request,
  T2 extends GetLectureController.Response
> implements Controller<any, T2>
{
  constructor(private readonly getLecture: GetLecture) {}

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const project = await this.getLecture.get(request);
      if (!project) {
        return ok<T2>(null as unknown as T2);
      } else {
        return ok<T2>(project as unknown as T2);
      }
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace GetLectureController {
  export type Request = GetLectureInput;
  export type Response = Lecture;
}
