import { CastVoteController } from "../../../../response/controllers/vote/cast.vote.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbCastVote } from "../../usecases.factories/vote/cast.vote.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeCastVoteValidation } from "./cast.vote.validation.factory";

export function makeCastVoteController<T1, T2>(): Controller<
  CastVoteController.Request,
  T2
> {
  const controller = new CastVoteController(
    makeCastVoteValidation(),
    makeDbCastVote()
  );
  return makeLogControllerDecorator(controller);
}
