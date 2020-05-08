const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(async function (username, password, done) {
      try {
        let user = await User.findOne({ username: username });

        if (!user) {
          throw new Error("Benutzername oder Passwort falsch");
        }
        let validation = await bcrypt.compare(password, user.password);

        if (validation) {
          return done(null, user);
        } else {
          throw new Error("Benutzername oder Passwort falsch");
        }
      } catch (error) {
        console.log(error);
        return done(null, false, { message: error.message });
      }
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
