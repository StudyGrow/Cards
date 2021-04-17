import { route, GET, PUT, POST, DELETE, before, inject } from "awilix-express";
import { ILecture } from "../../models/lecture.model";
import LectureService from "../../services/lecture.service";
import MailService from "../../services/mail.service";

//route to get the cards from a specific lecture
@route("/mail")
export default class LectureRoute {
  constructor({ mailService }) {
    this.mailService = mailService;
  }
  mailService: MailService;

  @route("/confirmation")
  @GET()
  async confirmUserAccount(req, res) {
    this.mailService
      .confirm(req.query.token)
      .then((info) => {
        res.status(200).send(info);
      })
      .catch((err) => {
        res.status(200).send(err);
      });
  }
}