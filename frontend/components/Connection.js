import styles from "../styles/Connection.module.css";
import { useState } from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModaleUp from "./ModaleUp";

function Connection() {
  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <FontAwesomeIcon icon={faTwitter} className={styles.logoLeft} />
      </div>

      {/* <div className={styles.right}>
        <FontAwesomeIcon icon={faTwitter} className={styles.logo} />
        <h1 className={styles.title}>See what's happening</h1>

        <h3 className={styles.littleTitle}>Join Hackatweet today.</h3>
        <button className={styles.buttonUp}>Sign up</button>
        <p>Already have an account ?</p>
        <button className={styles.buttonIn}>Sign in</button>
      </div> */}
      <div className={styles.modaleUp}>
        <ModaleUp />
      </div>
    </div>
  );
}

export default Connection;
