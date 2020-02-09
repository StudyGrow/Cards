const mongoose = require('mongoose');

const vlSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    abrv: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Vorlesung', vlSchema);