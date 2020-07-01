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

  //calculateNewCardRating(form);
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

  //calculateNewCardRating(form);
}
function deleteVote(req) {
  Vote.findOneAndDelete({ cardId: req.body.id, userId: req.user._id }, () => {});
}

function checkVote(vote) {
  if (vote !== 1 && vote !== -1) {
    throw new Error("Vote muss entweder 1 oder -1 sein");
  }
}
async function calculateNewCardRating(form) {
  //probably will be removed, we should calculate the new rating periodically and not on every vote
  try {
    let currRating = await Card.findById(form.id).rating;
    currRating -= form.value;
    Card.findByIdAndUpdate(form.id, { rating: currRating }, () => {});
  } catch (error) {
    console.log(error);
  }
}
