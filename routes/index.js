const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Registration = mongoose.model('Registration');
const Vorlesung = mongoose.model('Vorlesung');


// router.get('*', function(req, res , next) {
//    if(req.secure == false){
//      res.redirect('https://' + req.headers.host + req.url);
//    }
//    else{
//      next()
//    }
//   })

router.get('/favicon.ico',function(req,res){
  res.sendFile(path.join(__dirname+'/../favicon.ico'));
});

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

router.get('/liste',(req,res)=>{
  Registration.find({vorlesung: 'BuK'},(err,cards)=>{
    if(err){
      console.log(err);
    }else{
      ////console.log(cards)
      res.render('liste', {karten:cards})
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

router.post('/addCard',[
    check('thema').isLength({min:3, max:25}),
    check('content').isLength({min:1, max:400})
  ],
  (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(422).json({errors: errors.array()});
    }else{
      const registration = new Registration();
      registration.vorlesung = req.body.vorlesung;
      registration.thema = req.body.thema;
      registration.content = req.body.content;
      registration.img = req.body.img;
      registration.save((err,card)=>{
        if (err){
          console.log(err);
        }else{
          res.json({id:card._id}); //sende id an client zurück
        }
        
      });
    }
});

router.post('/updateCard',[
    check('id').isLength({min:1,max:25}),
    check('content').isLength({min:1, max:400})
  ],
  (req,res)=>{
    
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(422).json({errors: errors.array()});
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

router.post('/addVl',
  [
    check('name').isLength({min:3, max:30}),
    check('abrv').isLength({min:3, max:7})
  ]
  ,(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(422).json({errors: errors.array()});
    } 
    else{
      const vl = new Vorlesung();
      vl.name = req.body.name;
      vl.abrv = req.body.abrv;
      vl.save();
    }
  }
);

router.get('/:vl',[check('vl').isLength({min:3, max:7})],(req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(422).json({errors: errors.array()});
  }else{ 
    Vorlesung.findOne({abrv:req.params.vl},(err,vorlesung)=>{
      if(err){
        console.log(err);
        res.status(404).send();
      }else{
        Registration.find({vorlesung: vorlesung.abrv},(err,cards)=>{
          if(err){
            console.log(err);
          }else{
            ////console.log(cards)
            res.render('Karteikarten', {karten:cards, vorlesung:vorlesung.name})
          }
        });
      }
    });
  }
});
module.exports = router;