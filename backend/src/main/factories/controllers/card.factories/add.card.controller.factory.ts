import { AddCardController } from "../../../../response/controllers/card/add.card.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbAddCard } from "../../usecases.factories/card/add.card.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeAddCardValidation } from "./add.card.validation.factory";

export function makeAddCardController<T1, T2>(): Controller<
  AddCardController.Request,
  T2
> {
  const controller = new AddCardController(
    makeAddCardValidation(),
    makeDbAddCard()
  );
  return makeLogControllerDecorator(controller);
}
