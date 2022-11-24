import styles from '../styles/HomeTweet.module.css';
import Tweet from './Tweet';

function HomeTweet() {
  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <div>Logo</div>
            <div className={styles.user}>
                <div >Logo</div><div className={styles.username}><span>Gabin</span>@Gabinio</div>
            </div>
        </div>
        <div className={styles.centerContainer}>
            <div>
                
            </div>
        <Tweet />
        </div>
        <div className={styles.rightContainer}>
          
        </div>
    </div>
  );
}

export default HomeTweet;
