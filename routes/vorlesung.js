const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/");
});

router.get("/liste", (req, res) => {
  req.services.cards.getCardsFromQuery(
    {
      vorlesung: "BuK"
    },
    cards => {
      res.render("liste", {
        karten: cards
      });
    }
  );
});

router.post(
  "/addCard",
  [
    check("thema")
      .isLength({
        min: 3
      })
      .withMessage("Thema muss wenigstens 3 Zeichen enthalten"),
    check("thema")
      .isLength({
        max: 60
      })
      .withMessage("Thema darf nicht mehr als 25 Zeichen enthalten"),
    check("content")
      .isLength({
        min: 1
      })
      .withMessage("Inhalt muss wenigstens 1 Zeichen enthalten"),
    check("content")
      .isLength({
        max: 400
      })
      .withMessage("Inhalt darf nicht mehr als 400 Zeichen enthalten")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array()
      });
    } else {
      req.services.lectures.getLectureByQuery(
        {
          name: req.body.vorlesung
        },
        vl => {
          req.services.cards.addCard(
            vl.abrv,
            req.body.thema,
            req.body.content,
            req.body.img,
            id => {
              res.json({
                id: id
              }); //sende id an client zurück
            }
          );
        }
      );
    }
  }
);

router.post(
  "/updateCard",
  [
    check("id").isLength({
      min: 1,
      max: 25
    }),
    check("content")
      .isLength({
        min: 1
      })
      .withMessage("Inhalt muss wenigstens 1 Zeichen enthalten"),
    check("content")
      .isLength({
        max: 400
      })
      .withMessage("Inhalt darf nicht mehr als 400 Zeichen enthalten")
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors.array());
      res.status(422).json({
        errors: errors.array()
      });
    } else {
      req.services.cards.updateCard(req.body.id, req.body.content);
      res.status(200).send();
    }
  }
);
function* getCards(req) {
  var abrv = req.params.vl;
  try {
    var vl = yield req.services.lectures.getLectureByQuery({
      abrv: abrv
    });
    var cards = yield req.services.cards.getCardsFromQuery({
      vorlesung: abrv
    });
    return {
      vlTitle: vl.name,
      cards: cards
    };
  } catch (error) {
    throw error;
  }
}

router.get(
  "/:vl",
  [
    check("vl").isLength({
      min: 3,
      max: 7
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array()
      });
    } else {
      //use generators here to avoid nested callbacks
      //    try{
      //     var obj = getCards(req);
      //     res.render("Karteikarten", { karten: obj.cards, vorlesung: obj.vlTitle });
      //   }catch(error){
      //     res.status(400).send(error);
      //   }
      const p1 = new Promise((resolve, reject) => {
        try {
          req.services.lectures.getLectureByQuery(
            {
              abrv: req.params.vl
            },
            vl => resolve(vl)
          );
        } catch (error) {
          reject(error);
        }
      });

      const p2 = new Promise((resolve, reject) => {
        try {
          req.services.cards.getCardsFromQuery(
            {
              vorlesung: req.params.vl
            },
            cards => resolve(cards)
          );
        } catch (error) {
          reject(error);
        }
      });

      Promise.all([p1, p2])
        .then(values => {
          res.render("Karteikarten", {
            karten: values[1],
            vorlesung: values[0].name
          });
        })
        .catch(error => {
          console.log(error);
          res.status(400).send(error);
        });

      // req.services.lectures.getLectureByQuery(
      //   {
      //     abrv: req.params.vl
      //   },
      //   vl => {
      //     req.services.cards.getCardsFromQuery(
      //       {
      //         vorlesung: vl.abrv
      //       },
      //       cards => {
      //         res.render("Karteikarten", {
      //           karten: cards,
      //           vorlesung: vl.name
      //         });
      //       }
      //     );
      //   }
      // );
    }
  }
);

module.exports = router;
