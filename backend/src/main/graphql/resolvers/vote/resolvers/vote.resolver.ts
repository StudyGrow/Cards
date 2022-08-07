import { Request, Response } from "express";

import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { adaptResolver } from "../../../../adapters/apollo.server.resolver.adapter";
import { Vote } from "../../../../docs/models/vote.model";
import { makeCastVoteController } from "../../../../factories/controllers/vote.factories/cast.vote.controller.factory";
import { makeGetVotesController } from "../../../../factories/controllers/vote.factories/get.votes.controller.factory";
import { Authentication } from "../../../directives/authentication.directive";
import { CastVoteInput } from "../input/cast.vote.input";
import { GetVotesInput } from "../input/get.votes.input";

interface MyCont {
  req: Request;
  res: Response;
}

@Resolver((of) => Vote)
export class VoteResolver {
  @Mutation(() => Vote, {})
  @UseMiddleware(Authentication)
  async castVote(
    @Arg("data") data: CastVoteInput,
    @Ctx() ctx: MyCont
  ): Promise<Vote> {
    return adaptResolver(
      makeCastVoteController(),
      {
        data: data,
        user: {
          id: ctx.req.user._id,
        },
      },
      ctx
    );
  }

  @Query(() => [Vote], {})
  @UseMiddleware(Authentication)
  async getVotes(
    @Arg("data") data: GetVotesInput,
    @Ctx() ctx: MyCont
  ): Promise<Vote[]> {
    return adaptResolver(
      makeGetVotesController(),
      {
        data: data,
        user: {
          id: ctx.req.user._id,
        },
      },
      ctx
    );
  }
}
