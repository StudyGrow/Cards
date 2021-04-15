import { model, Schema, Model, Document } from 'mongoose';


export interface IVote extends Document {
  userId: string;
  cardId: string;
  lectureId: [string];
  value: number;
}

const voteSchema = new Schema({
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

export const Vote:  Model<IVote>  = model('Vote', voteSchema);
export default model('Vote', voteSchema);
