const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");

module.exports = function userService() {
  function checkEmail(form, callback) {
    User.findOne({ email: form.email }, (err, user) => {
      if (err) {
        throw err;
      }
      if (user) {
        throw new Error("Email Adresse bereits registriert");
      }
      callback();
    });
  }
  function checkUsername(form, callback) {
    User.findOne({ username: form.username }, (err, user) => {
      if (err) {
        throw err;
      }
      if (user) {
        throw new Error("Benutzername existiert bereits");
      } else {
        callback();
      }
    });
  }
  userService.createUser = (form, callback) => {
    try {
      checkEmail(form, () => {
        checkUsername(form, () => {
          let user = new User({ username: form.username, email: form.email });
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              throw err;
            }
            bcrypt.hash(form.password, salt, (err, hash) => {
              if (err) {
                throw err;
              }
              user.password = hash;
              user.save((err, user) => {
                if (err) {
                  throw err;
                }
                callback(false, user);
              });
            });
          });
        });
      });
    } catch (error) {
      console.log(error);
      callback(error, false);
    }
  };
  return userService;
};
