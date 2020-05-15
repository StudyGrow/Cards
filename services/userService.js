//Service that provides functions associated with users
const User = require("../models/User");
const Card = require("../models/Card");
const bcrypt = require("bcryptjs"); //used to encrypt and decrypt passwords

module.exports = function userService() {
  //create a new Account for the site
  userService.createUser = async (form, callback) => {
    try {
      let user;
      user = await User.findOne({ email: form.email }); //check if email is already registered
      if (user) {
        throw new Error("Diese Email adresse ist bereits registriert");
      }
      user = await User.findOne({ username: form.username }); //check if username is already taken
      if (user) {
        throw new Error("Der Benutzername existiert bereits");
      }
      addAccount(form, callback); //add the account to the database
    } catch (error) {
      callback(error, false);
    }
  };

  //Login the user
  userService.login = async (passport, req, res, next) => {
    passport.authenticate("local", (error, user, info) => {
      //authenticate the user using the local strategy for passport
      if (error) res.status(422).send(error.message);
      else
        req.login(user._id, function (error) {
          if (error) res.status(422).send(error.message);
          res.status(200).send({ username: user.username, email: user.email });
        });
    })(req, res, next);
  };

  //get account info for a user, for now only cards
  userService.getAccountInfo = async (user, callback) => {
    try {
      if (!user) {
        throw new Error("No user provided");
      }
      let info;
      let cards = await Card.find({ author: user.username });
      info.cards = cards;
      callback(null, info);
    } catch (error) {
      callback(error, null);
    }
  };

  return userService;
};

//function to add an account to the database
//creates a new user and decrypts the password before saving it to the database
function addAccount(form, callback) {
  let user = new User({
    username: form.username,
    email: form.email,
    password: form.password,
  });
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      throw err;
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      user.password = hash;
      return user.save((err, user) => {
        if (err) {
          callback(err, false);
        } else {
          callback(false, user);
        }
      });
    });
  });
}
