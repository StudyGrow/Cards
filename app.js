const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const helmet = require("helmet");


const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);
app.use(helmet()); 
module.exports = app;