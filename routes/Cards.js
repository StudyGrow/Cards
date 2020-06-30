//handles all card specific routes
const express = require("express");
const { check, query, validationResult } = require("express-validator"); //uses to validate requests
const router = express.Router();

//route to get the cards from a specific lecture
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
      res.status(422).json({ errors: errors.array() }); //send errors to the client
      return;
    }

    req.services.cards.getCardsFromQuery(
      {
        vorlesung: req.query.abrv,
      },
      (err, cards) => {
        if (err) {
          res.status(501).send(err.message);
        } else {
          res.status(200).send(cards);
        }
      }
    );
  }
);

//Add card to the database
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
        res.status(501).send(err.message);
      } else {
        res.json({
          id: id, //send id of the card to the client
        });
      }
    });
  }
);

//Update Card in the database
router.put(
  "/update",
  [
    check("card._id")
      .isLength({
        min: 1,
        max: 200,
      })
      .withMessage("_id der Karte muss angegeben werden"),
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
router.post(
  "/vote",

  check("id").not().isEmpty().withMessage("Karten Id benötigt"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    }

    let vote = parseInt(req.body.value);
    req.services.votes.castVote(req, (err) => {
      if (err) {
        res.status(422).send(err.message);
      } else {
        res.status(200).json({
          vote: vote,
        });
      }
    });
  }
);

module.exports = router;
