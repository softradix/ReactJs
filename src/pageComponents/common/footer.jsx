import { Container } from "react-bootstrap";
import styles from "../../scss/common/footer.module.scss";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { UserContext } from "../../context";
import { useContext } from "react";
gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const { scroller } = useContext(UserContext);
  const handleClick = (target) => {
    const element = document.getElementById(target);
    // const scroller = document.querySelector("#mainContainer");
    if (element && scroller) {
      // gsap.to(scroller, { scrollTo: element, duration: 1 });
      scroller.scrollIntoView(element, { duration: 700, easing: "linear" });
    }
  };
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer_top}>
          <div className={styles.footer_left}>
            <div className={styles.footer_links_col}>
              <ul>
                <li onClick={() => handleClick("howSection")}>How it works</li>
                <li onClick={() => handleClick("moveSection")}>Amino Move</li>
                <li onClick={() => handleClick("shopSection")}>Amino Shop</li>
                <li onClick={() => handleClick("catalogSection")}>
                  Amino Catalog
                </li>
                <li onClick={() => handleClick("aminoWalletSection")}>
                  Amino Wallet
                </li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className={styles.footer_links_col}>
              <ul>
                <Link
                  target="_blank"
                  to="https://mobile.twitter.com/aminorewards"
                >
                  <li>Twitter</li>
                </Link>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/aminorewards"
                >
                  <li>Instagram</li>
                </Link>
                <Link target="_blank" to="https://t.me/PegasusAppSupport_bot">
                  <li>Telegram</li>
                </Link>
                <Link target="_blank" to="https://www.facebook.com/earnfitcoin">
                  <li>Facebook</li>
                </Link>
                <Link target="_blank" to="https://linktr.ee/aminorewards">
                  <li>Linktree</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_detail_col}>
              <h6>Contact</h6>
              <span>hi@aminorewards.com</span>
              <div className={styles.logo}>
                <img src="/images/logo.svg" alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div>© 2023 Amino Rewards.</div>
          <div className={styles.termsPolicy}>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
