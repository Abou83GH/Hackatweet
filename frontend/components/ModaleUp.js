import styles from "../styles/ModaleUp.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { changeModaleUp } from "../reducers/modaleUp";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import user, { addUser } from "../reducers/user";
import { useState } from "react";

function ModaleUp() {
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeModaleUp(false));
  };

  const handleSign = () => {
    dispatch(addUser({ firstName: firstName, userName: userName, token: "" }));
    navigate();
  };

  // fonctions pour changer de page
  const router = useRouter();
  const navigate = () => {
    router.push("/homeTweet");
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
          <input
            className={styles.input}
            type="text"
            placeholder="Firstname"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className={styles.button}
            onClick={() => {
              handleSign();
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModaleUp;
