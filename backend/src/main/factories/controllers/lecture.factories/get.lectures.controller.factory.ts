import { GetLecturesController } from "../../../../response/controllers/lecture/get.lectures.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbGetLectures } from "../../usecases.factories/lecture/get.lectures.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";

export function makeGetLecturesController<T1, T2>(): Controller<
  GetLecturesController.Request,
  T2
> {
  const controller = new GetLecturesController(makeDbGetLectures());
  return makeLogControllerDecorator(controller);
}
