import styles from "../styles/HomeTweet.module.css";
import Tweet from "./Tweet";
import Trend from "./Trend";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { addTweet } from "../reducers/alltweets";
import Image from "next/image";
import { useState } from "react";
import { updateTrend } from "../reducers/alltrends";

const { getHashtags, setSpan } = require("../modules/tools");

function HomeTweet() {
  const dispatch = useDispatch();
  //
  const [theMessage, setTheMessage] = useState("");

  // récuperation des tweets
  const theTweets = useSelector((state) => state.allTweets.value);

  // gestion du click sur le bouton tweet

  // récuperation des trends
  const theTrends = useSelector((state) => state.allTrends.value);

  // gestion du click sur le bouton tweet
  const handleTweet = () => {
    // on ajoute le message au reducer
    dispatch(
      addTweet({
        firstname: null,
        username: null,
        date: Date.now(),
        message: theMessage,
        likes: 0,
      })
    );
    // on met à jour les trends
    const listHashtags = getHashtags(theMessage);
    console.log(listHashtags);
    for (let item of listHashtags) {
      dispatch(updateTrend(`#${item}`));
    }
    console.log(theTrends);
    // on reset l'input
  };

  // affichage des tweets
  const displayTweets = theTweets.map((elt, i) => {
    return (
      <Tweet
        key={i}
        firstname={elt.firstname}
        username={elt.username}
        date={elt.date}
        message={elt.message}
        likes={elt.likes}
        isliked={false}
      />
    );
  });

  // affiche des trends
  const displayTrends = theTrends.map((elt, i) => {
    return <Trend key={i} title={elt.title} occurence={elt.occurence} />;
  });
  return (
    <div className={styles.container}>
      {/* LEFT */}
      <div className={styles.leftContainer}>
        <div className={styles.logoLeft}>
          <FontAwesomeIcon icon={faTwitter} className={styles.logoApp} />
        </div>
        <div className={styles.user}>
          <div>
            <Image
              src="/Capture d’écran 2022-11-25 093029.png"
              alt="pp"
              width={35}
              height={35}
              className={styles.pp}
            />
          </div>
          <div className={styles.username}>
            <span>Gabin</span>@Gabinio
          </div>
        </div>
      </div>
      {/* HOME */}
      <div className={styles.home}>
        <span>Home</span>
        <div className={styles.tweetwriting}>
          <input
            type="text"
            placeholder="What's up ?"
            className={styles.inputTweet}
            onChange={(e) => setTheMessage(e.target.value)}
            value={theMessage}
          />
          <div className={styles.validation}>
            <span> caractères</span>
            <button
              className={styles.buttonTweet}
              onClick={() => handleTweet()}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
      {/* TWEETS */}
      <div className={styles.tweetsContainer}>{displayTweets}</div>
      {/* RIGHT */}
      <div className={styles.rightContainer}>
        <span> Trends </span>
        <div className={styles.trendsContainer}>{displayTrends}</div>
      </div>
    </div>
  );
}

export default HomeTweet;
