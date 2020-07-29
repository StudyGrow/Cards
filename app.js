const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session); //store session on MongoDb
const app = express();
const mongoose = require("mongoose");
app.use(helmet());
app.use(require("./middleware/serviceMiddleware")());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.enable("trust proxy");
app.use(
  session({
    secret: "wibgewe13f13", //random string
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: { secure: process.env.NODE_ENV == "development" ? false : true }, //secure needs to be set to true for production here

    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

const passport = require("passport");

require("./config/passport")(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  if (process.env.NODE_ENV == "development") {
    console.log("Request: ", req.originalUrl);
  }
  next();
});

app.post("/api/login", (req, res, next) => {
  req.services.user.login(passport, req, res, next);
});

//api route
app.use("/api", require("./routes/api"));

//built angular files
app.use(express.static(path.join(__dirname, "./angular-cards/dist/angular-cards/")));

//angular index.html file to always serve after client uses browser navigation
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./angular-cards/dist/angular-cards/index.html"))
);

module.exports = app;
