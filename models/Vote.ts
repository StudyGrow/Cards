import * as mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cardId: {
    type: String,
    required: true,
  },
  lectureId: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Vote", voteSchema);
