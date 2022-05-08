const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: String
});

module.exports = mongoose.model('data', schema);
