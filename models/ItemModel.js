const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  'text' : String,
  'number' : String
});

module.exports = mongoose.model('Item', itemSchema);
