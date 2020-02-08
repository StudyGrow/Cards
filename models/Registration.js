const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  vorlesung: {
    type: String,
    trim : true
  },
  thema: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model('Registration', registrationSchema);