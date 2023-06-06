import gsap from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../context";
import styles from "../../scss/pageComponents/lifeSupportTech.module.scss";

const cardsData = [
  {
    title: "Life",
    logos: [
      "/images/lifeSupport/life1.png",
      "/images/lifeSupport/life2.png",
      "/images/lifeSupport/life3.png",
      "/images/lifeSupport/life4.png",
      "/images/lifeSupport/life5.png",
      "/images/lifeSupport/life6.png",
      "/images/lifeSupport/life7.png",
      "/images/lifeSupport/life8.png",
      "/images/lifeSupport/life9.png",
    ],
  },
  {
    title: "Sport",
    logos: [
      "/images/lifeSupport/sport1.png",
      "/images/lifeSupport/sport2.png",
      "/images/lifeSupport/sport3.png",
      "/images/lifeSupport/sport4.png",
      "/images/lifeSupport/sport5.png",
      "/images/lifeSupport/sport6.png",
      "/images/lifeSupport/sport7.png",
      "/images/lifeSupport/sport8.png",
      "/images/lifeSupport/sport9.png",
    ],
  },
  {
    title: "Tech",
    logos: [
      "/images/lifeSupport/tech1.png",
      "/images/lifeSupport/tech2.png",
      "/images/lifeSupport/tech3.png",
      "/images/lifeSupport/tech4.png",
      "/images/lifeSupport/tech5.png",
      "/images/lifeSupport/tech6.png",
      "/images/lifeSupport/tech7.png",
      "/images/lifeSupport/tech8.png",
      "/images/lifeSupport/tech9.png",
    ],
  },
];

const LifeSupportTech = () => {
  const { loader } = useContext(UserContext);
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!loader) {
      setTimeout(() => {
        const lifeTimeline = gsap.timeline({
          scrollTrigger: {
            scroller: "#mainContainer",
            trigger: section,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
            // markers: true,
          },
        });

        lifeTimeline
          .fromTo(card1Ref.current, { y: "100%" }, { y: 0 })
          .fromTo(card2Ref.current, { y: "100%" }, { y: 0 }, "<+=30%")
          .fromTo(card3Ref.current, { y: "100%" }, { y: 0 }, "<+=30%");
        return () => {
          lifeTimeline.kill();
        };
      }, 0);
    }
  }, [loader]);

  return (
    <div className={styles.lifeSupport}>
      <Container>
        <div className={styles.cards_wrapper} ref={sectionRef}>
          {cardsData.map((item, index) => (
            <div className={styles.card_col} key={index}>
              <div
                className={styles.card}
                key={item}
                ref={index === 0 ? card1Ref : index === 1 ? card2Ref : card3Ref}
              >
                <div className={styles.title}>
                  <h2>{item.title}</h2>
                </div>
                <div className={styles.logosWrap}>
                  {item.logos.map((logo, index1) => (
                    <span className={styles.singleLogo} key={index1}>
                      <img src={logo} alt="" />
                    </span>
                  ))}
                </div>
                <div
                  className={styles.layer}
                  style={{
                    backgroundImage: `${
                      index === 0
                        ? "linear-gradient(to bottom, rgba(50, 50, 229, 0.92) 7%, rgba(48, 48, 229, 0.72) 27%, rgba(49, 49, 230, 0.52) 47%, rgba(49, 49, 227, 0.32) 67%, rgba(48, 48, 231, 0.12) 87%, rgba(51, 51, 204, 0) 94%)"
                        : index === 1
                        ? "linear-gradient(to bottom, rgba(50, 146, 229, 0.92) 7%, rgba(48, 124, 229, 0.72) 27%, rgba(49, 105, 230, 0.52) 47%, rgba(49, 83, 227, 0.32) 67%, rgba(48, 64, 231, 0.12) 87%, rgba(51, 51, 204, 0) 94%)"
                        : "linear-gradient(to bottom, rgba(98, 187, 179, 0.92) 7%, rgba(87, 157, 189, 0.72) 27%, rgba(78, 128, 202, 0.52) 47%, rgba(65, 95, 212, 0.32) 67%, rgba(56, 72, 223, 0.12) 87%, rgba(51, 51, 204, 0) 94%)"
                    }`,
                  }}
                />
                <h4 className={styles.cardNumber}>{index + 1}.</h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LifeSupportTech;
