const mongoose = require("mongoose");
const Vorlesung = mongoose.model("Vorlesung");

module.exports = function vlService() {
  //Gibt alle Vorlesungen zurück
  vlService.getLectures = async (callback) => {
    try {
      let lectures = await Vorlesung.find();
      callback(null, lectures);
    } catch (error) {
      callback(error, null);
    }
  };

  //Gibt eine Vorlesung nach gegebenen Parametern zurück
  vlService.getLectureByQuery = async (query, callback) => {
    try {
      let lecture = await Vorlesung.findOne(query);
      callback(null, lecture);
    } catch (error) {
      callback(error, null);
    }
  };

  vlService.addLecture = async (lecture, callback) => {
    try {
      const vl = new Vorlesung();
      vl.name = lecture.name;
      vl.abrv = lecture.abrv;
      await vl.save();
      callback(null);
    } catch (error) {
      callback(error);
    }
  };
  return vlService;
};
