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
        const card = new Card();
        Card.vorlesung = abrv;
        Card.thema=title;
        Card.content=content;
        Card.img=img;
        
        card.save((err, result) => {
            if (err) {
                console.log(err);
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