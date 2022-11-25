var express = require('express');
var router = express.Router();

require("../models/connection");
const Tweet = require('../models/tweet');
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
                message: req.body.message,
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

 // route pour charger tous les tweets
 router.get('/', (req, res) => {
    Tweet.find({ }).then(dataTweet => {
        if(dataTweet){
            res.json({ result: true, data : dataTweet });
        }else{
            res.json({ result: false, error: 'Tweets not found' });
        }

    })

 })

module.exports = router;