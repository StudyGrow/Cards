const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const app = express();
app.use(helmet());

app.use(require("./middleware/serviceMiddleware")());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "wibgewe13f13", //random string
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

require("./config/passport")(passport);

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

//Logs each request
// app.get("*", (req, res, next) => {
//   console.log(req.url);
//   if (req.user) {
//     console.log("user:", req.user.username);
//   }
//   next();
// });
app.post("/api/login", (req, res, next) => {
  req.services.user.login(passport, req, res, next);
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
