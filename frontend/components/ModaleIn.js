import styles from "../styles/ModaleIn.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { changeModaleIn } from "../reducers/modaleIn";
import { useDispatch } from "react-redux";

function ModaleIn() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeModaleIn(false));
  };

  return (
    <div className={styles.main}>
      <div className={styles.modale}>
        <div className={styles.X}>
          <FontAwesomeIcon
            onClick={() => {
              handleClose();
            }}
            className={styles.logoX}
            icon={faXmark}
          />
        </div>
        <div className={styles.modaleIn}>
          <FontAwesomeIcon className={styles.logoT} icon={faTwitter} />
          <p className={styles.text}>Connect to Hackatweet</p>
          <input className={styles.input} type="text" placeholder="Username" />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <button className={styles.button}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default ModaleIn;
