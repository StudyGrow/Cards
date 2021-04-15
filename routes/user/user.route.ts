import { route, GET, PUT, POST, DELETE, before, inject } from "awilix-express";
import userService from "../../services/user.service";

//route to get the cards from a specific lecture
@route("/user")
export default class UserRoute {
  constructor({ userService }) {
    this.userService = userService;
  }
  userService: userService;

  @route("/new")
  @POST()
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateUserPassword()
    )
  )
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateUserUsername()
    )
  )
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateUserEmail()
    )
  )
  async registerUser(req, res) {
    this.userService
      .createUser(req.body)
      .then((user) => {
        req.login(user._id, () => {});
        res.status(200).send({
          _id: user._id,
          username: user.username,
          email: user.email,
          confirmed: user.confirmed,
        });
      })
      .catch((err) => {
        res.status(422).send(err.message);
      });
  }

  @route("/admin")
  @GET()
  async getAdmin(req, res) {
    res.send("Hallo admin");
  }

  @route("/id")
  @GET()
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateLectureAbbreviation()
    )
  )
  async getUserId(req, res) {
    res.status(200).send(req.user._id);
  }

  @route("/info")
  @GET()
  async getUserInfo(req, res) {
    this.userService
      .getAccountInfo(req.user)
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
    inject(({ validationFactory }) =>
      validationFactory.validateUserPassword()
    )
  )
  async updateUserPassword(req, res) {
    this.userService
      .updatePassword(req.user, req.body.password)
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
    inject(({ validationFactory }) =>
      validationFactory.validateUserUsername()
    )
  )
  @before(
    inject(({ validationFactory }) =>
      validationFactory.validateUserEmail()
    )
  )
  async updateUserAccount(req, res) {
    this.userService
      .updateAccount(req.user, req.body)
      .then(() => {
        res.status(200).send();
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

  @route("/auth")
  @GET()
  async checkIfUserAuthenticated(req, res) {
    // if (req.isAuthenticated()) {
      // res.status(200).send(true);
    // } else {
      res.status(200).send(false);
    // }
  }

  @route("/logout")
  @GET()
  async logoutUser(req, res) {
    req.logout();
    res.send(true);
  }
}
