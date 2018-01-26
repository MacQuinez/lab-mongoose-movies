const mongoose = require('mongoose');

require('../config/db.config');

const Celebrity = require('../models/celebrity.model');

const celebrity = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'I am the best'
  },
  {
    name: 'Javier Bardem',
    occupation: 'Actor',
    catchPhrase: 'I am the best too'
  },
  {
    name: 'Leticia Sabater',
    occupation: 'Oftanmologa',
    catchPhrase: 'I am VIZCOnde'
  }
];

Celebrity.create(celebrity).then(docs => {
  docs.forEach(celebrity => {
    console.log(celebrity);
  });

  mongoose.connection.close();
});
