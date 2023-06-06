import React from "react";
import { Container } from "react-bootstrap";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
} from "../../assets/partnersIcons";
import styles from "../../scss/pageComponents/ourPartners.module.scss";

const allPartners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
];

const OurPartners = () => {
  return (
    <div className={styles.ourPartners}>
      <div className={styles.heading}>
        <h5>Our Partners</h5>
      </div>
      <Container>
        <div className={styles.ourPartners_wrapper}>
          {allPartners.map((item, index) => (
            <div className={styles.singleImage} key={index}>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurPartners;
