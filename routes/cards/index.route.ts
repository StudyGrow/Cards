// handles all card specific routes
import { route, GET, PUT, POST, DELETE, before, inject } from 'awilix-express';
import { Request, Response } from 'express';
import { ICard } from '../../models/cards.model';
import CardsService from '../../services/cards.service';
import LectureService from '../../services/lecture.service';
import ReportService from '../../services/report.service';
import VotesService from '../../services/votes.service';

// route to get the cards from a specific lecture
@route('/cards')
// @before(
//   inject(({ authenticationMiddleware }) => authenticationMiddleware),
// )
export default class CardsRoute {
  constructor({ cardsService, votesService, lectureService, reportService }) {
    this.cardsService = cardsService;
    this.votesService = votesService;
    this.lectureService = lectureService;
    this.reportService = reportService;
  }
  cardsService: CardsService;
  lectureService: LectureService;
  votesService: VotesService;
  reportService: ReportService;
  @route('')
  @GET()
  @before(inject(({ validationFactory }) => validationFactory.validateLectureAbbreviation()))
  async getCardsByAbbreviation(req, res) {
    this.cardsService
      .getCardsFromQuery({
        vorlesung: req.query.abrv,
      })
      .then((cards: ICard[]) => {
        res.status(200).send(cards);
      })
      .catch((err) => {
        res.status(err?.status || 500).send(err?.message || 'Internal Server Error');
      });
  }

  @route('/data')
  @GET()
  @before(inject(({ validationFactory }) => validationFactory.validateLectureAbbreviation()))
  @before(inject(({ authorizationMiddleware }) => authorizationMiddleware))
  async getCardsData(req, res) {
    const abrv = req.query.abrv;
    const cards = this.cardsService.findByAbrv(abrv, req._id);
    const vl = this.lectureService.findByAbrv(abrv);
    const allVotes = this.votesService.getAllVotesByLectureAbrv(abrv);
    const userid = req._id;
    let username;

    Promise.all([cards, vl, allVotes])
      .then(([cards, lecture, votes]) =>
        res.json({
          cards: cards,
          votes: votes,
          lecture: lecture,
          uid: userid,
          username: username,
        })
      )
      .catch((err) => {
        res.status(422).send(err.message);
      });
  }

  @route('/new')
  @POST()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  @before(inject(({ validationFactory }) => validationFactory.validateCardToAdd()))
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

  @route('/update')
  @PUT()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  @before(inject(({ validationFactory }) => validationFactory.validateCardToAdd()))
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

  @route('/vote')
  @PUT()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  @before(inject(({ validationFactory }) => validationFactory.validateVoteCardId()))
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

  @route('/votes')
  @GET()
  @before(inject(({ validationFactory }) => validationFactory.validateLectureAbbreviation()))
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
      res.status(422).send();
    }
  }

  /**
   * @swagger
   *
   * /cards/report:
   *   post:
   *     description: Report a card
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: resourceId
   *         description: The id of the card to be reported
   *         in:  body
   *         required: true
   *         type: string
   *         example: <resourceId>
   *       - name: lectureId
   *         description: The lecture id where the card belongs to
   *         in:  body
   *         required: true
   *         type: string
   *         example: <lectureId>
   *     responses:
   *       200:
   *         description: Returns the id of the blocked card
   *         content:
   *          application/json:
   *              schema:
   *                type: string
   *                example: {}
   */
  @route('/report')
  @POST()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  @before(inject(({ validationFactory }) => validationFactory.validateReportCard()))
  async reportCard(req: any, res: Response) {
    if (req._id) {
      const resourceId = req.body.resourceId;
      const lectureId = req.body.lectureId;
      this.reportService
        .reportResource({ resourceId: resourceId, resourceType: 'card' }, req._id, lectureId)
        .then((blockedResource) => {
          res.status(200).send(blockedResource);
        })
        .catch((err) => {
          res.status(422).send(err.message);
        });
    } else {
      res.status(422).send();
    }
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
