const express = require("express");
const { check, query, validationResult } = require("express-validator");
const router = express.Router();

router.get(
  "/",
  [
    query("abrv")
      .isLength({ min: 3, max: 7 })
      .withMessage("Lecture abreviation must be between 3 and 7 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    req.services.cards.getCardsFromQuery(
      {
        vorlesung: req.query.abrv,
      },
      (err, cards) => {
        if (err) {
          console.log(err);
          res.status(422).send(err);
        } else {
          res.status(200).send(cards);
        }
      }
    );
  }
);
//Add card to the database
//We manually fetch the user from our dataBase here.
//This is a temporary fix, the user should be bound tp the req object
// when making a post request here
router.post(
  "/new",
  [
    check("card.abrv")
      .isLength({ min: 3, max: 7 })
      .withMessage("Vorlesung Abkürzung ugültig (muss zwischen 3 und 7 Zeichen enthalten)"),
    check("card.thema")
      .isLength({
        min: 3,
        max: 60,
      })
      .withMessage("Thema muss zwischen 3 und 60 Zeichen enthalten"),
    check("card.content")
      .isLength({
        min: 1,
        max: 400,
      })
      .withMessage("Inhalt darf nicht mehr als 400 Zeichen enthalten"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
      return;
    }

    req.services.cards.addCard(req.body.card, req.user, (err, id) => {
      if (err) {
        res.status(422).send(err.message);
      } else {
        res.json({
          id: id,
        }); //sende id an client zurück
      }
    });
  }
);
//Update Card in the database
//This one will later need to check if the user is actually the author of the card
router.put(
  "/update",
  [
    check("card.thema")
      .isLength({
        min: 3,
        max: 60,
      })
      .withMessage("Thema muss zwischen 3 und 60 Zeichen enthalten"),
    check("card.content")
      .isLength({
        min: 1,
        max: 400,
      })
      .withMessage("Inhalt darf nicht mehr als 400 Zeichen enthalten"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    } else {
      req.services.cards.updateCard(req.body.card, req.user, (err) => {
        if (err) {
          res.status(422).send(err.message);
        } else {
          res.status(200).send();
        }
      });
    }
  }
);

module.exports = router;
