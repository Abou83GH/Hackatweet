var express = require('express');
var router = express.Router();

require("../models/connection");
const Tweet = require('../models/tweets');
const User = require('../models/users');
const Trends= require('../models/trends');


// route pour enregistrer user
router.post('/add', (req, res) => {
    // on cherche l'id de l'utilisateur
   User.findOne({ token : req.body.token}).then(dataUser => {
       if(dataUser){
          // on crée un nouveau tweet
            const newTweet = new Tweet({
                user : dataUser.id,
                message: String,
                date: Date.now(),
                likes: [],
                hashtags: req.body.hashtags,
            });
          // enregistrement
          newTweet.save().then(newDoc => {res.json({ result: true }) })
       }else{
            res.json({ result: false, error: 'User not find' });
       }

   })
 });

module.exports = router;