import React, { useState } from "react";
import { toast } from "react-toastify";
import { FormMessageIcon, FormUserIcon } from "../../assets/icons";
import styles from "../../scss/common/popUp.module.scss";
import { clientSubscriptionCall } from "../../services/Api/Common";
import * as FirestoreService from "../../services/firestore";

const PopUp = ({ toggle }) => {
  const [errMessage, setErrMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [send, setSend] = useState(false);

  const handleClick = () => {
    toggle();
  };
  const klaviyoCall = async () => {
    try {
      const response = await clientSubscriptionCall({ email: email });
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        setSend(true);
        setDisabled(false);
      } else {
        toast.error("Something went wrong. Please try again later.");
        setDisabled(false);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
      setDisabled(false);
    }
  };
  const register = async () => {
    setErrMessage("");
    if (!name.match(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/)) {
      setErrMessage("Please insert a valid name.");
      return;
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setErrMessage("Please insert a valid e-mail.");
      return;
    }
    setDisabled(true);
    await FirestoreService.saveUser(name, email)
      .then(() => {
        klaviyoCall();
      })
      .catch((e) => {
        setErrMessage("Something went wrong. Please try again later.");
        setDisabled(false);
        console.log("error::: ", e);
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
  };

  return (
    <div className={styles.popup_wrapper} onClick={handleClick}>
      <div
        className={styles.popup}
        style={{ display: send ? "none" : "block" }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.popup_header}>
          <img src="images/logo.svg" alt="Amino logo white" />
        </header>
        <p>Stay current on the latest amino news.</p>
        <div className={styles.input_field_wrapper}>
          <div className={styles.input_field}>
            <input
              type="text"
              placeholder="Name"
              onChange={handleInputChange}
              value={name}
              id="name"
              className="form-control"
            />
            <span className={styles.icon}>{FormUserIcon}</span>
          </div>
          <div className={styles.input_field}>
            <input
              type="email"
              placeholder="E-mail"
              onChange={handleInputChange}
              value={email}
              id="email"
              className="form-control"
            />
            <span className={styles.icon}>{FormMessageIcon}</span>
          </div>
          <p className={styles.error}>{errMessage}</p>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={styles.submitBtn}
            onClick={register}
            disabled={disabled}
          >
            {disabled ? "Wait..." : "Sign Up"}
          </button>
        </div>
        <img
          src="/images/popup/popUpSpaceMan.png"
          alt="Amino pop up space man"
          className={styles.spaceman}
        />
      </div>

      <div
        className={styles.popup}
        style={{ display: send ? "block" : "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.popup_header}>
          <img
            src="/images/logo.svg"
            height="75px"
            width="150px"
            alt="Amino logo white"
          />
        </header>
        <div className={styles.signUp}>You're signed up!</div>
        <p className={styles.para}>
          We will keep you updated by email on
          <br /> future updates, product launches
          <br /> and new features on the
          <br />
          Amino Network.
        </p>
        <img
          src="/images/popup/signUpSuccess.png"
          height="220px"
          width="220px"
          alt="Amino pop up space man"
          className={styles.spaceman_success}
        />
      </div>
    </div>
  );
};
export default PopUp;
