import { AddLectureController } from "../../../../response/controllers/lecture/add.lecture.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbAddLecture } from "../../usecases.factories/lecture/add.lecture.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeAddLectureValidation } from "./add.lecture.validation.factory";

export function makeAddLectureController<T1, T2>(): Controller<
  AddLectureController.Request,
  T2
> {
  const controller = new AddLectureController(
    makeAddLectureValidation(),
    makeDbAddLecture()
  );
  return makeLogControllerDecorator(controller);
}
