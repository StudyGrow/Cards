import { route, GET, PUT, POST, DELETE, before, inject } from "awilix-express";
import { Response } from "express";
import userService from "../../services/user.service";

//route to get the cards from a specific lecture
@route("/user")
@before(inject(({ authorizationMiddleware }) => authorizationMiddleware))
export default class UserRoute {
  constructor({ userService }) {
    this.userService = userService;
  }
  userService: userService;

  @route("/id")
  @GET()
  async getUserId(req, res) {
    res.status(200).send(req._id);
  }

  @route("/info")
  @GET()
  async getUserInfo(req, res) {
    this.userService
      .getAccountInfo(req._id)
      .then((info) => {
        res.status(200).send(info);
      })
      .catch((err) => {
        res.status(400).send(err.message);
      });
  }

  @route("/updatePassword")
  @PUT()
  @before(
    inject(({ validationFactory }) => validationFactory.validateUserNewPassword())
  )
  async updateUserPassword(req, res) {
    this.userService
      .updatePassword(req.body.password, req._id)
      .then(() => {
        res.status(200).send();
      })
      .catch((err) => {
        res.status(400).send(err.message);
      });
  }

  @route("/updateAccount")
  @PUT()
  @before(
    inject(({ validationFactory }) => validationFactory.validateUserUserUpdate())
  )
  async updateUserAccount(req, res) {
    this.userService
      .updateAccount(req._id, req.body)
      .then((updatedUser) => {
        res.status(200).send(updatedUser);
      })
      .catch((err) => {
        res.status(501).send(err.message);
      });
  }

  @route("/delete")
  @DELETE()
  async deleteUserAccount(req, res) {
    this.userService
      .deleteAccount(req)
      .then(() => {
        res.status(200).send(true);
      })
      .catch((err) => {
        res.status(501).send(err.message);
      });
  }
}
