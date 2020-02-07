const express = require('express');
// const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');


const app = express();
// const router = express.Router();

// router.get('/',function(req,res){
//   res.sendFile('Karteikarten.html');
//   //__dirname : It will resolve to your project folder.
// });
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');


// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;