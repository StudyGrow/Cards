import { model, Schema, Model, Document } from "mongoose";
export interface ICard extends Document {
  vorlesung: string;
  thema: string;
  content: string;
  tags: string[];
  authorId: string;
  authorName: string;
  date: Date;
  latex: number;
  rating: number; // ????
}

const cardSchema = new Schema({
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
export const Card: Model<ICard> = model("Card", cardSchema);
export default model("Card", cardSchema);
