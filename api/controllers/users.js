'use strict';

// Here we create a method to post and save a new user in our database and we export that.
const db = require('../../database');

const users  = {
  create : (req, res) => {
    const getUser = new db.users(req.body);
    getUser.save()
    .then ( data => {
      res.send(`Mail sent: \n ${data}`);
    })
    .catch ( err => {
      res.send('Could\'n send the mail : \n' + err);
    });
  }
}

module.exports = users;