//This route handles user specific requests
const express = require("express");
const { check, validationResult } = require("express-validator"); //checks the request
const router = express.Router();

//create a new user account
router.post(
  "/new",
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
      }
      errors.push({
        value: req.body.password2,
        msg: "Passwort Wiederholung ungleich Passwort",
        param: "password",
        location: "body",
      });
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

router.get("/info", (req, res) => {
  req.services.user.getAccountInfo(req.user, (err, info) => {
    if (err) {
      res.status(422).send(err.message);
    } else {
      res.status(200).send(info);
    }
  });
});

//logout the user
router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send();
});

module.exports = router;
