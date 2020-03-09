const mongoose = require('mongoose');
const Vorlesung = mongoose.model('Vorlesung');

module.exports = function cardsService() {
    
    //Gibt alle Vorlesungen zurück
    cardsService.getLectures = (callback)=>{
        Vorlesung.find((err,vls)=>{
            if(err){
                throw(err);
            }else{
                //console.log(vls);
                callback(vls);
            }
        });         
    };

    //Gibt eine Vorlesung nach gegebenen Parametern zurück
    cardsService.getLectureByQuery=(query,callback)=>{
        Vorlesung.findOne(query,(err,vl)=>{
            if(err){
                throw(err);
            }else{
                //console.log(vls);
                callback(vl);
            }
        });    
    };

    cardsService.createLecture=(name, abrv)=>{
        const vl = new Vorlesung();
        vl.name = name;
        vl.abrv = abrv;
        vl.save();
    };
    return cardsService;
}
    