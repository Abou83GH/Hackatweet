import styles from '../styles/Tweet.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const {setSpan} = require('../modules/tools');

function Tweet(props) {

  const [isLiked, setIsLiked] = useState(props.userLike);

  let heartIconStyle = { 'cursor': 'pointer' };
  if (isLiked) {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  }

  // click heart
  const handleLike = () => {
      setIsLiked(!isLiked)
  }
  

  return (
    <div className={styles.container}>
       <div className={styles.info}>
        {props.firstname}<span className={styles.nameAndtime} >@{props.username} - {props.date}</span>
       </div>
       <div className={styles.message}>
         {props.message}
       </div>
       <div className={styles.like}>
       <span className={styles.heart}><FontAwesomeIcon icon={faHeart}  style={heartIconStyle} onClick={() => handleLike()} className="like" /></span><span>{props.likes}</span>
       </div>
    </div>
  );
}

export default Tweet;