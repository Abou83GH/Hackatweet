import styles from '../styles/HomeTweet.module.css';
import Tweet from './Tweet';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { addTweet } from "../reducers/alltweets";

import { useState } from 'react';



function HomeTweet() {
    const dispatch = useDispatch();
  // 
  const [theMessage, setTheMessage] = useState('');

 // récuperation des tweets   
  const theTweets = useSelector((state) => state.allTweets.value);
  
  // gestion du click sur le bouton tweet
  const handleTweet = () => {
     // on ajoute le message au reducer
    
     dispatch(addTweet({firstname : null, username:null, date : Date.now(), message :theMessage ,likes : 0 }))
     // on reset l'input
  }

  // affichage des tweets
  const displayTweets = theTweets.map((elt,i)=>{
             return  <Tweet key={i} firstname={elt.firstname} username={elt.username} date = {elt.date} message={elt.message} likes={elt.likes} isliked={false}/>
            })
  return (
    <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.leftContainer}>
            <div className={styles.logoLeft}><FontAwesomeIcon icon={faTwitter} className={styles.logoApp} /></div>
            <div className={styles.user}>
                <div ><FontAwesomeIcon icon={faCircleUser} className={styles.logoUser} /></div><div className={styles.username}><span>Gabin</span>@Gabinio</div>
            </div>
        </div>
        {/* HOME */}
        <div className={styles.home}>  
          <span>Home</span>
            <div className={styles.tweetwriting}>
                <input type="text" placeholder="What's up ?" className={styles.inputTweet} onChange={(e) => setTheMessage(e.target.value)} value={theMessage}/>
                <div className={styles.validation}><span> caractères</span><button className={styles.buttonTweet} onClick={() =>handleTweet()}>Tweet</button></div>
            </div>
        </div>
       {/* TWEETS */}
        <div className={styles.tweetsContainer}>
             {displayTweets}
        </div>
        {/* RIGHT */}
        <div className={styles.rightContainer}>
        <span> Trends </span>
        <div className={styles.trendsContainer}> #hackatweet</div>
        </div>
    </div>
  );
}

export default HomeTweet;
