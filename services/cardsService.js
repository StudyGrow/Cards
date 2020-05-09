const mongoose = require("mongoose");
const Card = mongoose.model("Card");

module.exports = function cardsService() {
  cardsService.getCardsFromQuery = async (query, callback) => {
    try {
      let cards = await Card.find(query);
      callback(null, cards);
    } catch (error) {
      console.error(error);
      callback(error, null);
    }
  };

  cardsService.addCard = (form, user, callback) => {
    try {
      const card = new Card(form);
      card.vorlesung = form.abrv;
      if (user) {
        card.author = user.username;
      }
      card.save((err, result) => {
        if (err) {
          throw err;
        } else {
          callback(null, result._id);
        }
      });
    } catch (error) {
      callback(error, null);
    }
  };

  cardsService.updateCard = async (card, user, callback) => {
    try {
      let tmp = await Card.findById(card._id);
      if (tmp && tmp.author && tmp.author != "" && !user) {
        throw new Error("Fehler: Du bist nicht der Author dieser Karte");
      }
      if (tmp.author && tmp.author != "" && tmp.author != user.username) {
        throw new Error("Fehler: Du bist nicht der Author dieser Karte");
      }
      await Card.findByIdAndUpdate(card._id, {
        thema: card.thema,
        content: card.content,
      });
      callback(null);
    } catch (error) {
      callback(error);
    }
  };
  return cardsService;
};
