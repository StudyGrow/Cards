const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require("path");

const app = express();
app.use(helmet());

app.use(require("./middleware/serviceMiddleware")());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet());

// router.get('*', function(req, res , next) {
//    if(req.secure == false){
//      res.redirect('https://' + req.headers.host + req.url);
//    }
//    else{
//      next()
//    }
//   })

//Logs each request
app.get("*", (req, res, next) => {
  console.log(req.url);
  next();
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
