//Service that provides functions associated with users
import { Model } from "mongoose";
import { IUser, User } from "../models/user.model";
import { Card } from "../models/cards.model";
import bcryptjs from "bcryptjs";
import mailService from "./mail.service";

// const bcryptjs = require("bcryptjs"); //used to encrypt and decrypt passwords
// const mail = require("./mailService");
const crypto = require("crypto-random-string");
export default class UserService {
  constructor({ userModel, mailService }) {
    this.userModel = userModel;
  }
  userModel;

  createUser(user) {
    return this.userModel.create(user);
  }

  getUserByEmail(email: string) {
    return this.userModel.findOne({ email: email });
  }

  getUser(req) {
    return this.userModel.findOne(req);
  }

  updateUser(req) {
    let user = req.body;
    return this.userModel.findOneAndUpdate({ _id: user._id }, user, {
      new: true,
    });
  }

  //get account info for a user, for now only cards
  async getAccountInfo(_id) {
    if (!_id) {
      throw new Error("Bitte logge dich erst ein");
    }
    let info = Object.create({ user: "", card: "" });
    let user = await this.getUser({ _id: _id });
    info.user = { ...user._doc, password: null };
    let cards = await Card.find({ authorId: _id });
    info.cards = cards;
    return info;
  }

  async updatePassword(newPassword, _id) {
    try {
      let hashedPassword = hashPassword(newPassword);
      await User.findByIdAndUpdate(_id, { password: hashedPassword });
    } catch (e) {
      throw new Error("Error updating password");
    }
  }
  deleteAccount = async (req) => {
    await User.findByIdAndDelete(req._id);
    return true;
  };
  async updateAccount(user, form) {
    if (user.username != form.username && user.email != form.email) {
      if (user.email == form.email && user.username != form.username) {
        await this.checkUniqueUser(null, form.username);
      } else if (user.email != form.email && user.username == form.username) {
        await this.checkUniqueUser(form.email, null);
      } else {
        await this.checkUniqueUser(form.email, form.username);
      }
    }
    let updatedUser = await User.findByIdAndUpdate(
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
      user = await User.findOne({ email: email }); //check if email is already registered
    }
    if (user) {
      throw new Error("Diese Email adresse ist bereits registriert");
    }
    if (username) {
      user = await User.findOne({ username: username }); //check if username is already taken
    }

    if (user) {
      throw new Error("Der Benutzername existiert bereits");
    }
  }
}

//check if username and email provided are unique in the database
// async function checkUnique(email, username) {
//   let user;
//   if (email) {
//     user = await User.findOne({ email: email }); //check if email is already registered
//   }
//   if (user) {
//     throw new Error("Diese Email adresse ist bereits registriert");
//   }
//   if (username) {
//     user = await User.findOne({ username: username }); //check if username is already taken
//   }

//   if (user) {
//     throw new Error("Der Benutzername existiert bereits");
//   }
// }
//function to add an account to the database
//creates a new user and decrypts the password before saving it to the database
// function addAccount(form): IUser {
//   let user = new User({
//     username: form.username,
//     email: form.email,
//     creationDate: new Date(),
//     confirmed: false,
//   });
//   let newUser: IUser;
//   try {
//     let password = hashPassword(form.password);
//     user.password = password;
//     user.save((err, savedUser) => {
//       if (err) {
//         throw new Error("Error saving user");
//       } else {
//         // mailService.sendConfirmationMail(savedUser);
//         newUser = savedUser;
//       }
//     });
//     return newUser;
//   } catch (e) {
//     throw new Error("Ein unbekannter Fehler ist aufgetreten");
//   }
// }

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
