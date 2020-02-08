const express = require('express');
const path = require('path');
const { body, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  console.log(req.query)
  //__dirname : It will resolve to your project folder.
});
router.post('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  console.log("fdafds")
  console.log(req.query)
  //__dirname : It will resolve to your project folder.
});
router.post('/addCard',function(req,res){
  // res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  console.log("TEST:")
  console.log(req.body.thema)
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