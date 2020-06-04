module.exports = function auth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(400).send("login required"); //send message to client
  }
};
