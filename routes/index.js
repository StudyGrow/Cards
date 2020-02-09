const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const Registration = mongoose.model('Registration');
const Vorlesung = mongoose.model('Vorlesung');

router.get('/',function(req,res){
   // console.log(typeof(req.params.vl))
   Vorlesung.find((err,vls)=>{
    if(err){
      console.log(err);
    }else{
      //console.log(vls);
      res.render('kategorie', {vorlesungen:vls});
    }
    }); 
});
router.get('/kategorien',function(req,res){
  // console.log(typeof(req.params.vl))
  Vorlesung.find((err,vls)=>{
  if(err){
    console.log(err);
  }else{
    //console.log(vls);
    res.render('kategorie', {vorlesungen:vls});
  }
  }); 
});

router.get('/:vl',function(req,res){
  // console.log(typeof(req.params.vl))
  var vl = req.params.vl;
  Registration.find({vorlesung: vl},(err,cards)=>{
  if(err){
    console.log(err);
  }else{
    ////console.log(cards)
    res.render('Karteikarten', {karten:cards, vorlesung:vl})
  }
  });
});


router.post('/addCard',function(req,res){
  // res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  //console.log("TEST:")
  //console.log(req.body.thema)
  const registration = new Registration(req.body);
  registration.save();
  //console.log(req.body)
  // console.log(req.query)
  //__dirname : It will resolve to your project folder.
});

router.post('/addVl',function(req,res){
  // res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  req.body.name.length
  const errors = validationResult(req);
  if (  (req.body.name.length < 20 &&   req.body.abrv.length < 20) && ((req.body.name.length != 0 &&   req.body.abrv.length != 0) )) {
    //console.log(req.body);
    const vl = new Vorlesung();
    vl.name = req.body.name;
    vl.abrv = req.body.abrv;
    vl.save();
  } 
  else{
    res.status(406).send();
  }

  // console.log(req.query)
  //__dirname : It will resolve to your project folder.
});


module.exports = router;