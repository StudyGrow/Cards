//delegates api routes
const express = require("express");
const router = express.Router();

//Lecture routes
router.use("/lectures", require("./Lectures"));
//Card routes
router.use("/cards", require("./Cards"));
//User routes
router.use("/user", require("./User"));

module.exports = router;
