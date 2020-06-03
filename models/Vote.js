const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cardId: {
    type: String,
    required: true,
  },
  vote: {
    type: Number,
    required: true,
  },
});

const User = (module.exports = mongoose.model("User", voteSchema));
