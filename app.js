const express = require("express");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.use(require("./middleware/serviceMiddleware")());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);
app.use(helmet());
module.exports = app;
