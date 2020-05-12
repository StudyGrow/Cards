const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = function userService() {
  function registerAccount(form, callback) {
    let user = new User({
      username: form.username,
      email: form.email,
      password: form.password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        throw err;
      }
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          throw err;
        }
        user.password = hash;
        return user.save((err, user) => {
          if (err) {
            callback(err, false);
          } else {
            callback(false, user);
          }
        });
      });
    });
  }

  userService.createUser = async (form, callback) => {
    try {
      let user;
      user = await User.findOne({ email: form.email });
      if (user) {
        throw new Error("Diese Email adresse ist bereits registriert");
      }
      user = await User.findOne({ username: form.username });
      if (user) {
        throw new Error("Der Benutzername existiert bereits");
      }
      registerAccount(form, callback);
    } catch (error) {
      callback(error, false);
    }
  };

  userService.login = async (passport, req, res, next) => {
    passport.authenticate("local", (error, user, info) => {
      if (error) res.status(400).json({ statusCode: 200, message: error });
      req.login(user._id, function (error) {
        if (error) return next(error);
        res.status(200).send({ username: user.username, email: user.email });
      });
    })(req, res, next);
  };
  userService.findUser = async (query, callback) => {
    try {
      let user = await User.findOne(query);
      callback(null, user);
    } catch (error) {
      callback(error, null);
    }
  };
  return userService;
};
