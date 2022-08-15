import { CastVote } from "../../../domain/usecases/vote/cast.vote";
import { LectureRepository } from "../../protocols/db/lecture/lecture.repository";
import { VoteRepository } from "../../protocols/db/vote/vote.repository";

export class DbCastVote implements CastVote {
  constructor(
    private readonly lectureRepository: LectureRepository,
    private readonly voteRepository: VoteRepository
  ) { }

  async vote(params: CastVote.Params): Promise<CastVote.Result> {
    const lecture = await this.lectureRepository.getById({
      id: params.data.lectureId,
    });
    if (!lecture) {
      return null;
    }
    const vote = await this.voteRepository.castVote({
      data: params.data,
      userId: params.user.id,
    });
    return vote;
  }
}
