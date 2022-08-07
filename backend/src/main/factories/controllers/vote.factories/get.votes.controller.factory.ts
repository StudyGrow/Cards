import { CastVoteController } from "../../../../response/controllers/vote/cast.vote.controller";
import { GetVotesController } from "../../../../response/controllers/vote/get.votes.controller";
import { Controller } from "../../../../response/protocols/controller";
import { makeDbGetVotes } from "../../usecases.factories/vote/get.votes.factory";
import { makeLogControllerDecorator } from "../log.controller.decorator.factory";
import { makeCastVoteValidation } from "./cast.vote.validation.factory";

export function makeGetVotesController<T1, T2>(): Controller<
  GetVotesController.Request,
  T2
> {
  const controller = new GetVotesController(
    makeCastVoteValidation(),
    makeDbGetVotes()
  );
  return makeLogControllerDecorator(controller);
}
