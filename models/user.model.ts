import { model, Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  creationDate: number;
  name: string;
  surname: string;
  status: string;
  confirmed: boolean;
  token: string;
  tokenExpiration: Date;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  creationDate: Date,
  name: String,
  surname: String,
  status: String,
  confirmed: Boolean,
  token: String,
  tokenExpiration: Date,
});

export const User: Model<IUser> = model("User", userSchema);
export default model("User", userSchema);
