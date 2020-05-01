const express = require("express");
const { check, query, validationResult } = require("express-validator");
const router = express.Router();

//Get all lectures
router.get("/", (req, res) => {
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

//This route could be used to find any lecture with a query that is provided by the query q
// router.get("/lecture", (req, res) => {
//   req.services.lectures.getLectureByQuery(req.query.q, (err, lecture) => {
//     if (err) {
//       console.log(error);
//       res.status(422).send(error.message);
//     } else if (lecture) {
//       res.status(200).send(lecture);
//     } else {
//       res.status(422).send("No lecture found");
//     }
//   });
// });

//Get one specific lecture
//query should include the abreviation of the lecture
router.get(
  "/find",
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

//Add lecture to the database
router.post(
  "/new",
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

module.exports = router;
