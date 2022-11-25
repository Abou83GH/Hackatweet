import styles from "../styles/HomeTweet.module.css";
import Tweet from "./Tweet";
import Trend from "./Trend";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { addTweet, removeTweets } from "../reducers/alltweets";
import { updateTrend, removeTrends } from "../reducers/alltrends";
import { removeUser } from "../reducers/user";

import Image from "next/image";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";


const { getHashtags, setSpan } = require("../modules/tools");

function HomeTweet() {
  const dispatch = useDispatch();
  //
  const [theMessage, setTheMessage] = useState("");

  //récuperation du user
  const theUser = useSelector((state) => state.user.value);

  // récuperation des tweets
  const theTweets = useSelector((state) => state.allTweets.value);

  // récuperation des trends
  const theTrends = useSelector((state) => state.allTrends.value);

 let essai ;
  // récupération des tweets au chargement
  useEffect(() => {
    fetch('http://localhost:3000/tweets')
    .then(response => response.json())
    .then(dataTweets => {
      console.log(dataTweets)
      if(dataTweets.result){
        // on ajoute les messages au reducer
        for(let item of dataTweets.data){
          const isUserLike = item.likes.some(elt => elt === theUser.token);
          dispatch(addTweet({
              firstname: theUser.firstName,
              username: theUser.userName,
              date: item.Date,
              message: item.message,
              likes: item.likes.length,
              userLike: isUserLike,
            }));
        }
      }  
    })
       
    },[]);
      

  // click enter

  const handlekeypress = (e) => {
    if (e.key === "Enter") {
      handleTweet();
    }
  };

  // gestion du click sur le bouton tweet
  const handleTweet = () => {
    // on rajoute le tweet en DB
    fetch("http://localhost:3000/tweets/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: theUser.token, message : theMessage, hashtags: getHashtags(theMessage) }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            addTweet({
              // on ajoute le message au reducer
              firstname: theUser.firstName,
              username: theUser.userName,
              date: Date.now(),
              message: theMessage,
              likes: 0,
              userLike: false,
            })
          );
          // on met à jour les trends
          const listHashtags = getHashtags(theMessage);
          for (let item of listHashtags) {
            dispatch(updateTrend(`#${item}`));
          }
        }
      });
    // on reset l'input
    setTheMessage("");
  };
  
  const router = useRouter();
  const navigate = () => {
    router.push("/connection");
  };
  const handleLogout = () => {
      //on efface tous les reducers
      dispatch(removeUser());
      dispatch(removeTrends());
      dispatch(removeTweets());
      navigate();
  }

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
        <div className={styles.bottom}>
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
              <span>{theUser.firstName}</span>@{theUser.userName}
            </div>
          </div>
          <div className={styles.username}>
            <span>{theUser.firstName}</span>@{theUser.userName}
          </div>
        </div>
        <button onClick={() => {handleLogout()}} className={styles.buttonLogout}>Logout</button>
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
            maxlength="280"
            onKeyDown={handlekeypress}
          />
          <div className={styles.validation}>
            <span>{theMessage.length}/280</span>
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
