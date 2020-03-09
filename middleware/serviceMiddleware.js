const cardsService = require('../services/cardsService');
const vlService = require('../services/vorlesungenService');

function serviceMiddleware() {
    return function (req, res, next) {
        req.services.cardsService = cardsService;
        req.services.vlService = vlService;
        next();
    };
}
module.exports = serviceMiddleware;