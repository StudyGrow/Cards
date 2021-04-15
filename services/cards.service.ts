//service which provides card related services
const mongoose = require("mongoose");
// const Card = mongoose.model("Card");
// const Lecture = mongoose.model("Lecture");
const MultipleChoiceCard = require("../models/MultipleChoiceCard");

export default class cardsService {
  constructor({ cardsModel }) {
    this.cardsModel = cardsModel;
  }  
  cardsModel;
  //returns all the cards matching the query
  getCardsFromQuery(query) {
    console.log(query)
    try {
      let cards =  this.cardsModel.find(query).select(
        "tags thema content vorlesung latex"
      );
      return cards;
    } catch (error) {
      throw Error('Error getting Cards');
    }
  };

  // findByAbrv = async (abrv) => {
  //   return await Card.find({ vorlesung: abrv })
  //     .lean()
  //     .select(
  //       "name thema vorlesung tags latex authorId authorName content date"
  //     );
  // };

  // //creates a new card and adds it to the database
  // addCard = async (form, user, callback) => {
  //   try {
  //     const card = new Card(form);
  //     card.date = new Date();
  //     card.vorlesung = form.abrv;
  //     card.latex = form.latex;
  //     if (user) {
  //       card.authorId = user._id; //add user as author of card
  //       card.authorName = user.username;
  //     }

  //     updateTags(card.vorlesung, card.tags);
  //     await card.save();
  //     await Lecture.findOneAndUpdate(
  //       { abrv: form.abrv },
  //       { $inc: { totalCards: 1 } }
  //     );
  //     callback(null, card);
  //   } catch (error) {
  //     callback(error, null);
  //   }
  // };

  // //creates a new card and adds it to the database
  // addMultipleChoiceCard = async (form, user, callback) => {
  //   try {
  //     let lectureExists = await Lecture.findByIdAndUpdate(form.cardDeckID, {
  //       $inc: { totalCards: 1 },
  //     });
  //     if (lectureExists == null) {
  //       throw new Error("CardDeck (Lecture) does not exist");
  //     }
  //     const multipleChoiceCard = new MultipleChoiceCard(form);
  //     multipleChoiceCard.date = new Date();
  //     if (user) {
  //       multipleChoiceCard.authorId = user._id; //add user as author of card
  //       multipleChoiceCard.authorName = user.username;
  //     }

  //     // updateTags(card.vorlesung, card.tags);
  //     await multipleChoiceCard.save();

  //     callback(null, multipleChoiceCard);
  //   } catch (error) {
  //     callback(error, null);
  //   }
  // };

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

  //updates a MultipleChoiceCard in the database
  // updateMultipleChoiceCard = async (card, user, callback) => {
  //   try {
  //     let tmp = await MultipleChoiceCard.findById(card._id); //find the card in the database
  //     if (tmp == null) {
  //       throw new Error("MultipleChoiceCard doesn't exist");
  //     }
  //     let lectureExists = await Lecture.findById(card.cardDeckID);
  //     if (lectureExists == null) {
  //       throw new Error("CardDeck (Lecture) does not exist");
  //     }
  //     if (tmp && tmp.authorId && !user) {
  //       //There is an author, but there is no user logged in
  //       throw new Error(
  //         "Fehler: Du bist nicht der Author dieser Karte. Bitte logge dich ein."
  //       );
  //     }
  //     if (tmp.authorId && tmp.authorId != "" && tmp.authorId != user._id) {
  //       //The user is not the author of the card
  //       throw new Error("Fehler: Du bist nicht der Author dieser Karte.");
  //     }
  //     let updatedCard = await MultipleChoiceCard.findByIdAndUpdate(
  //       card._id,
  //       card,
  //       {
  //         new: true,
  //       }
  //     );
  //     callback(null, updatedCard);
  //   } catch (error) {
  //     console.error(error);
  //     callback(error, null);
  //   }
  // };

  // //updates a card in the database
  // updateCard = async (card, user, callback) => {
  //   try {
  //     let tmp = await Card.findById(card._id); //find the card in the database
  //     if (tmp && tmp.authorId && !user) {
  //       //There is an author, but there is no user logged in
  //       throw new Error(
  //         "Fehler: Du bist nicht der Author dieser Karte. Bitte logge dich ein."
  //       );
  //     }
  //     if (tmp.authorId && tmp.authorId != "" && tmp.authorId != user._id) {
  //       //The user is not the author of the card
  //       throw new Error("Fehler: Du bist nicht der Author dieser Karte.");
  //     }
  //     updateTags(card.vorlesung, card.tags);
  //     let newCard = {
  //       thema: card.thema,
  //       content: card.content,
  //       latex: card.latex,
  //       tags: card.tags,
  //     };
  //     await Card.findByIdAndUpdate(
  //       card._id,
  //       newCard
  //       //returns old content
  //     );
  //     // newCard._id = card._id;
  //     callback(null, newCard);
  //   } catch (error) {
  //     console.error(error);
  //     callback(error, null);
  //   }
  // };
}

// function updateTags(vlabrv, tags) {
//   if (tags) {
//     tags.forEach((tag) => {
//       if (tag.length > 0) {
//         Lecture.updateOne(
//           { abrv: vlabrv },
//           { $addToSet: { tagList: [tag] } },
//           (err, res) => {
//             console.log(res);
//           }
//         );
//       }
//     });
//   }
// }
