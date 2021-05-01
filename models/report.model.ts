import { model, Schema, Model, Document } from "mongoose";
/**
 * Describe this fancy interface
 */
export interface IReport extends Document {
  resourceId: string;
  lectureId: string;
  resourceType: string;
  blockedById: string[]; // ids of users
}

const reportSchema = new Schema({
  resourceId: {
    type: String,
    required: true,
  },
  lectureId: {
    type: String,
  },
  resourceType: {
    type: String,
    required: true,
  },
  blockedById: {
    type: [String],
    required: true,
  },
});
// export const Report: Model<Document<IReport>> = model("Report", reportSchema);
export const Report: Model<IReport> = model("Report", reportSchema);
export default model("Report", reportSchema);
