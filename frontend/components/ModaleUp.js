import styles from "../styles/ModaleUp.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ModaleUp() {
  return (
    <div className={styles.main}>
      <div className={styles.modale}>
        <div className={styles.X}>
          <FontAwesomeIcon className={styles.logoX} icon={faXmark} />
        </div>
        <div className={styles.modaleUp}>
          <FontAwesomeIcon className={styles.logoT} icon={faTwitter} />
          <p className={styles.text}>Create your Hackatweet account</p>
          <input className={styles.input} type="text" placeholder="Firstname" />
          <input className={styles.input} type="text" placeholder="Username" />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <button className={styles.button}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default ModaleUp;
