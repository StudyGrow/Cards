const express = require("express");
const path = require("path");
const router = express.Router();

// router.get('*', function(req, res , next) {
//    if(req.secure == false){
//      res.redirect('https://' + req.headers.host + req.url);
//    }
//    else{
//      next()
//    }
//   })

//api route
router.use("/api", require("../routes/api"));

//angular files
router.use(
  express.static(path.join(__dirname, "../angular-cards/dist/angular-cards/"))
);

//angular index.html file to always serve after client uses browser navigation
router.get("*", (req, res) =>
  res.sendFile(
    path.join(__dirname, "../angular-cards/dist/angular-cards/index.html")
  )
);

module.exports = router;
