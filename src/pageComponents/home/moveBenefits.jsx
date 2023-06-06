import { gsap } from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../context";
import styles from "../../scss/pageComponents/moveBenefits.module.scss";

const MoveBenefits = () => {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const phoneRef = useRef(null);
  const handRef = useRef(null);
  const middleHeadingRef = useRef(null);
  const headingRef = useRef(null);
  const layerRef = useRef(null);

  const { loader } = useContext(UserContext);
  // const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=100%",
              scrub: true,
              pin: true,
              pinSpacing: true,
            },
          });
          tl.fromTo(
            layerRef.current,
            { transform: "scale(6 , 1.6)" },
            { transform: "none", duration: 1 }
          )
            .fromTo(
              headingRef.current,
              { y: "-100%" },
              { y: "0", duration: 1 },
              "<+=0%"
            )
            .fromTo(
              card1Ref.current,
              { x: "-100%" },
              { x: "50%", duration: 1 },
              "<+=0%"
            )

            .fromTo(
              card2Ref.current,
              { x: "100%" },
              { x: "-50%", duration: 1 },
              "<+=0%"
            )
            .fromTo(
              middleHeadingRef.current,
              { x: "-100%", y: "100%" },
              { x: 0, y: 0, duration: 1 },
              "<+=0%"
            )
            .fromTo(
              phoneRef.current,
              { transform: "scale(1.5) translate(5%, -5%) rotate(15deg)" },
              { transform: "rotate(15deg)", duration: 1 },
              "<+=0%"
            )
            .fromTo(
              handRef.current,
              { transform: "scale(1.5) translate(-66%, 61%)" },
              { transform: "translate(-46%, 43%)", duration: 1 },
              "<+=0%"
            )
            .fromTo(
              card3Ref.current,
              { width: "75%" },
              { width: "100%", duration: 1 }
            )
            .fromTo(
              card1Ref.current,
              { x: "50%" },
              { x: 0, duration: 1 },
              "<+=0%"
            )
            .fromTo(
              card2Ref.current,
              { x: "-50%" },
              { x: 0, duration: 1 },
              "<+=0%"
            )
            .fromTo(
              phoneRef.current,
              { transform: "rotate(15deg)" },
              { transform: "rotate(12deg)", duration: 1 },
              "<+=0%"
            )
            .fromTo(
              handRef.current,
              { transform: "translate(-46%, 43%)" },
              {
                transform: "scale(1) translate(-46%, 43%) rotate(7deg)",
                duration: 1,
              },
              "<+=0%"
            );

          return () => {
            tl.kill();
          };
        });
        mm.add("(max-width: 991px)", () => {
          const handTimeline = gsap.timeline({
            scrollTrigger: {
              invalidateOnRefresh: true,
              start: "bottom 100%",
              end: "top 30%",
              scrub: true,
              trigger: handRef.current,
            },
          });

          const commonTimeline = (trigger) => {
            return gsap.timeline({
              scrollTrigger: {
                invalidateOnRefresh: true,
                start: "bottom 100%",
                end: "top 20%",
                scrub: true,
                trigger: trigger,
              },
            });
          };
          const tl1 = commonTimeline(card2Ref.current);
          const tl2 = commonTimeline(box1Ref.current);
          const tl3 = commonTimeline(box2Ref.current);
          tl1.fromTo(card2Ref.current, { y: -120 }, { y: 0 });
          tl2.fromTo(box1Ref.current, { y: -220 }, { y: 0 });
          tl3.fromTo(box2Ref.current, { y: -320 }, { y: 0 });
          handTimeline
            .fromTo(
              handRef.current,
              { transform: "translate(-35%, 30%) rotate(20deg)" },
              { transform: "translate(-35%, 30%) rotate(5deg)" }
            )
            .fromTo(
              phoneRef.current,
              { transform: "rotate(10deg) translate(25px, -70px) scale(0.9)" },
              { transform: "rotate(10deg) translate(18px, -25px) scale(1)" },
              "<+=0%"
            );

          return () => {
            tl1.kill();
            tl2.kill();
            tl3.kill();
          };
        });
      }, 0);
    }
  }, [loader]);

  return (
    <div className={styles.benefits} id="moveSection">
      <Container>
        <div className={styles.inner_benefits} ref={sectionRef}>
          <div className="heading" ref={headingRef}>
            <img src="/images/logo.svg" alt="" />
            <h1>Move</h1>
            <p>
              Our app that lets you earn free $AMO just for walking & running!
            </p>
          </div>
          <div className={styles.benefits_wrapper}>
            <div className={`${styles.middle_box} `}>
              <div className={styles.middle_heading} ref={middleHeadingRef}>
                <h5>
                  Earn $AMO
                  <br /> for walking
                  <br /> and running.
                </h5>
              </div>
              <div className={styles.images}>
                <img
                  className={styles.screen}
                  ref={phoneRef}
                  src="/images/benefits_screen.png"
                  alt="screen"
                />
                <img
                  className={styles.hand}
                  ref={handRef}
                  src="/images/benefits_hand.png"
                  alt="hand"
                />
              </div>
              <p>
                Amino Move opens up the amino ecosystem to millions of
                additional users worldwide.
              </p>
              <div className={`${styles.layer} `} ref={layerRef} />
            </div>
            <div className={`${styles.top_wrapper}`}>
              <div className={`${styles.box} ${styles.leftBox}`} ref={card1Ref}>
                <h5>No Barriers</h5>
                <p>
                  The Amino Move app is for everybody. No NFTs or even a crypto
                  wallet required to use!
                </p>
              </div>
              <div
                className={`${styles.box} ${styles.rightBox}`}
                ref={card2Ref}
              >
                <h5>Free to use</h5>
                <p>
                  Free and easy to use, no Catch. Just earn $AMO for simply
                  walking with the app!{" "}
                </p>
              </div>
            </div>

            <div className={`${styles.bottom_wrapper} `} ref={card3Ref}>
              <div className={styles.box} ref={box1Ref}>
                <h5>
                  Compete
                  <br /> and Earn.
                </h5>
                <p>
                  Hit the 10k daily step goal to maintain your streak, multiply
                  your earnings and claim your spot on the leaderboard!
                </p>
              </div>
              <div className={styles.box} ref={box2Ref}>
                <h5>
                  Fun
                  <br /> Features
                </h5>
                <p>
                  Complete the daily 1 mile running challenge for bonus $AMO,
                  with even more way to earn coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoveBenefits;
