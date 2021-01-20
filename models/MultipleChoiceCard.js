const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  cardDeckID: { type: Schema.Types.ObjectId, ref: "Lecture", required: true },
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      option: { type: String, required: true },
      correct: {
        type: Boolean,
        required: true,
      },
    },
  ],
  tags: [String],
  authorId: String,
  authorName: String,
  date: Date,
  latex: Number,
  rating: Number,
});

const MultipleChoiceCard = (module.exports = mongoose.model(
  "MultipleChoiceCard",
  schema
));
