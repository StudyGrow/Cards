const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const app = express();
app.use(helmet());

app.use(require("./middleware/serviceMiddleware")());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

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
      return done(error.message, false);
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
// router.get('*', function(req, res , next) {
//    if(req.secure == false){
//      res.redirect('https://' + req.headers.host + req.url);
//    }
//    else{
//      next()
//    }
//   })
passport.serializeUser(function (user, done) {
  if (user) done(null, user);
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});
//Logs each request
app.get("*", (req, res, next) => {
  console.log(req.url);
  next();
});
app.post("/api/user/login", (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) res.status(400).json({ statusCode: 200, message: error });
    req.login(user, function (error) {
      if (error) return next(error);
      res.status(200).send({ id: user._id, username: user.username, email: user.email });
    });
  })(req, res, next);
});

//api route
app.use("/api", require("./routes/api"));

//angular files
app.use(express.static(path.join(__dirname, "./angular-cards/dist/angular-cards/")));

//angular index.html file to always serve after client uses browser navigation
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./angular-cards/dist/angular-cards/index.html"))
);

module.exports = app;
