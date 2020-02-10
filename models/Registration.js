const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  vorlesung: {
    type: String,
    trim : true,
    required: true
  },
  thema: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  img: {
    type: Buffer
  }
});

module.exports = mongoose.model('Registration', registrationSchema);