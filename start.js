
require('dotenv').config();

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require("helmet");
const kill = require('./node_modules/kill-port');
const port = 8080
const portSSL = 443
const privateKey = fs.readFileSync('/etc/letsencrypt/live/rwth-aachen.tk/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/rwth-aachen.tk/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/rwth-aachen.tk/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true,useUnifiedTopology: true });
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
  app.use(helmet()); 
  const httpServer = http.createServer(app);
  const httpsServer = https.createServer(credentials, app);

  httpServer.listen(8080, () => {
    setTimeout(() => {
      // console.log(`Express is running on port ${server.address().port}`);
      
      // Currently you can kill ports running on TCP or UDP protocols
      kill(port, 'tcp')
        .then(console.log)
        .catch(console.log)
    }, 1000)  });
  app.use(helmet()); 

  httpsServer.listen(443, () => {
    setTimeout(() => {
      // console.log(`Express is running on port ${server.address().port}`);
      
      // Currently you can kill ports running on TCP or UDP protocols
      kill(portSSL, 'tcp')
        .then(console.log)
        .catch(console.log)
    }, 1000)  });
// const server = app.listen(port, () => {
//   setTimeout(() => {
//     // console.log(`Express is running on port ${server.address().port}`);
    
//     // Currently you can kill ports running on TCP or UDP protocols
//     kill(port, 'tcp')
//       .then(console.log)
//       .catch(console.log)
//   }, 1000)
// });
