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

router.get('/main.js',function(req,res){
  // console.log(typeof(req.params.vl))
  res.sendFile(path.join(__dirname+'/../js/main.js'));
});
router.get('/main.css',function(req,res){
  // console.log(typeof(req.params.vl))
  res.sendFile(path.join(__dirname+'/../style/main.css'));
});

router.post('/addCard',[
    check('thema').isLength({min:3}).withMessage('Thema muss wenigstens 3 Zeichen enthalten'),
    check('thema').isLength({max:25}).withMessage('Thema darf nicht mehr als 25 Zeichen enthalten'),
    check('content').isLength({min:1}).withMessage('Inhalt muss wenigstens 1 Zeichen enthalten'),
    check('content').isLength({max:400}).withMessage('Inhalt darf nicht mehr als 400 Zeichen enthalten')
  ],
  (req,res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(422).json({errors: errors.array()});
    }else{
      
      Vorlesung.findOne({name:req.body.vorlesung},(err,vl)=>{
        if(err){
          console.log(err);
        }else{
          const registration = new Registration();
          registration.vorlesung = vl.abrv; //Vorlesungen müssen unter ihrer Abkürzung gespeichert werden
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
      })
    }
});

router.post('/updateCard',[
    check('id').isLength({min:1,max:25}),
    check('content').isLength({min:1}).withMessage('Inhalt muss wenigstens 1 Zeichen enthalten'),
    check('content').isLength({max:400}).withMessage('Inhalt darf nicht mehr als 400 Zeichen enthalten')
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

router.get('/cards/:vl',function(req,res){
   console.log(req.params.vl)
  Registration.find({vorlesung: req.params.vl},(err,cards)=>{
    if(err){
      console.log(err);
    }else{
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      console.log(cards)
      res.json(cards);
    }
  });
});

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