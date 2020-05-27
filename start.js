require("dotenv").config();

const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const kill = require("./node_modules/kill-port");
const port = 8080;
const portSSL = 443;
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const MongoStore = require("connect-mongo")(session); //store session on MongoDb

// const privateKey = fs.readFileSync("/etc/letsencrypt/live/rwth-aachen.tk/privkey.pem", "utf8");
// const certificate = fs.readFileSync("/etc/letsencrypt/live/rwth-aachen.tk/cert.pem", "utf8");
// const ca = fs.readFileSync("/etc/letsencrypt/live/rwth-aachen.tk/chain.pem", "utf8");

// const credentials = {
//   key: privateKey,
//   cert: certificate,
//   ca: ca,
// };

const databaseConfig = require("./config/database");

mongoose
  .connect(databaseConfig.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((reason) => {
    console.log("Connection to Database failed, reason: ", reason);
  });

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connection open on admin database`);
});

mongoose.Promise = global.Promise;

require("./models/Card");
require("./models/Lecture");
require("./models/User");
const app = require("./app");
app.use(helmet());
app.use(
  session({
    secret: "wibgewe13f13", //random string
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }, //secure needs to be set to true here

    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

// httpServer.listen(80, () => {
//   console.log("HTTP Server running on port 80");
// });
app.use(helmet());

// httpsServer.listen(443, () => {
//   console.log("HTTPS Server running on port 443");
// });

const server = app.listen(PORT, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
