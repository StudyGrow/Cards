const mongoose = require('mongoose');
const Card = mongoose.model('Registration');

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
        const card = new Card(abrv, title, content, img);
        console.log(card);
        card.save((err, result) => {
            if (err) {
                throw (err);
            } else {
                callback(result._id);
            }
        });
    };
    cardsService.updateCard = (id, content) => {
        Card.updateOne({
            _id: id
        }, {
            $set: {
                content: content
            }
        }).catch((err) => {
            console.log('Error on updateCard: ' + err);
        });
    };
    return cardsService;
}