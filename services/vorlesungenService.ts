const mongoose = require("mongoose");
const Lecture = mongoose.model("Lecture");
export default class vlService {
  constructor() {}
  //returns all lectures in the database
  getLectures = async (callback) => {
    try {
      let lectures = await Lecture.find()
        .select("abrv name totalCards")
        .sort("name");
      callback(null, lectures);
    } catch (error) {
      callback(error, null);
    }
  };

  findByAbrv = async (abrv) => {
    try {
      return await Lecture.findOne({ abrv: abrv }).select(
        "abrv name tagList totalCards"
      );
    } finally {
    }
  };

  //Returns the first lecture that matches the query
  getLectureByQuery = async (query, callback) => {
    try {
      let lecture = await Lecture.findOne(query);
      callback(null, lecture);
    } catch (error) {
      callback(error, null);
    }
  };

  //adds a lecture to the database
  addLecture = async (lecture, callback) => {
    try {
      await checkUniqueAbrv(lecture.abrv);
      await checkUniqueName(lecture.name);

      const vl = new Lecture();
      vl.name = lecture.name.trim();
      vl.abrv = lecture.abrv.trim().toLowerCase();

      var savedLecture = await vl.save();
      callback(null, savedLecture);
    } catch (error) {
      callback(error, null);
    }
  };

  checkUnique = async (lecture, callback) => {
    try {
      await checkUniqueName(lecture.name);
      await checkUniqueAbrv(lecture.abrv);
      callback(null);
    } catch (error) {
      callback(error);
    }
  };
}

async function checkUniqueAbrv(abrv) {
  const vl = await Lecture.findOne({ abrv: abrv });
  if (vl)
    throw new Error("Eine Vorlesung mit dieser Abkürzung existiert bereits.");
}

async function checkUniqueName(name) {
  const vl = await Lecture.findOne({ name: name });
  if (vl) throw new Error("Eine Vorlesung mit diesem Namen existiert bereits.");
}
