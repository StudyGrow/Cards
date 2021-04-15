import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
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
  tags: [String],
  authorId: String,
  authorName: String,
  date: Date,
  latex: Number,
  rating: Number,
});
export default mongoose.model('Card', cardSchema);
