
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


  httpServer.listen(80, () => {
     console.log('HTTP Server running on port 80');
  });
  app.use(helmet()); 

  httpsServer.listen(443, () => {
   console.log('HTTPS Server running on port 443');
  });
  const io = require('socket.io')(server);
  io.on('connection', (socketServer) => {
    socketServer.on('npmStop', () => {
      process.exit(0);
    });
  });