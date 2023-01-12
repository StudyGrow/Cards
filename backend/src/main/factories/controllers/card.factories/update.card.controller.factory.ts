import { UpdateCardController } from "../../../../response/controllers/card/update.card.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbUpdateCard } from "../../usecases.factories/card/update.card.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeAddCardValidation } from "./add.card.validation.factory";

export function makeUpdateCardController<T1, T2>(): Controller<
  UpdateCardController.Request,
  T2
> {
  const controller = new UpdateCardController(
    makeAddCardValidation(),
    makeDbUpdateCard()
  );
  return makeLogControllerDecorator(controller);
}
