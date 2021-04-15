const Vote = require('../models/Vote');
const Card = require('../models/Card');
const Lecture = require('../models/Lecture');
export default class votesService {
  constructor() {}
  getVotesByQuery = async (query, callback) => {
    try {
      let votes = await Vote.find(query);
      callback(null, votes);
    } catch (error) {
      callback(error, null);
    }
  };

  getVotesByLectureAbrv = async (abrv, uId, callback) => {
    try {
      let lecture = await Lecture.findOne({ abrv: abrv });
      if (!lecture) {
        throw new Error('Die Vorlesung existiert nicht');
      } else {
        let votes = await Vote.find({ lectureId: lecture._id, userId: uId });
        callback(null, votes);
      }
    } catch (error) {
      callback(error, null);
    }
  };

  getAllVotesByLectureAbrv = async (abrv) => {
    let lecture = await Lecture.findOne({ abrv: abrv });
    if (!lecture) {
      return null;
    }
    let allVotes = await Vote.find({ lectureId: lecture.id });
    return allVotes;
  };

  castVote = async (req, callback) => {
    try {
      if (!req.isAuthenticated()) {
        throw Error('Bitte logge dich erst ein');
      }
      let card = await Card.findById(req.body.id);
      if (!card) {
        throw Error('Karte konnte nicht gefunden werden');
      }
      let vote = await Vote.findOne({ cardId: req.body.id, userId: req.user._id }).lean();
      if (vote) {
        updateVote(vote, req.body.value, callback);
      } else {
        createVote(req, card.vorlesung, callback);
      }
    } catch (error) {
      callback(error);
    }
  };
};

function updateVote(vote, newValue, callback) {
  checkVote(newValue);

  Vote.updateOne(
    { _id: vote._id },
    { value: newValue },

    (err, _) => {
      callback(err, { ...vote, value: newValue });
    }
  );
}

async function createVote(req, abrv, callback) {
  checkVote(req.body.value);
  let lecture = await Lecture.findOne({ abrv: abrv });
  let vote = new Vote({
    cardId: req.body.id,
    userId: req.user._id,
    lectureId: lecture._id,
    value: req.body.value,
  });
  vote.save({ lean: true }, callback);
}
function deleteVote(req, callback) {
  Vote.findOneAndDelete({ cardId: req.body.id, userId: req.user._id }, callback);
}

function checkVote(vote) {
  if (vote !== 1 && vote !== 0) {
    throw new Error('Vote muss entweder 1 oder 0 sein');
  }
}

//this function shoul be called periodically to calculate the new rating
//calculate the new rating by findind all votes that were made for a specific card and then update the value with the summation of the votes
async function updateTotalVotes(id, val) {
  try {
    let card = await Card.findById(id);
    let currRating = card.rating || 0;
    currRating += val;
    Card.findByIdAndUpdate(id, { rating: currRating }, () => {});
  } catch (error) {
    console.log(error);
  }
}
