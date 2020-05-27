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
        return done(error);
      }
    })
  );

  passport.serializeUser(function (user, done) {
    if (user) done(null, user);
    else console.log("errrr");
  });

  passport.deserializeUser(function (user, done) {
    done(err, user);
  });
};
