const mongoose = require("mongoose");

const vlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  abrv: {
    type: String,
    required: true,
  },
});

const Lecture = (module.exports = mongoose.model("Lecture", vlSchema));
