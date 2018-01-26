const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebriySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', CelebriySchema);

module.exports = Celebrity;
