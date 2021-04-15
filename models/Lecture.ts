import * as mongoose from 'mongoose';

const vlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  abrv: {
    type: String,
    required: true,
  },
  tagList: [String],
  totalCards: Number,
});

const Lecture = (module.exports = mongoose.model("Lecture", vlSchema));
