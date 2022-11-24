import styles from "../styles/Connection.module.css";
import logo from "../public/logo.jpg";

function Connection() {
  return (
    <div className={styles.main}>
      <div className={styles.img}></div>
      <div className={styles.right}>
        <img src={logo} alt="logo"></img>
        <h1 className={styles.title}>See what's happening</h1>
        <h3 className={styles.littleTitle}>Join Hackatweet today.</h3>
        <button className={styles.buttonUp}>Sign up</button>
        <p>Already have an account ?</p>
        <button className={styles.buttonIn}>Sign in</button>
      </div>
    </div>
  );
}

export default Connection;
