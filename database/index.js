'use strict';

// Here, We Get The User's Schema that's in the models folder and we give it to the db (const) that we exporting

const mongoose = require('mongoose');
const users = require('./models/users');
mongoose.connect('mongodb://admin:admin@ds133450.mlab.com:33450/klaap');
const db = {
  users: mongoose.model('Users', users)
}
module.exports = db;