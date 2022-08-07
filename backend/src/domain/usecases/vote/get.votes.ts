import { Vote } from "../../../main/docs/models/vote.model";
import { GetVotesInput } from "../../../main/graphql/resolvers/vote/input/get.votes.input";

export interface GetVotes {
  get: (params: GetVotes.Params) => Promise<GetVotes.Result>;
}

export namespace GetVotes {
  export type Params = {
    data: GetVotesInput;
  };

  export type Result = Vote[];
}
