import { Model } from "mongoose";
import { ICard } from "../models/cards.model";
import { ILecture } from "../models/lecture.model";
import { IVote } from "../models/vote.model";

export default class VotesService {
  constructor({ cardsModel, voteModel, lectureModel }) {
    this.cardsModel = cardsModel;
    this.voteModel = voteModel;
    this.lectureModel = lectureModel;
  }
  cardsModel: Model<ICard, {}>;
  voteModel;
  lectureModel: Model<ILecture, {}>;
  getVotesByQuery = async (query) => {
    let votes = await this.voteModel.find(query);
    return votes;
  };

  getVotesByLectureAbrv = async (abrv, uId) => {
    let lecture = await this.lectureModel.findOne({ abrv: abrv });
    if (!lecture) {
      throw new Error("Die Vorlesung existiert nicht");
    } else {
      let votes = await this.voteModel.find({
        lectureId: lecture._id,
        userId: uId,
      });
      return votes;
    }
  };

  getAllVotesByLectureAbrv = async (abrv) => {
    let lecture = await this.lectureModel.findOne({ abrv: abrv });
    if (!lecture) {
      return null;
    }
    let allVotes = await this.voteModel.find({ lectureId: lecture.id });
    return allVotes;
  };

  castVote = async (req) => {
    if (!req._id) {
      throw Error("Bitte logge dich erst ein");
    }
    let card = await this.cardsModel.findById(req.body.id);
    if (!card) {
      throw Error("Karte konnte nicht gefunden werden");
    }
    let vote = await this.voteModel
      .findOne({ cardId: req.body.id, userId: req._id })
      .lean();
    if (vote) {
      this.updateVote(vote, req.body.value);
    } else {
      return await this.createVote(req, card.vorlesung);
    }
  };


async updateVote(vote, newValue) {
  this.checkVote(newValue);

  await this.voteModel.updateOne({ _id: vote._id }, { value: newValue });
  return vote;
  //TODO: might need to return the updated vote here
}

async createVote(req, abrv) {
  this.checkVote(req.body.value);
  let lecture = await this.lectureModel.findOne({ abrv: abrv });
  let vote = new this.voteModel({
    cardId: req.body.id,
    userId: req._id,
    lectureId: lecture._id,
    value: req.body.value,
  });
  await vote.save({ lean: true });
  return vote;
}

// function deleteVote(req, callback) {
//   Vote.findOneAndDelete({ cardId: req.body.id, userId: req.user._id }, callback);
// }

checkVote(vote) {
  if (vote !== 1 && vote !== 0) {
    throw new Error("Vote invalid, only 0 and 1 are allowed");
  }
}
}
//this function should be called periodically to calculate the new rating
//calculate the new rating by finding all votes that were made for a specific card and then update the value with the summation of the votes
// async function updateTotalVotes(id, val) {
//   try {
//     let card = await Card.findById(id);
//     let currRating = card.rating || 0;
//     currRating += val;
//     Card.findByIdAndUpdate(id, { rating: currRating }, () => {});
//   } catch (error) {
//     console.log(error);
//   }
// }
