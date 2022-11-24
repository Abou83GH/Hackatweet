import styles from '../styles/Tweet.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
  return (
    <div className={styles.container}>
       <div className={styles.info}>
        {props.firstname}<span className={styles.nameAndtime} >@{props.username} - a few second</span>
       </div>
       <div className={styles.message}>
        {props.message}
       </div>
       <div className={styles.like}>
       <span className={styles.heart}><FontAwesomeIcon icon={faHeart} onClick={() => console.log('click heart')} className="like" /></span><span>{props.likes}</span>
       </div>
    </div>
  );
}

export default Tweet;