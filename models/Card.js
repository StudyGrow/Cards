const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  vorlesung: {
    type: String,
    trim: true,
    required: true,
  },
  thema: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  img: {
    type: Buffer,
  },
  author: String,
  date: Date,
});

const Card = (module.exports = mongoose.model("Card", schema));
