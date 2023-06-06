import { gsap } from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import meetAminoVideo from "../../assets/videos/meetAminoVideo.mp4";
import meetAminoVideoWebm from "../../assets/videos/meetAminoVideo.webm";
import { UserContext } from "../../context";
import styles from "../../scss/pageComponents/meetAmino.module.scss";

const MeetAmino = () => {
  const { loader } = useContext(UserContext);
  const videoRef = useRef();
  const sectionRef = useRef();
  const wrapperRef = useRef();
  // const { ref, inView } = useInView({
  //   threshold: 0.7,
  // });
  // const [hasAnimated, setHasAnimated] = useState(false);
  // const zoomRotateAnimation = {
  //   // ref: ref,
  //   variants: {
  //     initial: { scale: 1 },
  //     animated: { scale: 6.25, rotate: 45 },
  //   },
  //   initial: "initial",
  //   animate: `${hasAnimated ? "animated" : "initial"}`,
  //   viewport: { once: true },
  //   transition: {
  //     duration: 1.7,
  //     delay: 0.2,
  //   },
  // };
  // useEffect(() => {
  //   if (inView && !hasAnimated) setHasAnimated(true);
  // }, [inView]);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const lifeTimeline = gsap.timeline({
            scrollTrigger: {
              // scroller: "#mainContainer",
              trigger: section,
              start: "top top",
              end: "+=120%",
              scrub: true,
              pin: true,

              // markers: true,
            },
          });

          lifeTimeline.fromTo(
            wrapper,
            { scale: 1 },
            { scale: 6.25, rotate: 45 }
          );
          return () => {
            lifeTimeline.kill();
          };
        });
      }, 0);
    }
  }, [loader]);

  useEffect(() => {
    if (videoRef) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div className={styles.meetAmino} ref={sectionRef}>
      <h1 className={styles.topText}>MEET</h1>
      <h1 className={styles.bottomText}>AMINO</h1>
      <div
        className={styles.meetAmino_wrapper}
        ref={wrapperRef}
        // {...zoomRotateAnimation}
      >
        <img src="/images/handsphone2.png" alt="handsPhone" />
        <div className={styles.videoWrap}>
          <video muted loop ref={videoRef}>
            <source src={meetAminoVideoWebm} type="video/webm" />
            <source src={meetAminoVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default MeetAmino;
