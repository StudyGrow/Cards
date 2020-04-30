const mongoose = require("mongoose");
const Card = mongoose.model("Card");

module.exports = function cardsService() {
  cardsService.getCardsFromQuery = async (query, callback) => {
    try {
      let cards = await Card.find(query);
      callback(null, cards);
    } catch (error) {
      callback(error, null);
    }
  };
  cardsService.addCard = async (abrv, c, user, callback) => {
    try {
      const card = new Card();
      card.vorlesung = abrv;
      card.thema = c.title;
      card.content = c.content;
      card.img = c.img;
      if (user) {
        card.author = user.username;
      } else {
        card.author = "";
      }
      await card.save((err, result) => {
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
  cardsService.updateCard = async (card) => {
    try {
      await Card.updateOne(
        {
          _id: card.id,
        },
        {
          $set: {
            thema: card.thema,
            content: card.content,
          },
        }
      );
      callback(null);
    } catch (error) {
      callback(error);
    }
  };
  return cardsService;
};
