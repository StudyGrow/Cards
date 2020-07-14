//service which provides card related services
const mongoose = require("mongoose");
const Card = mongoose.model("Card");
const Lecture = mongoose.model("Lecture");

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

  return cardsService;
};

function updateTags(vlabrv, tags) {
  if (tags) {
    tags.forEach((tag) => {
      if (tag.length > 0) {
        Lecture.updateOne({ abrv: vlabrv }, { $addToSet: { tagList: [tag] } }, () => {});
      }
    });
  }
}
