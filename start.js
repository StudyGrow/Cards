
require('dotenv').config();

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require("helmet");

const privateKey = fs.readFileSync('/etc/letsencrypt/live/rwth-aachen.tk/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/rwth-aachen.tk/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/rwth-aachen.tk/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on admin database`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

  require('./models/Registration');
  require('./models/Vorlesung');
  const app = require('./app');
  const httpServer = http.createServer(app);
  const httpsServer = https.createServer(credentials, app);

  // httpServer.listen(80, () => {
  //   console.log('HTTP Server running on port 80');
  // });
  
  httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });
const server = app.listen(80, () => {
  console.log(`Express is running on port ${server.address().port}`);
});