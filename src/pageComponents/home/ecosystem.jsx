import { gsap } from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../context";
import styles from "../../scss/pageComponents/ecosystem.module.scss";

const reelData = [
  "/images/eco/reelTop1.jpg",
  "/images/eco/reelTop2.jpg",
  "/images/eco/reelTop3.jpg",
  "/images/eco/reelTop4.jpg",
  "/images/eco/reelTop5.jpg",
  "/images/eco/reelTop6.jpg",
  "/images/eco/reelTop7.jpg",
  "/images/eco/reelTop8.jpg",
  "/images/eco/reelTop9.jpg",
  "/images/eco/reelTop10.jpg",
  "/images/eco/reelTop11.jpg",
];
const reelMidData = [
  "/images/eco/reelMid1.jpg",
  "/images/eco/reelMid2.jpg",
  "/images/eco/reelMid3.jpg",
  "/images/eco/reelMid4.jpg",
  "/images/eco/reelMid5.jpg",
  "/images/eco/reelMid6.jpg",
  "/images/eco/reelMid7.jpg",
  "/images/eco/reelMid8.jpg",
  "/images/eco/reelMid9.jpg",
  "/images/eco/reelMid10.jpg",
  "/images/eco/reelMid11.jpg",
];
const reelBottomData = [
  "/images/eco/reelBottom1.jpg",
  "/images/eco/reelBottom2.jpg",
  "/images/eco/reelBottom3.jpg",
  "/images/eco/reelBottom4.jpg",
  "/images/eco/reelBottom5.jpg",
  "/images/eco/reelBottom6.jpg",
  "/images/eco/reelBottom7.jpg",
  "/images/eco/reelBottom8.jpg",
  "/images/eco/reelBottom9.jpg",
  "/images/eco/reelBottom10.jpg",
  // "/images/eco/reelBottom11.jpg",
  // "/images/eco/reelTop1.jpg",
];
const AminoEcosystem = () => {
  const { loader, windowWidth } = useContext(UserContext);
  const [list1Transform, setList1Transform] = useState(0);
  const [list2Transform, setList2Transform] = useState(0);
  const [list3Transform, setList3Transform] = useState(0);
  const sectionRef = useRef(null);
  const list1Ref = useRef(null);
  const list2Ref = useRef(null);
  const list3Ref = useRef(null);
  const animation1Ref = useRef(null);
  const animation2Ref = useRef(null);
  const animation3Ref = useRef(null);

  // const reactBounding = sectionRef?.current?.getBoundingClientRect();
  // const windowWidth = reactBounding?.width;
  useEffect(() => {
    const calculateTransform = (element) => {
      const value =
        element?.current?.scrollWidth - element?.current?.offsetWidth;
      return value;
    };
    setList1Transform(calculateTransform(list1Ref));
    setList2Transform(calculateTransform(list2Ref));
    setList3Transform(calculateTransform(list3Ref));
  }, [windowWidth]);

  useEffect(() => {
    // const section = sectionRef.current;
    const list1 = list1Ref.current;
    const list2 = list2Ref.current;
    const list3 = list3Ref.current;
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const commonTimeline = (trigger) => {
            return gsap.timeline({
              scrollTrigger: {
                invalidateOnRefresh: true,
                scroller: "#mainContainer",
                start: "bottom bottom",
                end: "top top",
                scrub: true,
                trigger: trigger,
              },
            });
          };
          const list1Timeline = commonTimeline(list1);
          const list2Timeline = commonTimeline(list2);
          const list3Timeline = commonTimeline(list3);
          animation1Ref.current?.kill();
          animation2Ref.current?.kill();
          animation3Ref.current?.kill();
          animation1Ref.current = list1Timeline.fromTo(
            list1,
            { transform: `translateX(${-list1Transform}px)` },
            { transform: "translateX(0)" }
          );
          animation2Ref.current = list2Timeline.fromTo(
            list2,
            { transform: "translateX(0)" },
            { transform: `translateX(${-list2Transform}px)` }
          );
          animation3Ref.current = list3Timeline.fromTo(
            list3,
            { transform: `translateX(${-list3Transform}px)` },
            { transform: "translateX(0)" }
          );
          // function updateAllAnimations() {
          //   animation1Ref.current.invalidate().restart();
          //   animation2Ref.current.invalidate().restart();
          //   animation3Ref.current.invalidate().restart();
          // }
          // window.addEventListener("resize", updateAllAnimations);
          return () => {
            list1Timeline.kill();
            list2Timeline.kill();
            list3Timeline.kill();
          };
        });
      }, 0);
    }
  }, [loader, windowWidth]);
  return (
    <div className={styles.ecosystem}>
      <div className={styles.heading}>
        <Container>
          <h2>
            Our
            <br />
            Merchants
          </h2>
        </Container>
      </div>
      <div className={styles.ecosystem_wrapper} ref={sectionRef}>
        <div className={styles.reelOuter}>
          <div
            className={`${styles.reelWrapper} ${styles.reel1}`}
            ref={list2Ref}
          >
            {reelMidData.map((item) => (
              <div
                className={styles.singleImg}
                key={item}
                style={{ backgroundImage: `url(${item})` }}
              />
            ))}
          </div>
        </div>
        <div className={styles.reelOuter}>
          <div
            className={`${styles.reelWrapper} ${styles.reel2}`}
            ref={list3Ref}
          >
            {reelBottomData.map((item) => (
              <div
                className={styles.singleImg}
                key={item}
                style={{ backgroundImage: `url(${item})` }}
              />
            ))}
          </div>
        </div>
        <div className={styles.reelOuter}>
          <div
            className={`${styles.reelWrapper} ${styles.reel3}`}
            ref={list1Ref}
          >
            {reelData.map((item) => (
              <div
                className={styles.singleImg}
                key={item}
                style={{ backgroundImage: `url(${item})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AminoEcosystem;
