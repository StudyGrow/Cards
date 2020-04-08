const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
var co = require("co");

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
  return userService;
};
