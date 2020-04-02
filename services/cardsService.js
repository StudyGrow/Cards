const mongoose = require("mongoose");
const Card = mongoose.model("Registration");

module.exports = function cardsService() {
  cardsService.getCardsFromQuery = (query, callback) => {
    Card.find(query, (err, cards) => {
      if (err) {
        console.log(err);
      } else {
        callback(cards);
      }
    });
  };
  cardsService.addCard = (abrv, title, content, img, callback) => {
    const card = new Card();
    card.vorlesung = abrv;
    card.thema = title;
    card.content = content;
    card.img = img;

    card.save((err, result) => {
      if (err) {
        console.log(err);
      } else {
        callback(result._id);
      }
    });
  };
  cardsService.updateCard = (id, thema, content) => {
    Card.updateOne(
      {
        _id: id
      },
      {
        $set: {
          thema: thema,
          content: content
        }
      }
    ).catch(err => {
      console.log("Error on updateCard: " + err);
    });
  };
  return cardsService;
};
