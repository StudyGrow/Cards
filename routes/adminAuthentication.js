module.exports = function admin(req, res, next) {
  if (req.user && req.user.status === "admin") {
    next();
  } else {
    res.status(400).send("Du bist kein admin"); //send message to client
  }
};
