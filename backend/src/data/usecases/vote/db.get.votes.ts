import { GetVotes } from "../../../domain/usecases/vote/get.votes";
import { LectureRepository } from "../../protocols/db/lecture/lecture.repository";
import { VoteRepository } from "../../protocols/db/vote/vote.repository";

export class DbGetVotes implements GetVotes {
  constructor(
    private readonly lectureRepository: LectureRepository,
    private readonly voteRepository: VoteRepository
  ) {}

  async get(params: GetVotes.Params): Promise<GetVotes.Result> {
    const lecture = await this.lectureRepository.getByLectureAbbreviation({
      lectureAbbreviation: params.data.lectureAbbreviation,
    });
    if (!lecture) {
      return [];
    }
    if (params.data.userId) {
      return this.voteRepository.getAllVotesOfUserByLectureId({
        lectureId: lecture._id!,
        userId: params.data.userId,
      });
    } else {
      return this.voteRepository.getAllVotesByLectureId({
        lectureId: lecture._id!,
      });
    }
  }
}
