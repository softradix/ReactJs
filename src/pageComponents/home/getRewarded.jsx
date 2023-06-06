/* eslint-disable no-unused-expressions */
import gsap from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../context";
import videoPath from "../../assets/videos/rewardVideo.mp4";
import styles from "../../scss/pageComponents/getRewarded.module.scss";

const GetRewardedSection = () => {
  const videoWrapRef = useRef(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const { loader } = useContext(UserContext);
  console.log("videoRef", videoRef);
  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current?.play();
      videoRef.current?.pause();
      // setTimeout(() => {
      //   videoRef.current.currentTime === 0;
      // }, 1000);
    }
  }, [videoRef]);

  useEffect(() => {
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const tl = gsap.timeline({
            ease: "none",
            defaults: { duration: 3 },
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              start: "center center",
              end: "+=150%",
              scrub: true,
              onUpdate: (self) => {
                const frameNumber = (self.progress / 14) * 100 - 1; //this takes fine tuning divide your videos FPS by two. My video's FPS was 30, 14 was the sweet spot. -1 fixes an issue on safari where the video disappears at the end of the scrollTrigger
                videoRef.current.currentTime = frameNumber;
              },
            },
          });
          return () => {
            tl.kill();
          };
        });
        mm.add("(max-width: 991px)", () => {
          const tl = gsap.timeline({
            ease: "none",
            defaults: { duration: 3 },
            scrollTrigger: {
              trigger: videoWrapRef.current,
              start: "top 120%",
              end: "top 0%",
              scrub: true,
              onUpdate: (self) => {
                const frameNumber = (self.progress / 14) * 100 - 4; //this takes fine tuning divide your videos FPS by two. My video's FPS was 30, 14 was the sweet spot. -1 fixes an issue on safari where the video disappears at the end of the scrollTrigger
                videoRef.current.currentTime = frameNumber;
              },
            },
          });
          return () => {
            tl.kill();
          };
        });
      }, 0);
    }
  }, [loader]);
  return (
    <div className={styles.rewarded}>
      <Container>
        <div className={styles.rewarded_wrapper} ref={sectionRef}>
          <div className={styles.content}>
            <h2>Get Rewards in $AMO just for shopping.</h2>
            <p>
              The Amino Shop app offers <span>up to 30% cashback</span> in $AMO
              at hundreds of major retailers. Additionally, the app rewards you
              with bonus rewards{" "}
              <span>
                when shopping at Amino-approved health and fitness retailers
              </span>
              , incentivising you to make better shopping choices.{" "}
            </p>
            <p>
              As an Amino Rewards member, you'll also have access to{" "}
              <span>exclusive deals that are not available anywhere else</span>.
              Shop smarter, earn more, and take your health and fitness journey
              to the next level with Amino Shop.
            </p>
          </div>
          <div ref={videoWrapRef} className={styles.image_wrap}>
            <video autoPlay muted playsInline ref={videoRef} preload="auto">
              <source src={videoPath} type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetRewardedSection;
