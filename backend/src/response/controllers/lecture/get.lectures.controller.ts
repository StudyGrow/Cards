import { forbidden, ok, serverError } from "../../helpers/http.helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http.response";
import { Lecture } from "../../../main/docs/models/lecture.model";
import { UserFeedbackError } from "../../errors/user.feedback.error";
import { GetLectures } from "../../../domain/usecases/lecture/get.lectures";

export class GetLecturesController<
  T1 extends GetLecturesController.Request,
  T2 extends GetLecturesController.Response
> implements Controller<any, T2>
{
  constructor(private readonly getLectures: GetLectures) {}

  async handle(request: T1): Promise<HttpResponse<T2>> {
    try {
      const project = await this.getLectures.get();

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

export namespace GetLecturesController {
  export type Request = null;
  export type Response = Lecture;
}
