const express = require("express");
const { check, query, validationResult } = require("express-validator");
const router = express.Router();
const passport = require("passport");

require("../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

//Lecture routes
//Get all Lectures
router.get("/getAllLectures", (req, res) => {
  try {
    req.services.lectures.getLectures((lectures) => {
      res.status(200).send(
        lectures.sort((vl1, vl2) => {
          if (vl1.name > vl2.name) {
            return 1;
          } else {
            return -1;
          }
        })
      );
    });
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
});
//Get one specific lecture
//query should include the abreviation of the lecture
router.get(
  "/getLecture",
  [
    query("abrv")
      .isLength({ min: 3, max: 7 })
      .withMessage(
        "Please provide a valid lecture abreviation (must be between 3 and 7 characters)"
      ),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array });
      return;
    }
    try {
      req.services.lectures.getLectureByQuery(
        {
          abrv: req.query.abrv,
        },
        (lecture) => res.status(200).send(lecture)
      );
    } catch (error) {
      console.log(error);
      res.status(422).send(error);
    }
  }
);
//Add Lecture to the database
router.post(
  "/addLecture",
  [
    check("lecture.abrv")
      .isLength({ min: 3, max: 7 })
      .withMessage(
        "Please provide a valid lecture abreviation (must be between 3 and 7 characters)"
      ),
    check("lecture.name")
      .isLength({ min: 1, max: 60 })
      .withMessage("Lecture name must be between between 1 and 60 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array });
      return;
    }
    req.services.lectures.addLecture(
      req.body.lecture.name,
      req.body.lecture.abrv
    );
    res.status(200).send();
  }
);

//Cards routes
//Get Cards from a specific lecture
//query should include the abreviation of the lecture which the cards belong to
router.get(
  "/getCards",
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
    try {
      req.services.cards.getCardsFromQuery(
        {
          vorlesung: req.query.abrv,
        },
        (cards) => res.status(200).send(cards)
      );
    } catch (error) {
      console.log(error);
      res.status(422).send(error);
    }
  }
);
//Add card to the database
router.post(
  "/addCard",
  [
    check("abrv")
      .isLength({ min: 3, max: 7 })
      .withMessage("Lecture abreviation must be between 3 and 7 characters"),
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

    req.services.cards.addCard(
      req.body.abrv, //Cards need to be saved as a
      req.body.card.thema,
      req.body.card.content,
      req.body.img,
      (id) => {
        res.json({
          id: id,
        }); //sende id an client zurück
      }
    );
  }
);
//Update Card in the database
router.put(
  "/updateCard",
  [
    check("card.abrv")
      .isLength({ min: 3, max: 7 })
      .withMessage("Lecture abreviation must be between 3 and 7 characters"),
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
      req.services.cards.updateCard(
        req.body.card._id,
        req.body.card.thema,
        req.body.card.content
      );
      res.status(200).send();
    }
  }
);

//User
router.get(
  "/createAccount",
  [
    check("email").isEmail().withMessage("Keine gültige Email Adresse"),
    check("username")
      .isLength({
        min: 5,
        max: 20,
      })
      .withMessage("Benutzername muss zwischen 5 und 20 Zeichen enthalten"),
    check("password")
      .isLength({ min: 7 })
      .withMessage("Passwort muss mindestens 7 Zeichen enthalten"),
    check("password2")
      .equals("password")
      .withMessage("Passwort Wiederholung ungleich Passwort"),
  ],
  (req, res) => {
    console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    } else {
      req.services.user.createAccout(req.body, (err, user) => {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        } else {
          res.status(200).send(user);
        }
      });
    }
  }
);
router.post(
  "/login",
  [
    check("username")
      .isLength({
        min: 5,
        max: 20,
      })
      .withMessage("Benutzername muss zwischen 5 und 20 Zeichen enthalten"),
    check("password")
      .isLength({ min: 7 })
      .withMessage("Passwort muss mindestens 7 Zeichen enthalten"),
  ],
  (req, res) => {
    console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    } else {
      passport.authenticate(
        "local",
        { session: req.body.remember },
        (err, user, info) => {
          if (err) {
            console.log(err);
            return res.status(400).send(err);
          }
          if (!user) {
            return res.status(400).send(new Error("!user"));
          }
          req.logIn(user, function (err) {
            if (err) {
              return res.status(400).send(err);
            }
            return res.send(user);
          })(req, res, next);
        }
      );
    }
  }
);
router.get("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.status(200).send();
  } else {
    res.send(400).send(new Error("no user logged in"));
  }
});
module.exports = router;
