import { Request, Response } from "express";

import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { adaptResolver } from "../../../../adapters/apollo.server.resolver.adapter";
import { Card } from "../../../../docs/models/card.model";
import { Lecture } from "../../../../docs/models/lecture.model";
import { makeAddLectureController } from "../../../../factories/controllers/lecture.factories/add.lecture.controller.factory";
import { makeGetLecturesController } from "../../../../factories/controllers/lecture.factories/get.lectures.controller.factory";
import { Authentication } from "../../../directives/authentication.directive";
import { TryAuthentication } from "../../../directives/try.authentication.directive";
import { AddLectureInput } from "../input/add.lecture.input";
import { makeGetCardsController } from "../../../../factories/controllers/card.factories/get.cards.controller.factory";
import { Vote } from "../../../../docs/models/vote.model";
import { makeGetVotesController } from "../../../../factories/controllers/vote.factories/get.votes.controller.factory";
import { GetLectureInput } from "../input/get.lecture.input";
import { makeGetLectureController } from "../../../../factories/controllers/lecture.factories/get.lecture.controller.factory";

interface MyCont {
  req: Request;
  res: Response;
}

@Resolver((of) => Lecture)
export class LectureResolver {
  @Mutation(() => Lecture, {
    description: `Add a new lecture with a given unique abbreviation.`,
  })
  @UseMiddleware(Authentication)
  async addLecture(
    @Arg("data") data: AddLectureInput,
    @Ctx() ctx: MyCont
  ): Promise<Lecture> {
    return adaptResolver(
      makeAddLectureController(),
      {
        data: data,
        user: {
          id: ctx.req.user._id,
        },
      },
      ctx
    );
  }

  @Query(() => [Lecture], {})
  async getLectures(@Ctx() ctx: MyCont): Promise<Lecture[]> {
    return adaptResolver(makeGetLecturesController(), null, ctx);
  }

  @Query(() => Lecture, {
    nullable: true,
  })
  async getLecture(
    @Arg("data") data: GetLectureInput,
    @Ctx() ctx: MyCont
  ): Promise<Lecture> {
    return adaptResolver(makeGetLectureController(), data, ctx);
  }

  @FieldResolver((type) => [Card], { nullable: true })
  @UseMiddleware(TryAuthentication)
  async cards(
    @Root() project: Lecture,
    @Ctx() ctx: MyCont
  ): Promise<Card[] | null> {
    return adaptResolver(
      makeGetCardsController(),
      {
        data: {
          lectureAbbreviation: project.abrv,
        },
      },
      ctx
    );
  }

  @FieldResolver((type) => [Vote], { nullable: true })
  @UseMiddleware(TryAuthentication)
  async votes(
    @Root() project: Lecture,
    @Ctx() ctx: MyCont
  ): Promise<Vote[] | null> {
    return adaptResolver(
      makeGetVotesController(),
      {
        data: {
          lectureAbbreviation: project.abrv,
        },
        user: {
          id: ctx.req.user._id,
        },
      },
      ctx
    );
  }
}
