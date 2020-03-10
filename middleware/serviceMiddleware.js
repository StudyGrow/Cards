const cardsService = require('../services/cardsService');
const vlService = require('../services/vorlesungenService');
const services = require('../services');

function serviceMiddleware() {
    return function (req, res, next) {
        req.services = services;
        next();
    };
}
module.exports = serviceMiddleware;