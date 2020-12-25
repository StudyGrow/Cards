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

//returns cards as well as metadata
router.get(
  "/data",
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
    let abrv = req.query.abrv;
    let cards = req.services.cards.findByAbrv(abrv);
    let vl = req.services.lectures.findByAbrv(abrv);
    let userid;
    let username;
    if (req.isAuthenticated()) {
      userid = req.user._id;
    }

    Promise.all([cards, vl]).then(([cards, lecture]) => {
      res.json({ cards: cards, lecture: lecture, uid: userid, username: username });
    });
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
        max: 500,
      })
      .withMessage("Thema muss zwischen 3 und 500 Zeichen enthalten"),
    check("card.content")
      .isLength({
        min: 1,
        max: 1000,
      })
      .withMessage("Inhalt darf nicht mehr als 1000 Zeichen enthalten"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
      return;
    }

    req.services.cards.addCard(req.body.card, req.user, (err, card) => {
      if (err) {
        res.status(501).send(err.message);
      } else {
        res.json(card);
      }
    });
  }
);

// router.get("/renew", (req, res) => {
//   req.services.cards.renew();
//   res.send();
// });

//Update Card in the database
router.put(
  "/update",
  [
    check("card._id")
      .isLength({
        min: 1,
        max: 500,
      })
      .withMessage("_id der Karte muss angegeben werden"),
    check("card.thema")
      .isLength({
        min: 3,
        max: 500,
      })
      .withMessage("Thema muss zwischen 3 und 500 Zeichen enthalten"),
    check("card.content")
      .isLength({
        min: 1,
        max: 1000,
      })
      .withMessage("Inhalt darf nicht mehr als 1000 Zeichen enthalten"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    } else {
      req.services.cards.updateCard(req.body.card, req.user, (err, card) => {
        if (err) {
          res.status(422).send(err.message);
        } else {
          res.status(200).send(card);
        }
      });
    }
  }
);

module.exports = router;
