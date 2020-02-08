const express = require('express');
const path = require('path');
const { body, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../Karteikarten.html'));
  //__dirname : It will resolve to your project folder.
});


// router.get('/', (req, res) => {
//   // res.render('form', { title: 'Registration form' });
//   res.sendFile('Karteikarten.html')
// });

router.post('/?exampleFormControlInput1=1&exampleFormControlTextarea1=',
  [
    body('/exampleFormControlTextarea1')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send('Thank you for your registration!');
    } else {
      res.send('FUCK');

    }
  }
);
module.exports = router;