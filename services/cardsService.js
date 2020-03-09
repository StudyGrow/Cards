const mongoose = require('mongoose');
const Card = mongoose.model('Registration');

module.exports = class cardsService {
    getCardsFromQuery(query, callback){
        Registration.find(query, (err, cards) => {
            if (err) {
                console.log(err);
            } else {
                ////console.log(cards)
                callback(cards);
            }
        });
    }
    addCard(abrv,title,content,img,callback){
        const card = new Card(abrv,title,content,img);
        console.log(card);
        card.save((err, result) => {
            if (err) {
                throw(err);
            } else {
               callback(result._id);
            }
        });
    }
    updateCard(id,content){
        Registration.updateOne({
            _id: id
        }, {
            $set: {
                content: content
            }
        }).catch((err) => {
            console.log('Error on updateCard: ' + err);
        });
    }
}