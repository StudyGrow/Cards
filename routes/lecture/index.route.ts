import { route, GET, PUT, POST, DELETE, before, inject } from "awilix-express";
import { ILecture } from "../../models/lecture.model";
import LectureService from "../../services/lecture.service";

// route to get the cards from a specific lecture
@route("/lectures")
export default class LectureRoute {
  constructor({ lectureService }) {
    this.lectureService = lectureService;
  }
  lectureService: LectureService;

  /**
   * @swagger
   *
   *  /lectures:
   *    get:
   *      description: Public endpoint to get all lectures
   *      produces:
   *        - application/json
   *      responses:
   *        '200':
   *          description: List of all lectures
   *        '500':
   *          description: Error getting lectures
   */
  @route("")
  @GET()
  async getAllLectures(req, res) {
    this.lectureService
      .getLectures()
      .then((lectures: ILecture[]) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).send(lectures);
      })
      .catch((err) => {
        res
          .status(err?.status || 500)
          .send(err?.message || "Internal Server Error");
      });
  }

  /**
   * @swagger
   *
   *  /lectures/find:
   *    get:
   *      description: Get lecture data for given abbreviation
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
   */
  @route("/find")
  @GET()
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateLectureAbbreviation()
    )
  )
  async getLecturesByAbbreviation(req, res) {
    this.lectureService
      .getLectureByQuery({
        abrv: req.query.abrv,
      })
      .then((lecture: ILecture) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).send(lecture);
      })
      .catch((err) => {
        res
          .status(err?.status || 501)
          .send(err?.message || "Internal Server Error");
      });
  }

  /**
   * @swagger
   *  /lectures/new:
   *    post:
   *      description: Add new lecture
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                lecture:
   *                  type: object
   *                  properties:
   *                    name:
   *                      type: string
   *                    abrv:
   *                      type: string
   *                    taglist:
   *                      type: array
   *            example:
   *              lecture:
   *                name: Berechenbarkeit und Komplexität
   *                abrv: BuK
   *                taglist: [BuK]
   *      responses:
   *        '204':
   *          description: Lecture added successfully
   *        '501':
   *          description: Error adding lecture
   *        '401':
   *          description: Unauthorized add of lecture not allowed
   */
  @route("/new")
  @POST()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  @before(
    inject(({ validationFactory }) => validationFactory.validateLecture())
  )
  async addLecture(req, res) {
    this.lectureService
      .addLecture(req.body.lecture)
      .then((lecture: ILecture) => {
        res.status(200).send(lecture);
      })
      .catch((err) => {
        res
          .status(err?.status || 501)
          .send(err?.message || "Internal Server Error");
      });
  }

  /**
   * @swagger
   *  /lectures/check:
   *    post:
   *      description: Check if lecture with provided information exists
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                lecture:
   *                  type: object
   *                  properties:
   *                    name:
   *                      type: string
   *                    abrv:
   *                      type: string
   *            example:
   *              lecture:
   *                name: Berechenbarkeit und Komplexität
   *                abrv: BuK
   *      responses:
   *        '204':
   *          description: Lecture does not exist
   *        '501':
   *          description: Lecture does exist already
   */
  @route("/check")
  @POST()
  @before(
    inject(({ validationFactory }) => validationFactory.validateLecture())
  )
  async checkUniqueLecture(req, res) {
    this.lectureService
      .checkUnique(req.body.lecture)
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        res
          .status(err?.status || 501)
          .send(err?.message || "Internal Server Error");
      });
  }
}
