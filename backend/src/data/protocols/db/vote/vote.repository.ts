import { Vote } from "../../../../main/docs/models/vote.model";
import { CastVoteInput } from "../../../../main/graphql/resolvers/vote/input/cast.vote.input";

export interface VoteRepository {
  getAllVotesByLectureId: (
    data: GetVotesByLectureIdRepository.Params
  ) => Promise<GetVotesByLectureIdRepository.Result>;

  getAllVotesOfUserByLectureId: (
    data: GetVotesByLectureIdRepository.ParamsWithUserId
  ) => Promise<GetVotesByLectureIdRepository.Result>;

  castVote: (
    data: CastVoteRepository.Params
  ) => Promise<CastVoteRepository.Result>;
}

export namespace CastVoteRepository {
  export type Params = {
    data: { input: CastVoteInput; lectureId: string };
    userId: string;
  };
  export type Result = Vote;
}

export namespace GetVotesByLectureIdRepository {
  export type Params = {
    lectureId: string;
  };

  export type ParamsWithUserId = {
    lectureId: string;
    userId: string;
  };

  export type Result = Vote[];
}
