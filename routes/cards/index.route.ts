// handles all card specific routes
import { route, GET, PUT, POST, before, inject } from "awilix-express";
import { Response } from "express";
import { ICard } from "../../models/cards.model";
import CardsService from "../../services/cards.service";
import LectureService from "../../services/lecture.service";
import VotesService from "../../services/votes.service";

// route to get the cards from a specific lecture
@route("/cards")
// @before(
//   inject(({ authenticationMiddleware }) => authenticationMiddleware),
// )
export default class CardsRoute {
  constructor({ cardsService, votesService, lectureService }) {
    this.cardsService = cardsService;
    this.votesService = votesService;
    this.lectureService = lectureService;
  }
  cardsService: CardsService;
  lectureService: LectureService;
  votesService: VotesService;

  /**
   * @swagger
   *
   *  /cards:
   *    get:
   *      description: Gets cards by abbreviation
   *      produces:
   *        - application/json
   *      parameters:
   *        - name: abrv
   *          description: Abbreviation of lecture
   *          in:  query
   *          required: true
   *          type: string
   *          example: BuK
   *      responses:
   *        '200':
   *          description: Lecture data corresponding to provided lecture abbreviation
   *        '401':
   *          description: Query validation error
   *        '500':
   *          description: Error getting cards
   */
  @route("")
  @GET()
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateLectureAbbreviation()
    )
  )
  async getCardsByAbbreviation(req, res) {
    this.cardsService
      .getCardsFromQuery({
        vorlesung: req.query.abrv,
      })
      .then((cards: ICard[]) => {
        res.status(200).send(cards);
      })
      .catch((err) => {
        res
          .status(err?.status || 500)
          .send(err?.message || "Internal Server Error");
      });
  }

  /**
   * @swagger
   *  /cards/new:
   *    post:
   *      description: Add a new card
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                card:
   *                  type: object
   *                  properties:
   *                    abrv:
   *                      type: string
   *                    thema:
   *                      type: string
   *                    content:
   *                      type: string
   *                    latex:
   *                      type: number
   *                    taglist:
   *                      type: array
   *            example:
   *              card:
   *                thema: Berechenbarkeit und Komplexität
   *                abrv: BuK
   *                content: Some card content
   *                latex: 0
   *                taglist: [BuK]
   *      responses:
   *        '200':
   *          description: Card which was added
   *        '422':
   *          description: Error adding card
   *        '401':
   *          description: Unauthorized add of card not allowed
   */
  @route("/new")
  @POST()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  @before(
    inject(({ validationFactory }) => validationFactory.validateCardToAdd())
  )
  async addCard(req: any, res: Response) {
    this.cardsService
      .addCard(req.body.card, req._id)
      .then((card: ICard) => {
        res.status(200).json(card);
      })
      .catch((err) => {
        res.status(422).send(err.message);
      });
  }

  /**
   * @swagger
   *  /cards/update:
   *    put:
   *      description: Update an existing card, only user who created card can update it
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                card:
   *                  type: object
   *                  properties:
   *                    _id:
   *                      type: string
   *                    thema:
   *                      type: string
   *                    content:
   *                      type: string
   *                    latex:
   *                      type: number
   *                    taglist:
   *                      type: array
   *            example:
   *              card:
   *                _id: Berechenbarkeit und Komplexität
   *                thema: Berechenbarkeit und Komplexität
   *                abrv: BuK
   *                content: Some card content
   *                latex: 0
   *                taglist: [BuK]
   *      responses:
   *        '200':
   *          description: Card which was updated
   *        '422':
   *          description: Error updating card, Unauthorized update of card not allowed
   */
  @route("/update")
  @PUT()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  @before(
    inject(({ validationFactory }) => validationFactory.validateCardToUpdate())
  )
  async updateCard(req: any, res: Response) {
    this.cardsService
      .updateCard(req.body.card, req._id)
      .then((card: ICard) => {
        res.status(200).json(card);
      })
      .catch((err) => {
        res.status(422).send(err.message);
      });
  }

  @route("/vote")
  @PUT()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  @before(
    inject(({ validationFactory }) => validationFactory.validateVoteCardId())
  )
  async castCard(req: any, res: Response) {
    // let vote = parseInt(req.body.value);
    this.votesService
      .castVote(req)
      .then((vote) => {
        res.status(200).send(vote);
      })
      .catch((err) => {
        res.status(422).send(err.message);
      });
  }

  @route("/votes")
  @GET()
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateLectureAbbreviation()
    )
  )
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  async getLectureVotesByUser(req: any, res: Response) {
    const vote = parseInt(req.body.value);
    if (req._id) {
      this.votesService
        .getVotesByLectureAbrv(req.query.abrv, req._id)
        .then((votes) => {
          res.status(200).send(votes);
        })
        .catch((err) => {
          res.status(422).send(err.message);
        });
    } else {
      res.status(200).send([]);
    }
  }

  @route("/data")
  @GET()
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateLectureAbbreviation()
    )
  )
  @before(inject(({ authorizationMiddleware }) => authorizationMiddleware))
  async getCardsData(req, res) {
    const abrv = req.query.abrv;
    const cards = this.cardsService.findByAbrv(abrv);
    const vl = this.lectureService.findByAbrv(abrv);
    const allVotes = this.votesService.getAllVotesByLectureAbrv(abrv);
    const userId = req._id;
    let username;

    res.setHeader("Access-Control-Allow-Origin", "*");
    Promise.all([cards, vl, allVotes])
      .then(([cards, lecture, votes]) =>
        res.json({
          cards: cards,
          votes: votes,
          lecture: lecture,
          uid: userId,
          username: username,
        })
      )
      .catch((err) => {
        res.status(422).send(err.message);
      });
  }
}

// //Add MultipleChoiceCard to the database, body passed should be of form:
// // {
// //   "multipleChoiceCard": {
// //     MONGODBCARDMODELDATA
// //   }
// // }

// router.post(
//   '/newMultipleChoiceCard',
//   [
//     check('multipleChoiceCard.answers')
//       .isArray({ min: 1, max: 4 })
//       .withMessage('At least one answer and maximum 4'),
//     check('multipleChoiceCard.cardDeckID').exists().withMessage('Provide cardDeck (lecture) id'),
//     check('multipleChoiceCard.question')
//       .isLength({
//         min: 1,
//         max: 1000,
//       })
//       .exists()
//       .withMessage('Provide a question'),
//     check('multipleChoiceCard.answers.*.option')
//       .isLength({
//         min: 1,
//         max: 1000,
//       })
//       .exists()
//       .withMessage('Provide answer that should be at most 1000 long'),
//     check('multipleChoiceCard.answers.*.correct')
//       .exists()
//       .withMessage('Should specify if option correct or false'),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       res.status(422).json({
//         errors: errors.array(),
//       });
//       return;
//     } else {
//       req.services.cards.addMultipleChoiceCard(
//         req.body.multipleChoiceCard,
//         req.user,
//         (err, card) => {
//           if (err) {
//             res.status(500).send(err.message);
//           } else {
//             res.json(card);
//           }
//         }
//       );
//     }
//   }
// );

// //Update MultipleChoiceCard to the database, body passed should be of form:
// // {
// //   "multipleChoiceCard": {
// //     MONGODBCARDMODELDATA
// //   }
// // }
// router.put(
//   '/updateMultipleChoiceCard',
//   [
//     check('multipleChoiceCard.answers')
//       .isArray({ min: 1, max: 4 })
//       .withMessage('At least one answer and maximum 4'),
//     check('multipleChoiceCard.cardDeckID').exists().withMessage('Provide cardDeck (lecture) id'),
//     check('multipleChoiceCard._id').exists().withMessage('Provide id of ultipleChoiceCard'),
//     check('multipleChoiceCard.question')
//       .isLength({
//         min: 1,
//         max: 1000,
//       })
//       .exists()
//       .withMessage('Provide a question'),
//     check('multipleChoiceCard.answers.*.option')
//       .isLength({
//         min: 1,
//         max: 1000,
//       })
//       .exists()
//       .withMessage('Provide answer that should be at most 1000 long'),
//     check('multipleChoiceCard.answers.*.correct')
//       .exists()
//       .withMessage('Should specify if option correct or false'),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       res.status(422).json({
//         errors: errors.array(),
//       });
//     } else {
//       req.services.cards.updateMultipleChoiceCard(
//         req.body.multipleChoiceCard,
//         req.user,
//         (err, card) => {
//           if (err) {
//             res.status(422).send(err.message);
//           } else {
//             res.status(200).send(card);
//           }
//         }
//       );
//     }
//   }
// );
