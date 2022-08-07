import { DbGetVotes } from "../../../../data/usecases/vote/db.get.votes";
import { GetVotes } from "../../../../domain/usecases/vote/get.votes";
import { LectureMongoRepository } from "../../../../infrastructure/db/mongodb/lecture/lecture.mongodb.repository";
import { VoteMongoRepository } from "../../../../infrastructure/db/mongodb/vote/vote.mongodb.repository";

export const makeDbGetVotes = (): GetVotes => {
  const lectureMongoRepository = new LectureMongoRepository();
  const voteMongoRepository = new VoteMongoRepository();
  return new DbGetVotes(lectureMongoRepository, voteMongoRepository);
};
