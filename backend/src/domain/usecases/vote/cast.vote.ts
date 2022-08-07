import { Vote } from "../../../main/docs/models/vote.model";
import { CastVoteInput } from "../../../main/graphql/resolvers/vote/input/cast.vote.input";

export interface CastVote {
  vote: (params: CastVote.Params) => Promise<CastVote.Result>;
}

export namespace CastVote {
  export type Params = {
    data: CastVoteInput;
    user: {
      id: string;
    };
  };

  export type Result = Vote | null;
}
