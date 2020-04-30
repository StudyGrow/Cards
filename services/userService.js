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
        throw new Error("Email ist bereits registriert");
      }
      user = await User.findOne({ username: form.username });
      if (user) {
        throw new Error("Benutzername existiert bereits");
      }
      registerAccount(form, callback);
    } catch (error) {
      callback(error, false);
    }
  };

  userService.login = async (form, callback) => {
    try {
      let user = await User.findOne({ username: form.username });

      if (!user) {
        throw new Error("Benutzername oder Passwort falsch");
      }
      let validation = await bcrypt.compare(form.password, user.password);

      if (validation) {
        callback(null, user);
      } else {
        throw new Error("Benutzername oder Passwort falsch");
      }
    } catch (error) {
      callback(error, null);
    }
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
