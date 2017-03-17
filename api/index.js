'use strict';

// Here we import the user's creating method that's in the controllers folder and we export it with a key(users)
const users = require('./controllers/users');
module.exports = {
  users : users
};