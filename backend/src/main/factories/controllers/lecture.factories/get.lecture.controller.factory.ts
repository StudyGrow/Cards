import { GetLectureController } from "../../../../response/controllers/lecture/get.lecture.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbGetLecture } from "../../usecases.factories/lecture/get.lecture.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";

export function makeGetLectureController<T1, T2>(): Controller<
  GetLectureController.Request,
  T2
> {
  const controller = new GetLectureController(makeDbGetLecture());
  return makeLogControllerDecorator(controller);
}
