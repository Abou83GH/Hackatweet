import styles from "../styles/ModaleUp.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { changeModaleUp } from "../reducers/modaleUp";
import { useDispatch } from "react-redux";

function ModaleUp() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeModaleUp(false));
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
