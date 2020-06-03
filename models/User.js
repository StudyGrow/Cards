const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  creationDate: Date,
  name: String,
  surname: String,
  status: String,
  confirmed: Boolean,
  token: String,
  tokenExpiration: Date,
});

const User = (module.exports = mongoose.model("User", userSchema));
