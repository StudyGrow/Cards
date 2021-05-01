// Service that provides functions associated with users
import { Card } from "../models/cards.model";
import bcryptjs from "bcryptjs";
import mailService from "./mail.service";

// const bcryptjs = require("bcryptjs"); //used to encrypt and decrypt passwords
// const mail = require("./mailService");
import crypto from "crypto-random-string";
import { getModelForClass } from "@typegoose/typegoose";
import { Report } from "../models/report.model";
export default class UserService {
  constructor({
    userModel,
    mailService,
    reportService,
    cardsModel,
    lectureModel,
  }) {
    this.userModel = userModel;
    this.reportService = reportService;
    this.cardsModel = cardsModel;
    this.lectureModel = lectureModel;
  }
  userModel;
  cardsModel;
  lectureModel;
  reportService;

  createUser(user) {
    return this.userModel.create(user);
  }

  getUserByEmail(email: string) {
    return this.userModel.findOne({ email: email });
  }

  getUser(query) {
    return this.userModel.findOne(query).lean();
  }

  updateUser(req) {
    const user = req.body;
    return this.userModel.findOneAndUpdate({ _id: user._id }, user, {
      new: true,
    });
  }

  // get account info for a user, for now only cards
  async getAccountInfo(_id) {
    if (!_id) {
      throw new Error("Bitte logge dich erst ein");
    }
    const info = Object.create({ user: "", card: "" });
    const user = await this.getUser({ _id: _id });
    info.user = { ...user, password: null };
    const cards = await Card.find({ authorId: _id }).lean();
    info.cards = cards;
    if (user.status === "admin") {
      const reports = await getModelForClass(Report)
        .find({})
        .select("resourceId")
        .lean();
      const cleanedReports = reports.map((report) => report.resourceId);
      const models = [];
      models.push(this.cardsModel);
      models.push(this.lectureModel);

      const reportedResources = await Promise.all(
        models.map((model) =>
          model
            .find({
              _id: { $in: cleanedReports },
            })
            .lean()
        )
      );

      info.reports = {
        cards: reportedResources[0],
        lectures: reportedResources[1],
      };
      return info;
    }
  }

  async updatePassword(newPassword, _id) {
    try {
      const hashedPassword = hashPassword(newPassword);
      await this.userModel.findByIdAndUpdate(_id, { password: hashedPassword });
    } catch (e) {
      throw new Error("Error updating password");
    }
  }
  deleteAccount = async (req) => {
    await this.userModel.findByIdAndDelete(req._id);
    return true;
  };
  async updateAccount(_id, form) {
    const user = await this.getUser({ _id: _id });
    if (user.username != form.username && user.email != form.email) {
      if (user.email == form.email && user.username != form.username) {
        await this.checkUniqueUser(null, form.username);
      } else if (user.email != form.email && user.username == form.username) {
        await this.checkUniqueUser(form.email, null);
      } else {
        await this.checkUniqueUser(form.email, form.username);
      }
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(
      user._id,
      {
        username: form.username,
        email: form.email,
        name: form.name,
        surname: form.surname,
      },
      {
        new: true,
      }
    );
    return updatedUser;
  }

  async checkUniqueUser(email: string, username: string) {
    let user;
    if (email) {
      user = await this.userModel.findOne({ email: email }); // check if email is already registered
    }
    if (user) {
      throw new Error("Diese Email adresse ist bereits registriert");
    }
    if (username) {
      user = await this.userModel.findOne({ username: username }); // check if username is already taken
    }

    if (user) {
      throw new Error("Der Benutzername existiert bereits");
    }
  }
}

// generates a secure hash for the password
function hashPassword(password): string {
  let hashedPassword;
  bcryptjs.genSalt(10, (err, salt) => {
    if (err) {
      throw err;
    }
    bcryptjs
      .hash(password, salt)
      .then((hash) => {
        hashedPassword = hash;
      })
      .catch((e) => {
        throw new Error(e);
      });
  });
  return hashedPassword;
}
