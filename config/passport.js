const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const config = require("./database");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "username", passwordField: "password" },
      function (username, password, done) {
        console.log("HI");
        User.findOne({ username: username }, (err, user) => {
          if (err) throw err;
          if (!user) {
            return done(null, false, {
              message: "Benutzername oder Passwort falsch",
            });
          }
          bcrypt.compare(password, user.password, (err, matched) => {
            if (err) throw err;
            if (matched) {
              return done(null, user);
            } else {
              return done(null, false, {
                message: "Benutzername oder Passwort falsch",
              });
            }
          });
        });
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
