import { Model } from "mongoose";
import { ICard } from "../models/cards.model";
import { ILecture } from "../models/lecture.model";


//service which provides card related services
const MultipleChoiceCard = require("../models/MultipleChoiceCard");

export default class CardsService {
  constructor({ cardsModel,lectureModel }) {
    this.cardsModel = cardsModel;
    this.lectureModel=lectureModel;
  }  
  cardsModel: Model<ICard, {}>;;
  lectureModel: Model<ILecture, {}>;;
  //returns all the cards matching the query
  getCardsFromQuery(query){
    // console.log(query)
   
      let cards =  this.cardsModel.find(query).select(
        "tags thema content vorlesung latex"
      );
      return cards;
   
  };

  findByAbrv = async (abrv) => {
    return await this.cardsModel.find({ vorlesung: abrv })
      .lean()
      .select(
        "name thema vorlesung tags latex authorId authorName content date"
      );
  };

  // //creates a new card and adds it to the database
  addCard = async (form, user) => {
      const card = new this.cardsModel(form);
      card.date = new Date();
      card.vorlesung = form.abrv;
      card.latex = form.latex;
      if (user) {
        card.authorId = user._id; //add user as author of card
        card.authorName = user.username;
      }

      this.updateTags(card.vorlesung, card.tags);
      await card.save();
      await this.lectureModel.findOneAndUpdate(
        { abrv: form.abrv },
        { $inc: { totalCards: 1 } }
      );
      return card;
  };

  // //creates a new card and adds it to the database
  addMultipleChoiceCard = async (form, user) => {
   
      let lectureExists = await this.lectureModel.findByIdAndUpdate(form.cardDeckID, {
        $inc: { totalCards: 1 },
      });
      if (!lectureExists) {
        throw new Error("CardDeck (Lecture) does not exist");
      }
      const multipleChoiceCard = new MultipleChoiceCard(form);
      multipleChoiceCard.date = new Date();
      if (user) {
        multipleChoiceCard.authorId = user._id; //add user as author of card
        multipleChoiceCard.authorName = user.username;
      }

      this.updateTags(multipleChoiceCard.vorlesung, multipleChoiceCard.tags);
      await multipleChoiceCard.save();

      return multipleChoiceCard;
    
  };

  //updates a MultipleChoiceCard in the database
  updateMultipleChoiceCard = async (card, user) => {
   
      let tmp = await MultipleChoiceCard.findById(card._id); //find the card in the database
      if (tmp == null) {
        throw new Error("MultipleChoiceCard doesn't exist");
      }
      let lectureExists = await this.lectureModel.findById(card.cardDeckID);
      if (lectureExists == null) {
        throw new Error("CardDeck (Lecture) does not exist");
      }
      if (tmp && tmp.authorId && !user) {
        //There is an author, but there is no user logged in
        throw new Error(
          "Fehler: Du bist nicht der Author dieser Karte. Bitte logge dich ein."
        );
      }
      if (tmp.authorId && tmp.authorId != "" && tmp.authorId != user._id) {
        //The user is not the author of the card
        throw new Error("Fehler: Du bist nicht der Author dieser Karte.");
      }
      let updatedCard = await MultipleChoiceCard.findByIdAndUpdate(
        card._id,
        card,
        {
          new: true,
        }
      );
      return updatedCard;
   
  };

  // //updates a card in the database
  updateCard = async (card, user) => {
   
      let tmp = await this.cardsModel.findById(card._id); //find the card in the database
      if (tmp && tmp.authorId && !user) {
        //There is an author, but there is no user logged in
        throw new Error(
          "Fehler: Du bist nicht der Author dieser Karte. Bitte logge dich ein."
        );
      }
      if (tmp.authorId && tmp.authorId != "" && tmp.authorId != user._id) {
        //The user is not the author of the card
        throw new Error("Fehler: Du bist nicht der Author dieser Karte.");
      }
      this.updateTags(card.vorlesung, card.tags);
      let newCard = {
        thema: card.thema,
        content: card.content,
        latex: card.latex,
        tags: card.tags,
      };
      await this.cardsModel.findByIdAndUpdate(
        card._id,
        newCard
        //returns old content
      );
      // newCard._id = card._id;
      return newCard
   
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

  private updateTags(vlabrv, tags) {
    if (tags) {
      tags.forEach((tag:string) => {
        if (tag.length > 0) {
          this.lectureModel.updateOne(
            { abrv: vlabrv },
            { $addToSet: { tagList: tag } },
          );
        }
      });
    }
  }
}


