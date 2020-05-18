//Service that provides functions associated with users
const User = require("../models/User");
const Card = require("../models/Card");
const bcrypt = require("bcryptjs"); //used to encrypt and decrypt passwords

module.exports = function userService() {
  //create a new Account for the site
  userService.createUser = async (form, callback) => {
    try {
      await checkUnique(form.email, form.username); //check if email and username are unique, will throw error
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
          res.status(200).send({ _id: user._id, username: user.username, email: user.email });
        });
    })(req, res, next);
  };

  //get account info for a user, for now only cards
  userService.getAccountInfo = async (user, callback) => {
    try {
      if (!user) {
        throw new Error("Bitte logge dich erst ein");
      }
      let info = new Object();
      let cards = await Card.find({ author: user._id });
      info.cards = cards;
      callback(null, info);
    } catch (error) {
      callback(error, null);
    }
  };

  userService.updatePassword = (user, newPassword, callback) => {
    hashPassword(newPassword, async (err, hash) => {
      if (err) {
        callback(err);
      } else {
        await User.findByIdAndUpdate(user._id, { password: hash });
        callback(null);
      }
    });
  };

  userService.updateAccount = async (user, form, callback) => {
    try {
      if (user.username == form.username && user.email == form.email) {
        callback(null);
        return;
      } else if (user.email == form.email && user.username != form.username) {
        await checkUnique(null, form.username);
      } else if (user.email != form.email && user.username == form.username) {
        await checkUnique(form.email, null);
      } else {
        await checkUnique(form.email, form.username);
      }
      await User.findByIdAndUpdate(user._id, {
        username: form.username,
        email: form.email,
        name: form.name,
        surname: form.surname,
      });
      callback(null);
    } catch (error) {
      callback(error);
    }
  };
  return userService;
};

//check if username and email provided are unique in the database
async function checkUnique(email, username) {
  let user;
  if (email) {
    user = await User.findOne({ email: email }); //check if email is already registered
  }
  if (user) {
    throw new Error("Diese Email adresse ist bereits registriert");
  }
  if (username) {
    user = await User.findOne({ username: username }); //check if username is already taken
  }

  if (user) {
    throw new Error("Der Benutzername existiert bereits");
  }
}
//function to add an account to the database
//creates a new user and decrypts the password before saving it to the database
function addAccount(form, callback) {
  let user = new User({
    username: form.username,
    email: form.email,
    creationDate: new Date(),
  });
  hashPassword(form.password, (password) => {
    user.password = password; //save password as a hash
    user.save((err, user) => {
      if (err) {
        callback(err, false);
      } else {
        callback(false, user);
      }
    });
  });
}

//generates a secure hash for the password
function hashPassword(password, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      throw err;
    }
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        callback(err, false);
      } else {
        callback(false, hash);
      }
    });
  });
}
