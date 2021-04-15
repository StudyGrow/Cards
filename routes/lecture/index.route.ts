import { route, GET, PUT, POST, DELETE, before, inject } from "awilix-express";
import { ILecture } from "../../models/lecture.model";
import LectureService from "../../services/lecture.service";

//route to get the cards from a specific lecture
@route("/lectures")
export default class LectureRoute {
  constructor({ lectureService }) {
    this.lectureService = lectureService;
  }
  lectureService: LectureService;
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

  @route("/new")
  @POST()
  @before(
    inject(({ validationFactory }) => validationFactory.validateLectureToAdd())
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

  @route("/check")
  @POST()
  @before(
    inject(({ validationFactory }) => validationFactory.validateLectureToAdd())
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
