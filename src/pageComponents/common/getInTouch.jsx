import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  FormEmailIcon,
  FormMessageIcon,
  FormUserIcon,
  InstagramIcon,
  MessageIcon,
  TelegramIconFilled,
  TwitterIcon,
} from "../../assets/icons";
import styles from "../../scss/common/getInTouch.module.scss";

const GetInTouch = () => {
  return (
    <section className={styles.appGetTouch} id="getInTouch">
      <Container>
        <div className={styles.boxWrapper}>
          <div className={styles.box}>
            <div className={styles.boxTop}>
              <Row className="g-lg-0 g-4 justify-content-between">
                <Col lg={5}>
                  <div className={styles.leftSection}>
                    <div className={styles.title}>Say hello &#128075;</div>
                    <h1>
                      Get in
                      <br /> Touch.
                    </h1>
                    <div className={styles.subTitle}>
                      Want to know more? Join our mailing list or use the form
                      below to contact us.
                    </div>
                    <div className={styles.emailAddress}>
                      {MessageIcon}
                      <span>hi@aminorewards.com</span>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={styles.rightSection}>
                    {/* <div className={styles.image}>
                      <img src="/images/get-in-touch.png" alt="get-in-touch" />
                    </div> */}
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className={styles.fieldsWrapper}>
                        <div className="inputField">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Name"
                            name="name"
                          />
                          <span className="formField_icon">{FormUserIcon}</span>
                        </div>
                        <div className="inputField">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                            name="email"
                          />
                          <span className="formField_icon">
                            {FormEmailIcon}
                          </span>
                        </div>
                        <div className="inputField">
                          <textarea
                            className="form-control"
                            rows="6"
                            type="text"
                            placeholder="Message"
                            name="message"
                          />
                          <span className="formField_icon">
                            {FormMessageIcon}
                          </span>
                        </div>
                      </div>
                      <div className={styles.submitBtn}>
                        <Button className="theme_btn_sm">Send it</Button>
                      </div>
                    </Form>
                  </div>
                </Col>
              </Row>
              {/* <Row className="justify-content-end">
              <Col lg={6}></Col>
            </Row> */}
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.col}>
                <Link
                  to="https://mobile.twitter.com/aminorewards"
                  target="_blank"
                >
                  <span className={styles.icn}>{TwitterIcon}</span>
                  <span className={styles.name}>Twitter</span>
                </Link>
              </div>
              <div className={styles.col}>
                <Link
                  to="https://www.instagram.com/aminorewards"
                  target="_blank"
                >
                  <span className={styles.icn}>{InstagramIcon}</span>
                  <span className={styles.name}>Instagram</span>
                </Link>
              </div>
              <div className={styles.col}>
                <Link to="https://t.me/PegasusAppSupport_bot" target="_blank">
                  <span className={styles.icn}>{TelegramIconFilled}</span>
                  <span className={styles.name}>Telegram</span>
                </Link>
              </div>
              <div className={styles.col}>
                <Link to="https://www.facebook.com/earnfitcoin" target="_blank">
                  <span className={styles.icn}>{FacebookIcon}</span>
                  <span className={styles.name}>Facebook</span>
                </Link>
              </div>
            </div>
          </div>
          <img className={styles.cubeImg} src="/images/cube.png" alt="cube" />
        </div>
      </Container>
      <div className={styles.layer} />
    </section>
  );
};
export default GetInTouch;
