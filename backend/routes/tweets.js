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
    const dataToSend = [];
    /*Tweet.find({ }).then(dataTweet => {
        if(dataTweet){
            //console.log('dataTweet',dataTweet)
            // on récupère l utilisateur 
            for(let item of dataTweet){
                User.findOne({id: item.user}).then(data =>{
                    dataToSend.push({firstName : data.firstName, userName : data.userName, message : item.message, date : item.date, likes : item.likes, hashtags : item.hashtags });
                    console.log('là',dataToSend)
                }) 
                console.log('dataToSend',dataToSend) 
            }
            res.json({ result: true, data : dataToSend });
             
        }else{
            res.json({ result: false, error: 'Tweets not found' });
        }
    })*/
    Tweet.find({ }).populate('user').then(dataTweet => {
        //console.log('là', data);
        const dataToSend = [];
        if(dataTweet){
            for(let item of dataTweet){
                    dataToSend.push({firstName : item.user.firstName, userName : item.user.userName, message : item.message, date : item.date, likes : item.likes, hashtags : item.hashtags });
                }
            res.json({ result: true, data : dataToSend });
        }else{
            res.json({ result: false, error: 'Tweets not found' });
        }
      });

 })

 // route pour mettre à jour la liste des users ayant liké le tweet
 router.post('/like', (req, res) => {
    Tweet.findOne({message : req.body.message }).then(dataTweet => {
        if(dataTweet){
            
            const  newLikes =dataTweet.likes;
            console.log(newLikes)
            // on vérifie si le user est déja dedans
            if(!dataTweet.likes.some(elt => elt === req.body.token)){
                newLikes.push(req.body.token);
            }else{
                // l'user est déja dedans on le supprime
                newLikes = newLikes.filter(elt => elt !== req.body.token);
            }
            console.log('newLikes',newLikes)
            Tweet.updateOne({message : req.body.message },
                {$addToSet: { likes: { $each: [ "camera", "electronics", "accessories" ] } }})
                res.json({ result: true });
        }else{
            res.json({ result: false, error: 'Tweets not found' });
        }

    })

 })

module.exports = router;