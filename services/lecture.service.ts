import { Model } from "mongoose";
import { ILecture, Lecture } from "../models/lecture.model";

export default class LectureService {
  constructor({ lectureModel }) {
    this.lectureModel = lectureModel;
  }
  lectureModel: Model<ILecture, {}>;
  //returns all lectures in the database
  getLectures = async () => {
    let lectures = await this.lectureModel
      .find()
      .select("abrv name totalCards")
      .sort("name");
    return lectures;
  };

  findByAbrv = async (abrv) => {
    return await this.lectureModel
      .findOne({ abrv: abrv })
      .select("abrv name tagList totalCards");
  };

  //Returns the first lecture that matches the query
  getLectureByQuery = async (query) => {
    let lecture = await this.lectureModel.findOne(query);
    return lecture;
  };

  //adds a lecture to the database
  addLecture = async (lecture) => {
    await checkUniqueAbrv(lecture.abrv);
    await checkUniqueName(lecture.name);

    const vl = new Lecture();
    vl.name = lecture.name.trim();
    vl.abrv = lecture.abrv.trim().toLowerCase();

    var savedLecture = await vl.save();
    return savedLecture;
  };

  checkUnique = async (lecture) => {
    await checkUniqueName(lecture.name);
    await checkUniqueAbrv(lecture.abrv);
    return true;
  };
}
async function checkUniqueAbrv(abrv) {
  const vl = await this.lectureModel.findOne({ abrv: abrv });
  if (vl)
    throw new Error("Eine Vorlesung mit dieser Abkürzung existiert bereits.");
}

async function checkUniqueName(name) {
  const vl = await this.lectureModel.findOne({ name: name });
  if (vl) throw new Error("Eine Vorlesung mit diesem Namen existiert bereits.");
}
