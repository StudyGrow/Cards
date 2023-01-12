import { GetCardsController } from "../../../../response/controllers/card/get.cards.controller";
import { UpdateCardController } from "../../../../response/controllers/card/update.card.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbGetCards } from "../../usecases.factories/card/get.cards.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";

export function makeGetCardsController<T1, T2>(): Controller<
  GetCardsController.Request,
  T2
> {
  const controller = new GetCardsController(makeDbGetCards());
  return makeLogControllerDecorator(controller);
}
