const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");

module.exports = function userService() {
  async function checkEmail(email) {
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log(err);
        return false;
      }
      if (user) {
        throw new Error("Email Adresse bereits registriert");
      } else {
        return true;
      }
    });
  }

  userService.createUser = (form, callback) => {
    try {
        await checkEmail(form.email);

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
    } catch (error) {
      console.log(error);
      callback(error, false);
    }
  };
  userService.login = (form, callback) => {
      
  };
  userService.logout = (user, callback) => {};
  return userService;
};
