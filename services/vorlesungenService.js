const mongoose = require('mongoose');
const Vorlesung = mongoose.model('Vorlesung');

module.exports = class cardsService {
    
    //Gibt alle Vorlesungen zurück
    getLectures(callback){
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
    getLectureByQuery(query,callback){
        Vorlesung.findOne(query,(err,vl)=>{
            if(err){
                throw(err);
            }else{
                //console.log(vls);
                callback(vl);
            }
        });    
    }

    createLecture(name, abrv){
        const vl = new Vorlesung();
        vl.name = name;
        vl.abrv = abrv;
        vl.save();
    }
}
    