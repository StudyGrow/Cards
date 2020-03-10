const mongoose = require("mongoose");
const Vorlesung = mongoose.model("Vorlesung");

module.exports = function vlService() {
  //Gibt alle Vorlesungen zurück
  vlService.getLectures = callback => {
    Vorlesung.find((err, vls) => {
      if (err) {
        console.log(err);
      } else {
        //console.log(vls);
        callback(vls);
      }
    });
  };

  //Gibt eine Vorlesung nach gegebenen Parametern zurück
  vlService.getLectureByQuery = (query, callback) => {
    Vorlesung.findOne(query, (err, vl) => {
      if (err) {
        throw err;
      } else {
        //console.log(vls);
        callback(vl);
      }
    });
  };

  vlService.addLecture = (name, abrv) => {
    const vl = new Vorlesung();
    vl.name = name;
    vl.abrv = abrv;
    vl.save();
  };
  return vlService;
};
