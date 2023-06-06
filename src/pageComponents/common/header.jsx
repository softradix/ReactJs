import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InstagramIcon, TelegramIcon, TwitterIcon } from "../../assets/icons";
import { UserContext } from "../../context";
import styles from "../../scss/common/header.module.scss";

const Header = () => {
  const { joinPopup, setJoinPopup } = useContext(UserContext);

  const toggleModal = () => {
    setJoinPopup(!joinPopup);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <nav className={styles.navbar}>
            <div className={styles.social_wrap}>
              <Link
                target="_blank"
                to="https://mobile.twitter.com/aminorewards"
              >
                <span>{TwitterIcon}</span>
              </Link>
              <Link target="_blank" to="https://www.instagram.com/aminorewards">
                <span>{InstagramIcon}</span>
              </Link>
              <Link target="_blank" to="https://t.me/PegasusAppSupport_bot">
                <span>{TelegramIcon}</span>
              </Link>
            </div>
            <Button variant="light" onClick={toggleModal}>
              Join amino
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
