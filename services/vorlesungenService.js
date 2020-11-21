const mongoose = require("mongoose");
const Lecture = mongoose.model("Lecture");

module.exports = function vlService() {
  //returns all lectures in the database
  vlService.getLectures = async (callback) => {
    try {
      let lectures = await Lecture.find().select("abrv name").sort("name");
      callback(null, lectures);
    } catch (error) {
      callback(error, null);
    }
  };

  vlService.findByAbrv = async (abrv) => {
    try {
      return await Lecture.findOne({ abrv: abrv }).select("abrv name tagList");
    } finally {
    }
  };

  //Returns the first lecture that matches the query
  vlService.getLectureByQuery = async (query, callback) => {
    try {
      let lecture = await Lecture.findOne(query);
      callback(null, lecture);
    } catch (error) {
      callback(error, null);
    }
  };

  //adds a lecture to the database
  vlService.addLecture = async (lecture, callback) => {
    try {
      const vl = new Lecture();
      vl.name = lecture.name.trim();
      vl.abrv = lecture.abrv.trim().toLowerCase();

      await vl.save();
      callback(null);
    } catch (error) {
      callback(error);
    }
  };
  return vlService;
};
