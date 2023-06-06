import { gsap } from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import bannerVideo from "../../assets/videos/bannerVideo1.mp4";
// import bannerVideoWebM from "../../assets/videos/bannerVideo1.webm";
import { UserContext } from "../../context";
import styles from "../../scss/pageComponents/banner.module.scss";

const Banner = () => {
  const videoRef = useRef(null);
  const { loader } = useContext(UserContext);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const lifeTimeline = gsap.timeline({
            delay: 1,
            scrollTrigger: {
              scroller: "#mainContainer",
              trigger: section,
              start: "top 100",
              end: "top -120",
              scrub: true,
              // markers: true,
            },
          });
          lifeTimeline
            .fromTo(
              contentRef.current,
              { y: "50%" },
              { y: 0, duration: 0.8, ease: "none" }
            )
            .fromTo(
              card2Ref.current,
              { opacity: 0, y: "100%" },
              { opacity: 1, y: 0, duration: 0.6, ease: "none" }
              // "<+=50%"
            )
            .fromTo(
              card3Ref.current,
              { opacity: 0, y: "100%" },
              { opacity: 1, y: 0, duration: 0.6, ease: "none" }
              // "<+=50%"
            );
          return () => {
            lifeTimeline.kill();
          };
        });
      }, 0);
    }
  }, [loader]);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className={styles.banner} ref={sectionRef}>
      <Container className="containerLeft">
        <div className={styles.bannerInner}>
          <div>
            <div className={styles.content} ref={contentRef}>
              <h5>When you join amino</h5>
              <h1>
                <span>IT PAYS</span>
                <span className={styles.line2} ref={card2Ref}>
                  TO BE
                </span>
                <span className={styles.line3} ref={card3Ref}>
                  HEALTHY
                </span>
              </h1>
            </div>
          </div>
          <div className={styles.graphic}>
            <video
              ref={videoRef}
              loop
              muted
              autoPlay
              playsInline
              preload="auto"
            >
              {/* <source src={bannerVideoWebM} type="video/webm" /> */}
              <source src={bannerVideo} type="video/mp4" />
              Video is not supporting
            </video>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
