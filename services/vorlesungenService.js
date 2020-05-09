const mongoose = require("mongoose");
const Lecture = mongoose.model("Lecture");

module.exports = function vlService() {
  //Gibt alle Vorlesungen zurück
  vlService.getLectures = async (callback) => {
    try {
      let lectures = await Lecture.find();
      callback(null, lectures);
    } catch (error) {
      callback(error, null);
    }
  };

  //Gibt eine Lecture nach gegebenen Parametern zurück
  vlService.getLectureByQuery = async (query, callback) => {
    try {
      let lecture = await Lecture.findOne(query);
      callback(null, lecture);
    } catch (error) {
      callback(error, null);
    }
  };

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
