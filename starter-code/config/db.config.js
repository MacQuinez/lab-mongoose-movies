const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/celebrity-example-development', {
  useMongoClient: true
});
