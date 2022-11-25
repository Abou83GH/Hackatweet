import styles from "../styles/Tweet.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
const { setSpan } = require("../modules/tools");

function Tweet(props) {
  const [isLiked, setIsLiked] = useState(props.userLike);
  const[nbLike,setNbLike] = useState(props.likes)

  let heartIconStyle = { cursor: "pointer" };
  if (isLiked) {
    heartIconStyle = { color: "#e74c3c", cursor: "pointer" };
  }

  // click heart
  const handleLike = () => {
    if(isLiked){
      setNbLike(nbLike-1);
    }
    if(!isLiked){
      setNbLike(nbLike+1);
    }
    setIsLiked(!isLiked);

  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <Image
            src="/Capture d’écran 2022-11-25 093029.png"
            alt="pp"
            width={25}
            height={25}
            className={styles.pp}
          />
        </div>
        {props.firstname}
        <span className={styles.nameAndtime}>
          @{props.username} - {props.date}
        </span>
      </div>
      <div className={styles.message}>{props.message}</div>
      <div className={styles.like}>
        <span className={styles.heart}>
          <FontAwesomeIcon
            icon={faHeart}
            style={heartIconStyle}
            onClick={() => handleLike()}
            className="like"
          />
        </span>
        <span>{nbLike}</span>
      </div>
    </div>
  );
}

export default Tweet;
