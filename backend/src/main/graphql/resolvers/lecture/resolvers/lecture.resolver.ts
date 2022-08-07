import { Request, Response } from "express";

import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { adaptResolver } from "../../../../adapters/apollo.server.resolver.adapter";
import { Lecture } from "../../../../docs/models/lecture.model";
import { makeAddLectureController } from "../../../../factories/controllers/lecture.factories/add.lecture.controller.factory";
import { Authentication } from "../../../directives/authentication.directive";
import { AddLectureInput } from "../input/add.lecture.input";

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
}
