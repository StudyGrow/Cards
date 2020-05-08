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
  cardsService.addCard = async (form, user, callback) => {
    try {
      const card = new Card(form);
      card.vorlesung = form.abrv;
      if (user) {
        card.author = user._id;
      }
      await card.save((err, result) => {
        if (err) {
          throw err;
        } else {
          callback(null, result._id);
        }
      });
    } catch (error) {
      console.error(error);
      callback(error, null);
    }
  };
  cardsService.updateCard = async (card, user, callback) => {
    try {
      let tmp = await Card.findById(card.id);
      if (tmp.author && tmp.author !== "" && tmp.author !== user._id) {
        throw new Error("User is not the author of this card");
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
