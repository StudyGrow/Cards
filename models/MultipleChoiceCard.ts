import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const multiChoiceSchema = new mongoose.Schema({
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
  multiChoiceSchema
));
