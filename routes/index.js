const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const Registration = mongoose.model('Registration');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  // res.render('Karteikarten')
  console.log(req.query)
  //__dirname : It will resolve to your project folder.
});
router.post('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  console.log("fdafds")

  //__dirname : It will resolve to your project folder.
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
  
  // Registration.find({vorlesung: vl})
  // .then((registrations) => {
  //   console.log(registration);
  //   res.send(registration);
  // })
  // .catch(() => { res.send('Sorry! Something went wrong.'); });

  //__dirname : It will resolve to your project folder.
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