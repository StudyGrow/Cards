const Vote = require("../models/Vote");
const Card = require("../models/Card");
const Lecture = require("../models/Lecture");

module.exports = function votesService() {
  votesService.getVotesByQuery = async (query, callback) => {
    try {
      let votes = await Vote.find(query);
      callback(null, votes);
    } catch (error) {
      callback(error, null);
    }
  };

  votesService.getVotesByLectureAbrv = async (abrv, uId, callback) => {
    try {
      let lecture = await Lecture.findOne({ abrv: abrv });
      let votes = await Vote.find({ lectureId: lecture._id, userId: uId });
      callback(null, votes);
    } catch (error) {
      callback(error, null);
    }
  };

  votesService.getAllVotesByLectureAbrv = async (abrv) => {
   
      let lecture = await Lecture.findOne({ abrv: abrv });
      let allVotes = await Vote.find({ lectureId: lecture.id});
     return allVotes;
   
    
    
  };

  votesService.castVote = async (req, callback) => {
    try {
      if (!req.isAuthenticated()) {
        throw Error("Bitte logge dich erst ein");
      }
      let card = await Card.findById(req.body.id);
      if (!card) {
        throw Error("Karte konnte nicht gefunden werden");
      }
      let vote = await Vote.findOne({ cardId: req.body.id, userId: req.user._id });
      if (vote) {
        if (req.body.value === 0) {
          deleteVote(req);
        } else {
          await updateVote(req);
        }
      } else {
        await createVote(req, card.vorlesung);
      }
      callback(null);
    } catch (error) {
      callback(error);
    }
  };

  return votesService;
};

async function updateVote(req) {
  checkVote(req.body.value);
  await Vote.updateOne({ cardId: req.body.id, userId: req.user._id }, { value: req.body.value });
}

async function createVote(req, abrv) {
  checkVote(req.body.value);
  let lecture = await Lecture.findOne({ abrv: abrv });
  let vote = new Vote({
    cardId: req.body.id,
    userId: req.user._id,
    lectureId: lecture._id,
    value: req.body.value,
  });
  await vote.save();
}
function deleteVote(req) {
  Vote.findOneAndDelete({ cardId: req.body.id, userId: req.user._id }, () => {});
}

function checkVote(vote) {
  if (vote !== 1 && vote !== 0) {
    throw new Error("Vote muss entweder 1 oder 0 sein");
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
