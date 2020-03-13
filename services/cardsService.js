const mongoose = require("mongoose");
const Card = mongoose.model("Registration");

module.exports = function cardsService() {
  cardsService.getCardsFromQuery = (query, callback) => {
    Card.find(query, (err, cards) => {
      if (err) {
        console.log(err);
      } else {
        ////console.log(cards)
        callback(cards);
      }
    });
  };
  cardsService.addCard = (abrv, title, content, img, callback) => {
    const card = new Card();
    console.log("content: " + content);
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
  cardsService.updateCard = (id, content) => {
    console.log(content);
    Card.updateOne(
      {
        _id: id
      },
      {
        $set: {
          content: content
        }
      }
    ).catch(err => {
      console.log("Error on updateCard: " + err);
    });
  };
  return cardsService;
};
