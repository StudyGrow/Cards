const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Registration = mongoose.model('Registration');
const Vorlesung = mongoose.model('Vorlesung');


// router.get('*', function(req, res , next) {
//   if(req.secure == false){
//     res.redirect('https://' + req.headers.host + req.url);
//   }
//   else{
//     next()
//   }
//   })

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
router.get('/test',function(req,res){
  // console.log(typeof(req.params.vl))
  console.log('test route');
  var vl = req.params.vl;
  Registration.find({vorlesung: 'BuK'},(err,cards)=>{
  if(err){
    console.log(err);
  }else{
    ////console.log(cards)
    res.render('test', {karten:cards, vorlesung:vl})
  }
  });
});

router.get('/main.js',function(req,res){
  // console.log(typeof(req.params.vl))
  res.sendFile(path.join(__dirname+'/../js/main.js'));
});
router.get('/main.css',function(req,res){
  // console.log(typeof(req.params.vl))
  res.sendFile(path.join(__dirname+'/../style/main.css'));
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

router.post('/updateCard',function(req,res){
  if(req.body.id.length==0 || req.body.content.length==0){
    res.status(406).send();
  }
  else{
    Registration.updateOne(
      { _id : req.body.id },
      { $set: { content: req.body.content } }
   ).catch((err) => {
     console.log('Error: ' + err);
   });
  }
});


router.post('/addCard',function(req,res){
  // res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  //console.log("TEST:")
  //console.log(req.body.thema)

  if(req.body.thema.length==0 || req.body.content.length==0){
    res.status(406).send();
  }
  else{
    console.log(req.body);
    const registration = new Registration();
    registration.vorlesung = req.body.vorlesung;
    registration.thema = req.body.thema;
    registration.content = req.body.content;
    registration.img = req.body.img;
    registration.save((err,card)=>{
      if (err){
        console.log(err);
      }else{
        console.log(card);
        res.json({id:card._id}); //sende id an client zurück
      }
      
    });
  }

 
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
router.post('/updateCard',function(req,res){
  Registration.updateOne(
     { _id : req.body.id },
     { $set: { content: req.body.content } }
  ).catch((err) => {
    console.log('Error: ' + err);
});

});

module.exports = router;