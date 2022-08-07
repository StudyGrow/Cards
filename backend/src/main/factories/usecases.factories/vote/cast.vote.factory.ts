import { DbCastVote } from "../../../../data/usecases/vote/db.cast.vote";
import { CastVote } from "../../../../domain/usecases/vote/cast.vote";
import { LectureMongoRepository } from "../../../../infrastructure/db/mongodb/lecture/lecture.mongodb.repository";
import { VoteMongoRepository } from "../../../../infrastructure/db/mongodb/vote/vote.mongodb.repository";

export const makeDbCastVote = (): CastVote => {
  const lectureMongoRepository = new LectureMongoRepository();
  const voteMongoRepository = new VoteMongoRepository();
  return new DbCastVote(lectureMongoRepository, voteMongoRepository);
};
