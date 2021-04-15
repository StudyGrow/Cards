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
  userModel: Model<IUser, {}>;
  //create a new Account for the site
  async createUser(form) {
    await checkUnique(form.email, form.username); //check if email and username are unique, will throw error
    return addAccount(form); //add the account to the database
  }

  //Login the user
  login = async (passport, req, res, next) => {
    passport.authenticate(
      "local",
      { session: req.body.enable_session === true },
      (error, user, info) => {
        //authenticate the user using the local strategy for passport
        if (error) res.status(401).send(error.message);
        else
          req.login(user._id, function (error) {
            if (error) {
              res.status(401).send(error.message);
            } else {
              res.status(200).send({
                _id: user._id,
                username: user.username,
                email: user.email,
              });
            }
          });
      }
    )(req, res, next);
  };

  //get account info for a user, for now only cards
  async getAccountInfo(user){
      if (!user) {
        throw new Error("Bitte logge dich erst ein");
      }
      let info = new Object();
      // info.user = { ...user._doc, password: null };

      let cards = await Card.find({ authorId: user._id });
      // info.cards = cards;
      return info;

  };

  async updatePassword(user, newPassword) {
    try {
      let hashedPassword = hashPassword(newPassword);
      await User.findByIdAndUpdate(user._id, { password: hashedPassword });
    } catch (e) {
      throw new Error("Error updating password");
    }
  }
  deleteAccount = async (req) => {
      await User.findByIdAndDelete(req.user._id);
      return true;
  };
  async updateAccount(user, form){
      if (user.username != form.username && user.email != form.email) {
        if (user.email == form.email && user.username != form.username) {
          await checkUnique(null, form.username);
        } else if (user.email != form.email && user.username == form.username) {
          await checkUnique(form.email, null);
        } else {
          await checkUnique(form.email, form.username);
        }
      }
      await User.findByIdAndUpdate(user._id, {
        username: form.username,
        email: form.email,
        name: form.name,
        surname: form.surname,
      });
      return true;
  };
}

//check if username and email provided are unique in the database
async function checkUnique(email, username) {
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
//function to add an account to the database
//creates a new user and decrypts the password before saving it to the database
function addAccount(form): IUser {
  let user = new User({
    username: form.username,
    email: form.email,
    creationDate: new Date(),
    confirmed: false,
    token: crypto(32),
  });
  let newUser: IUser;
  try {
    let password = hashPassword(form.password);
    user.password = password;
    user.save((err, savedUser) => {
      if (err) {
        throw new Error("Error saving user");
      } else {
        // mailService.sendConfirmationMail(savedUser);
        newUser = savedUser;
      }
    });
    return newUser;
  } catch (e) {
    throw new Error("Ein unbekannter Fehler ist aufgetreten");
  }
}

//generates a secure hash for the password
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
