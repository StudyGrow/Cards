const express = require("express");
const { check, query, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");

const session = require("express-session");
router.use(
  session({
    secret: "passport-tutorial",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

const passport = require("passport");
require("../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

//Lecture routes
//Get all Lectures
router.get("/getAllLectures", (req, res) => {
  req.services.lectures.getLectures((err, lectures) => {
    if (err) {
      console.log(err);
      res.status(422).send(err);
    } else {
      res.status(200).send(
        lectures.sort((vl1, vl2) => {
          if (vl1.name > vl2.name) {
            return 1;
          } else {
            return -1;
          }
        })
      );
    }
  });
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

    req.services.lectures.getLectureByQuery(
      {
        abrv: req.query.abrv,
      },
      (err, lecture) => {
        if (err) {
          console.log(error);
          res.status(422).send(error.message);
        } else if (lecture) {
          res.status(200).send(lecture);
        } else {
          res.status(422).send("No lecture found");
        }
      }
    );
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
    req.services.lectures.addLecture(req.body.lecture, (err) => {
      if (err) {
        res.status(422).send(err.message);
      } else {
        res.status(200).send();
      }
    });
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
      req.body.card,
      (err, id) => {
        if (err) {
          res.status(422).send(err.message);
        } else {
          res.json({
            id: id,
          }); //sende id an client zurück
        }
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
      req.services.cards.updateCard(req.body.card, (err) => {
        if (err) {
          res.status(422).send(err.message);
        } else {
          res.status(200).send();
        }
      });
    }
  }
);

//User
router.post(
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
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (req.body.password !== req.body.password2) {
      if (errors.isEmpty()) {
        errors = [];
      } else {
        errors.push({
          value: req.body.password2,
          msg: "Passwort Wiederholung ungleich Passwort",
          param: "password",
          location: "body",
        });
      }
    }
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    } else {
      req.services.user.createUser(req.body, (err, user) => {
        if (err) {
          res.status(422).send(err.message);
        } else {
          res.status(200).send({ username: user.username, email: user.email });
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    } else {
      req.services.user.login(req.body, (err, user) => {
        if (err) {
          res.status(422).json({ errors: [err.message] });
        } else {
          req.user = user;
          res
            .status(200)
            .send({ id: user._id, username: user.username, email: user.email });
        }
      });
      // passport.authenticate("local", (err, user, info) => {
      //   console.log("passport checked");
      //   if (err) {
      //     return res.status(401).send(err);
      //   }
      //   if (!user) {
      //     return res.status(401).send(new Error("!user"));
      //   }
      //   if (user) {
      //     console.log("user: ", user);
      //   }
      //   req.logIn(user, function (err) {
      //     if (err) {
      //       return res.status(400).send(err);
      //     }

      //     return res.send(user);
      //   })(req, res, next);
      // });
    }
  }
);
router.get("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.status(200).send();
    req.user = null;
  }
  // else {
  //   res.status(422).send("no user logged in");
  // }
});
module.exports = router;
