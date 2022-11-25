var express = require('express');
var router = express.Router();

require("../models/connection");
const User = require('../models/users');

const uid2 = require('uid2');
const bcrypt = require('bcrypt');

// route pour enregistrer user
router.post('/signup', (req, res) => {
  // Check if the user has not already been registered
  User.findOne({ userName: req.body.userName , firstName : req.body.firstName}).then(data => {
    if (data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10);

      const newUser = new User({
        firstName : req.body.firstName,
        userName: req.body.userName,
        password: hash,
        token: uid2(32),
      });

      newUser.save().then(newDoc => {
        res.json({ result: true, token: newDoc.token });
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: 'User already exists' });
    }
 });
})

module.exports = router;
