const mongoose = require("mongoose");
const Lecture = mongoose.model("Lecture");

module.exports = function vlService() {
  //returns all lectures in the database
  vlService.getLectures = async (callback) => {
    try {
      let lectures = await Lecture.find().sort("name");
      callback(null, lectures);
    } catch (error) {
      callback(error, null);
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
      vl.name = lecture.name;
      vl.abrv = lecture.abrv.toLowerCase();

      await vl.save();
      callback(null);
    } catch (error) {
      callback(error);
    }
  };
  return vlService;
};
