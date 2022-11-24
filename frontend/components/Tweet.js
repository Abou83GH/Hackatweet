import styles from '../styles/Tweet.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet() {
  return (
    <div className={styles.container}>
       <div >
        <span className={styles.firstName} >Gabin</span>@Gabinio - a few second
       </div>
       <div>
        blablablablablablablabla 
       </div>
       <div>
       <span><FontAwesomeIcon icon={faHeart} onClick={() => console.log('click heart')} className="like" /></span>
       </div>
    </div>
  );
}

export default Tweet;