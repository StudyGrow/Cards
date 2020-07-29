require("dotenv").config();

const mongoose = require("mongoose");
const helmet = require("helmet");
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const databaseConfig = require("./config/database");

mongoose.connect(databaseConfig.database, databaseConfig.options).catch((reason) => {
  console.log("Connection to Database failed, reason: ", reason);
});

mongoose.connection.on("connected", () => {
  console.log(
    `Mongoose connection open on ${
      process.env.NODE_ENV == "development" ? "test" : "production"
    } database`
  );
});

mongoose.Promise = global.Promise;

require("./models/Card");
require("./models/Lecture");
require("./models/User");
const app = require("./app");
app.use(helmet());

app.use(helmet());

const server = app.listen(PORT, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
