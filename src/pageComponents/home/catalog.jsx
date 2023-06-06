import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import styles from "../../scss/pageComponents/catalog.module.scss";
import gsap from "gsap";
import videoPath from "../../assets/videos/catalogVideo.mp4";
import { UserContext } from "../../context";

const CatalogSection = () => {
  const { loader } = useContext(UserContext);
  const wrapperRef = useRef(null);
  const catalogRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // const section = contentRef.current;
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          // const tl = gsap.timeline({
          //   defaults: { duration: 1 },
          //   scrollTrigger: {
          //     trigger: wrapperRef.current,
          //     pin: true,
          //     start: "top 20",
          //     end: "+=130%",
          //     scrub: true,
          //     onUpdate: (self) => {
          //       const frameNumber = (self.progress / 14) * 100 - 1; //this takes fine tuning divide your videos FPS by two. My video's FPS was 30, 14 was the sweet spot. -1 fixes an issue on safari where the video disappears at the end of the scrollTrigger
          //       videoRef.current.currentTime = frameNumber;
          //     },
          //   },
          // });
          const tl1 = gsap.timeline({
            delay: 1,
            scrollTrigger: {
              scroller: "#mainContainer",
              trigger: wrapperRef.current,
              start: "top 80%",
              end: "top 20",
              scrub: true,
            },
          });
          tl1.fromTo(
            contentRef.current,
            { opacity: 0, x: "50%" },
            { x: 0, opacity: 1 }
          );

          return () => {
            // tl.kill();
            tl1.kill();
          };
        });
      }, 0);
    }
  }, [loader]);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef.current]);

  return (
    <div className={styles.catalog} id="catalogSection">
      <div ref={catalogRef}>
        <Container>
          <div className={styles.catalogTop}>
            <div className="heading">
              <img src="/images/logo.svg" alt="" />
              <h1>CATALOG</h1>
              <h4>A curated selection of the hottest items.</h4>
            </div>
          </div>
        </Container>
        <Container>
          <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.image_wrapper}>
              <img src="/images/catalog_mask.png" alt="mask" />
              <video
                autoPlay
                playsInline
                muted
                loop
                ref={videoRef}
                preload="auto"
              >
                <source src={videoPath} type="video/mp4" />
              </video>
              {/* <img src="/images/catalog.jpg" alt="catalog" /> */}
            </div>
            <div className={styles.content} ref={contentRef}>
              <h2>Discover amazing rewards!</h2>
              <p>
                In the Amino Catalog you will{" "}
                <span>
                  discover an incredible selection of products, and exclusive
                  sports fan experiences.
                </span>{" "}
                We are partnering with the best brands, biggest teams and most
                talented athletes on the planet to create the{" "}
                <span>
                  ultimate destination for sporting goods and experiences.
                </span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CatalogSection;
