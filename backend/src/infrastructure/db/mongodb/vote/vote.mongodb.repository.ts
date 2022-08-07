import { getModelForClass } from "@typegoose/typegoose";
import {
  CastVoteRepository,
  GetVotesByLectureIdRepository,
} from "../../../../data/protocols/db/vote/vote.repository";
import { VoteRepository } from "../../../../data/protocols/db/vote/vote.repository";
import { Vote } from "../../../../main/docs/models/vote.model";
import { CastVoteInput } from "../../../../main/graphql/resolvers/vote/input/cast.vote.input";

export class VoteMongoRepository implements VoteRepository {
  async getAllVotesByLectureId(
    data: GetVotesByLectureIdRepository.Params
  ): Promise<GetVotesByLectureIdRepository.Result> {
    const result = await getModelForClass(Vote).find({
      lectureId: data.lectureId,
    });
    return result;
  }

  async getAllVotesOfUserByLectureId(
    data: GetVotesByLectureIdRepository.ParamsWithUserId
  ): Promise<GetVotesByLectureIdRepository.Result> {
    const result = await getModelForClass(Vote).find({
      lectureId: data.lectureId,
      userId: data.userId,
    });
    return result;
  }

  async castVote(
    data: CastVoteRepository.Params
  ): Promise<CastVoteRepository.Result> {
    const vote = await getModelForClass(Vote).findOne({
      cardId: data.data.cardId,
      userId: data.userId,
    });
    if (vote) {
      return await this.updateVote(vote, data.data);
    } else {
      return await this.createVote(data.userId, data.data);
    }
  }

  async updateVote(vote: Vote, newVote: CastVoteInput): Promise<Vote> {
    this.checkVote(newVote.value);
    await getModelForClass(Vote).updateOne(
      { _id: vote._id },
      { value: newVote.value }
    );
    return vote;
  }

  async createVote(userId: string, newVote: CastVoteInput) {
    this.checkVote(newVote.value);
    const vote = await getModelForClass(Vote).create({
      cardId: newVote.cardId,
      userId: userId,
      lectureId: newVote.lectureId,
      value: newVote.value,
    });
    return vote;
  }

  checkVote(vote: number) {
    if (vote !== 1 && vote !== 0) {
      throw new Error("Vote invalid, only 0 and 1 are allowed");
    }
  }
}
