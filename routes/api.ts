// //delegates api routes
// const express = require("express");
// const router = express.Router();

// //Lecture routes
// /**
//  * @swagger
//  * /lectures:
//  * get:
//  *  description:Vorlesungen
//  *  responses:
//  *      "200":
//  *          description: Ok
//  */
// router.use("/lectures", require("./Lectures"));
// //Card routes
// router.use("/cards", require("./Cards"));
// //User routes
// router.use("/user", require("./User"));

// router.use("/mail", require("./Mail"));

// router.get("*",(req, res) => {
//     res.status(500).send("Route not find"); //send message to client
// })
// module.exports = router;
