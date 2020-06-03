//service which provides card related services
const mongoose = require("mongoose");
const Card = mongoose.model("Card");
const Lecture = mongoose.model("Lecture");
const Vote = require("../models/Vote");

module.exports = function cardsService() {
  //returns all the cards matching the query
  cardsService.getCardsFromQuery = async (query, callback) => {
    try {
      let cards = await Card.find(query);
      callback(null, cards);
    } catch (error) {
      callback(error, null);
    }
  };

  //creates a new card and adds it to the database
  cardsService.addCard = async (form, user, callback) => {
    try {
      const card = new Card(form);
      card.date = new Date();
      card.vorlesung = form.abrv;
      card.latex = 0;
      if (user) {
        card.authorId = user._id; //add user as author of card
        card.authorName = user.username;
      }
      if (form.tags) {
        card.tags = form.tags.split("#", 10);
      }
      updateTags(card.vorlesung, card.tags);
      await card.save();
      callback(null, card._id);
    } catch (error) {
      callback(error, null);
    }
  };

  //updates a card in the database
  cardsService.updateCard = async (card, user, callback) => {
    try {
      let tmp = await Card.findById(card._id); //find the card in the database
      if (tmp && tmp.authorId && !user) {
        //There is an author, but there is no user logged in
        throw new Error("Fehler: Du bist nicht der Author dieser Karte. Bitte logge dich ein.");
      }
      if (tmp.authorId && tmp.authorId != "" && tmp.authorId != user._id) {
        //The user is not the author of the card
        throw new Error("Fehler: Du bist nicht der Author dieser Karte.");
      }
      await Card.findByIdAndUpdate(card._id, {
        thema: card.thema,
        content: card.content,
      });
      callback(null);
    } catch (error) {
      console.error(error);
      callback(error);
    }
  };
  cardsService.castVote = async (form, callback) => {
    try {
      if (!req.isAuthenticated()) {
        throw Error("Bitte logge dich erst ein");
      }
      let card = await Card.findById(form.id);
      if (!card) {
        throw Error("Karte konnte nicht gefunden werden");
      }
      let vote = await Vote.find({ cardId: form.id, userId: req.user._id });
      if (vote) {
        updateVote(form, callback);
      } else {
        createVote(form, callback);
      }
    } catch (error) {
      callback(error);
    }
  };
  return cardsService;
};
async function updateVote(form, callback) {
  checkVote(form.value);
  await Vote.updateOne({ cardId: form.id, userId: req.user._id }, { vote: form.value });
  calculateNewCardRating(form);
  callback(null);
}
async function createVote(form, callback) {
  checkVote(form.value);
  let vote = new Vote({ cardId: form.id, userId: req.user._id, vote: form.value });
  await vote.save();
  calculateNewCardRating(form);
  callback(null);
}
function checkVote(vote) {
  if (vote !== 1 && vote !== -1) {
    throw new Error("Vote muss entweder 1 oder -1 sein");
  }
}
async function calculateNewCardRating(vote) {
  try {
    let currRating = await Card.findById(vote.cardId).rating;
    currRating -= vote.value;
    Card.findByIdAndUpdate(vote.cardId, { rating: currRating }, () => {});
  } catch (error) {
    console.log(error);
  }
}
function updateTags(vlabrv, tags) {
  tags.forEach((tag) => {
    if (tag.length > 0) {
      Lecture.updateOne({ abrv: vlabrv }, { $addToSet: { tagList: [tag] } }, () => {});
    }
  });
}
