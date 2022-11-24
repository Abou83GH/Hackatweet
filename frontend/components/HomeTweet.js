import styles from '../styles/HomeTweet.module.css';
import Tweet from './Tweet';

function HomeTweet() {
  return (
    <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.leftContainer}>
            <div className={styles.logoLeft}>Logo</div>
            <div className={styles.user}>
                <div >Logo</div><div className={styles.username}><span>Gabin</span>@Gabinio</div>
            </div>
        </div>
        {/* HOME */}
        <div className={styles.home}>  
          <span>Home</span>
            <div className={styles.tweetwriting}>
                <input type="text" placeholder="What's up ?" className={styles.inputTweet} />
                <div className={styles.validation}><span> caractères</span><button className={styles.buttonTweet} >Tweet</button></div>
            </div>
        </div>
       {/* TWEETS */}
        <div className={styles.tweetsContainer}>
            <div>
            
            </div>
        <Tweet firstname={'Nico'} username={'Gabin'} message={'blabla'} likes={0}/>
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
