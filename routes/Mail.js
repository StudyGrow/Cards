const express = require("express");
const router = express.Router();

router.get("/confirmation", (req, res) => {
    req.services.mail.confirm(req.query.token, (err, info) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(200).send(info);
      }
    });
  });

  module.exports = router;
