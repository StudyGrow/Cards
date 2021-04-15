import { model, Schema, Model, Document } from 'mongoose';

export interface ILecture extends Document {
  name: string;
  abrv: string;
  tagList: [string];
  totalCards: number;
}

const vlSchema = new Schema({
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
export const Lecture:  Model<ILecture>  = model('Lecture', vlSchema);
export default model('Lecture', vlSchema);
