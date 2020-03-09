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
router.get('/main.js',function(req,res){
  // console.log(typeof(req.params.vl))
  res.sendFile(path.join(__dirname+'/../js/main.js'));
});
router.get('/main.css',function(req,res){
  // console.log(typeof(req.params.vl))
  res.sendFile(path.join(__dirname+'/../style/main.css'));
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

let vorlesung = require('../routes/vorlesung');

router.use('/vorlesung',vorlesung);

module.exports = router;