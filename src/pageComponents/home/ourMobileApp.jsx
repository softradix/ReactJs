import { gsap } from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import styles from "../../scss/pageComponents/ourMobileApp.module.scss";
import { UserContext } from "../../context";
import { Link } from "react-router-dom";

const OurMobileApp = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const ballsImageRef = useRef(null);
  const leftImgRef = useRef(null);
  const cartoonRef = useRef(null);
  // const rightContentFirstRef = useRef(null);
  const rightContentSecondRef = useRef(null);
  const buttonsRef = useRef(null);
  const { loader } = useContext(UserContext);

  useEffect(() => {
    // const section = sectionRef.current;
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const mobileTl = gsap.timeline({
            scrollTrigger: {
              // scroller: "#mainContainer",
              trigger: wrapperRef.current,
              start: "top 55%",
              end: "top -35%",
              scrub: true,
              // markers: true,
            },
          });
          const mobileTl1 = gsap.timeline({
            scrollTrigger: {
              // scroller: "#mainContainer",
              trigger: wrapperRef.current,
              start: "bottom 100%",
              // end: "top -30%",
              end: "bottom 85%",
              scrub: true,
            },
          });

          mobileTl
            // .fromTo(
            //   wrapperRef.current,
            //   { opacity: 0 },
            //   { opacity: 1, duration: 1 }
            // )
            .fromTo(ballsImageRef.current, { y: "20%" }, { y: 0 }, "<+=0%")
            .fromTo(
              leftImgRef.current,
              { y: "40%", opacity: 0 },
              { y: 0, opacity: 1 },
              "<+=0%"
            )
            .fromTo(
              rightContentSecondRef.current,
              { x: "120%" },
              { x: 0 },
              "<+=0%"
            )
            .fromTo(
              cartoonRef.current,
              { x: -300, opacity: 0, scale: 0.8 },
              { x: 0, opacity: 1, scale: 1 },
              "<+=70%"
            );

          mobileTl1.fromTo(
            buttonsRef.current,
            { opacity: 0, visibility: "hidden" },
            { opacity: 1, visibility: "visible" }
          );

          return () => {
            mobileTl.kill();
            mobileTl1.kill();
          };
        });
      }, 0);
    }
  }, [loader]);
  return (
    <div className={styles.ourApp} ref={sectionRef}>
      <div
        className={styles.ourApp_inner}
        style={{ backgroundImage: "url(/images/ourMobileBg.jpg)" }}
        ref={wrapperRef}
      >
        <img
          ref={ballsImageRef}
          className={styles.ballsImg}
          src="/images/ourApp_balls.png"
          alt="balls"
        />
        <Container>
          <div className={styles.ourApp_wrapper}>
            <div className={styles.ourApp_left}>
              <div className={styles.mobileImg} ref={leftImgRef}>
                <img src="/images/ourAppMobile.png" alt="mobile" />
              </div>
              <div className={styles.cartoonImg}>
                <img
                  src="/images/boy_cartoon.gif"
                  alt="mobile"
                  ref={cartoonRef}
                />
              </div>
            </div>
            <div className={styles.ourApp_right}>
              {/* <div
                className={styles.content_firstSlide}
                ref={rightContentFirstRef}
              >
                <h4>
                  Already <span>over 600k users</span> worldwide with over 80k
                  active daily!{" "}
                </h4>
                <ul>
                  <li>
                    Get rewarded with free $AMO every day just by walking with
                    the Amino Move app!{" "}
                  </li>

                  <li>
                    Signing up is effortless, with no need for NFTs or a crypto
                    wallet. Reach your 10,000 daily step goal to maintain your
                    streak and multiply your earnings!{" "}
                  </li>

                  <li>
                    Stay tuned for our upcoming running challenge feature, where
                    you can improve your jogging skills and earn even more bonus
                    $AMO rewards.
                  </li>
                </ul>
              </div> */}
              <div
                className={styles.content_secondSlide}
                ref={rightContentSecondRef}
              >
                <div className="heading">
                  <img src="/images/logo.svg" alt="" />
                  <h1>MOVE</h1>
                  <h4>
                    Our app that lets you earn free $AMO just for walking &
                    running!
                  </h4>
                </div>
                <div className={styles.store_buttons} ref={buttonsRef}>
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.fitcoin.softradix"
                    target="_blank"
                  >
                    <img src="/images/playStore.png" alt="" />
                  </Link>
                  <span>
                    <Link
                      to="https://apps.apple.com/us/app/pegasus-by-amino/id6443603818"
                      target="_blank"
                    >
                      <img src="/images/appleStore.png" alt="" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurMobileApp;
