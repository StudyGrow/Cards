import { CastVote } from "../../../domain/usecases/vote/cast.vote";
import { CardRepository } from "../../protocols/db/card/card.repository";
import { LectureRepository } from "../../protocols/db/lecture/lecture.repository";
import { VoteRepository } from "../../protocols/db/vote/vote.repository";

export class DbCastVote implements CastVote {
  constructor(
    private readonly lectureRepository: LectureRepository,
    private readonly cardRepository: CardRepository,
    private readonly voteRepository: VoteRepository
  ) {}

  async vote(params: CastVote.Params): Promise<CastVote.Result> {
    const card = await this.cardRepository.getById({ id: params.data.cardId });
    const lecture = await this.lectureRepository.getByLectureAbbreviation({
      lectureAbbreviation: card!!.lectureAbbreviation,
    });
    const vote = await this.voteRepository.castVote({
      data: { input: params.data, lectureId: lecture?._id!! },
      userId: params.user.id,
    });
    return vote;
  }
}
