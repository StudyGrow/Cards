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

  cardsService.findByAbrv = async (abrv) => {
    return await Card.find({ vorlesung: abrv });
  };

  //creates a new card and adds it to the database
  cardsService.addCard = async (form, user, callback) => {
    try {
      const card = new Card(form);
      card.date = new Date();
      card.vorlesung = form.abrv;
      if (user) {
        card.authorId = user._id; //add user as author of card
        card.authorName = user.username;
      }

      updateTags(card.vorlesung, card.tags);
      await card.save();
      callback(null, card);
    } catch (error) {
      callback(error, null);
    }
  };

  //used to migrate data
  // cardsService.renew = async () => {
  //   let cards = await Card.find({ vorlesung: "mal" });
  //   cards.forEach((card) => {
  //     // Card.findOneAndDelete({ content: card.content });
  //     cardsService.addCard(
  //       {
  //         content: card.content,
  //         thema: card.thema,
  //         abrv: "MaLo",
  //         tags: ["Definitionen"],
  //       },
  //       null,
  //       (err, id) => {
  //         if (err) {
  //           console.error(err);
  //         } else console.log(id);
  //       }
  //     );
  //   });
  // };

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
      updateTags(card.vorlesung, card.tags);
      let newCard = {
        thema: card.thema,
        content: card.content,
        latex: card.latex,
        tags: card.tags,
      };
      await Card.findByIdAndUpdate(
        card._id,
        newCard
        //returns old content
      );
      newCard._id = card._id;
      callback(null, newCard);
    } catch (error) {
      console.error(error);
      callback(error, null);
    }
  };

  return cardsService;
};

function updateTags(vlabrv, tags) {
  if (tags) {
    tags.forEach((tag) => {
      if (tag.length > 0) {
        Lecture.updateOne({ abrv: vlabrv }, { $addToSet: { tagList: [tag] } }, (err, res) => {
          console.log(res);
        });
      }
    });
  }
}
