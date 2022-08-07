import { Request, Response } from "express";

import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { adaptResolver } from "../../../../adapters/apollo.server.resolver.adapter";
import { Card } from "../../../../docs/models/card.model";
import { makeAddCardController } from "../../../../factories/controllers/card.factories/add.card.controller.factory";
import { makeUpdateCardController } from "../../../../factories/controllers/card.factories/update.card.controller.factory";
import { Authentication } from "../../../directives/authentication.directive";
import { AddCardInput } from "../input/add.card.input";
import { UpdateCardInput } from "../input/update.card.input";

interface MyCont {
  req: Request;
  res: Response;
}

@Resolver((of) => Card)
export class CardResolver {
  @Mutation(() => Card, {
    description: `Add a new card with for a given lecture.`,
  })
  @UseMiddleware(Authentication)
  async addCard(
    @Arg("data") data: AddCardInput,
    @Ctx() ctx: MyCont
  ): Promise<Card> {
    return adaptResolver(
      makeAddCardController(),
      {
        data: data,
        user: {
          id: ctx.req.user._id,
        },
      },
      ctx
    );
  }

  @Mutation(() => Card, {
    description: `Update an existing card with for a given lecture.`,
  })
  @UseMiddleware(Authentication)
  async updateCard(
    @Arg("data") data: UpdateCardInput,
    @Ctx() ctx: MyCont
  ): Promise<Card> {
    return adaptResolver(
      makeUpdateCardController(),
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
