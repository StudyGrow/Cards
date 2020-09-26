//This route handles user specific requests
const express = require("express");
const { check, validationResult } = require("express-validator"); //checks the request
const router = express.Router();
const auth = require("./authentication");
const admin = require("./adminAuthentication");
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
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    } else {
      req.services.user.createUser(req.body, (err, user) => {
        if (err) {
          res.status(422).send(err.message);
        } else {
          req.login(user._id, () => {});
          res.status(200).send({
            _id: user._id,
            username: user.username,
            email: user.email,
            confirmed: user.confirmed,
          });
        }
      });
    }
  }
);
router.get("/admin", admin, (req, res) => {
  res.send("Hallo admin");
});
router.get("/info", auth, (req, res) => {
  req.services.user.getAccountInfo(req.user, (err, info) => {
    if (err) {
      res.status(400).send(err.message);
    } else {
      let user = req.user;
      user.password = null;
      info.user = user;
      res.status(200).send(info);
    }
  });
});

router.get("/id", auth, (req, res) => {
  res.status(200).send(req.user._id);
});

router.put(
  "/updatePassword",
  [
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
      req.services.user.updatePassword(req.user, req.body.password, (err) => {
        if (err) {
          res.status(501).send(err.message);
        } else {
          res.status(200).send();
        }
      });
    }
  }
);

router.post("/pic", (req, res) => {
  console.log("Req.body: ", req.body);
});

router.put(
  "/updateAccount",
  [
    check("email").isEmail().withMessage("Keine gültige Email Adresse"),
    check("username")
      .isLength({
        min: 5,
        max: 20,
      })
      .withMessage("Benutzername muss zwischen 5 und 20 Zeichen enthalten"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array(),
      });
    } else {
      req.services.user.updateAccount(req.user, req.body, (err) => {
        if (err) {
          console.log(err);
          res.status(501).send(err.message);
        } else {
          res.status(200).send();
        }
      });
    }
  }
);
router.put("/delete", auth, (req, res) => {
  req.services.user.deleAccount(req, (err) => {
    if (err) {
      console.log(err);
      res.status(501).send(err.message);
    } else {
      res.send(true);
    }
  });
});

  // response body contains "true" when authenticated else "false"
router.get("/auth", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).send(true);
  } else {
    res.status(200).send(false);
  }
});
//logout the user
router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send();
});

module.exports = router;
