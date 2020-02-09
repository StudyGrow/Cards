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
      console.log(vls);
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
    console.log(vls);
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
    console.log(cards)
    res.render('Karteikarten', {karten:cards, vorlesung:vl})
  }
  });
});


router.post('/addCard',function(req,res){
  // res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  console.log("TEST:")
  console.log(req.body.thema)
  const registration = new Registration(req.body);
  registration.save()
  console.log(req.query)
  // console.log(req.query)
  //__dirname : It will resolve to your project folder.
});

router.post('/addVl',function(req,res){
  // res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  
  console.log(req.body);
  const vl = new Vorlesung();
  vl.name = req.body.name;
  vl.abrv = req.body.abrv;
  vl.save();
  // console.log(req.query)
  //__dirname : It will resolve to your project folder.
});

// router.get('/', (req, res) => {
//   // res.render('form', { title: 'Registration form' });
//   res.sendFile('Karteikarten.html')
// });

router.get('/?exampleFormControlInput1=a&exampleFormControlTextarea1=b&thema=&content=',(req, res) => {
    console.log("kjihiuhiu")
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send('Thank you for your registration!');
    } else {
      res.send('FUCK');

    }
  }
);

router.get('/?exampleFormControlInput1=a&exampleFormControlTextarea1=b&thema=&content=',
  [
    body('/exampleFormControlTextarea1')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
  ],
  (req, res) => {
    console.log("kjihiuhiu")
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send('Thank you for your registration!');
    } else {
      res.send('FUCK');

    }
  }
);
module.exports = router;