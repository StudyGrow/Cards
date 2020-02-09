
require('dotenv').config();

const mongoose = require('mongoose');

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
const server = app.listen(80, () => {
  console.log(`Express is running on port ${server.address().port}`);
});