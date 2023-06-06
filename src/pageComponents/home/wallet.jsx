import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import walletVideo from "../../assets/videos/wallet.mp4";
import walletVideoWebm from "../../assets/videos/wallet.webm";
import styles from "../../scss/pageComponents/wallet.module.scss";
import gsap from "gsap";
import { UserContext } from "../../context";

const WalletSection = () => {
  const { loader } = useContext(UserContext);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    if (videoRef) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    const section = contentRef.current;
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const lifeTimeline = gsap.timeline({
            delay: 1,
            scrollTrigger: {
              scroller: "#mainContainer",
              trigger: section,
              start: "top 80%",
              end: "top 20",
              scrub: true,
            },
          });
          lifeTimeline.fromTo(
            contentRef.current,
            { opacity: 0, x: "-50%" },
            { x: 0, opacity: 1 }
          );

          return () => {
            lifeTimeline.kill();
          };
        });
      }, 0);
    }
  }, [loader]);
  return (
    <div className={styles.wallet} id="aminoWalletSection">
      <Container>
        <div className={styles.walletTop}>
          <div className="heading">
            <img src="/images/logo.svg" alt="" />
            <h1>WALLET</h1>
            <h4>Store, Swap and Stake your $AMO</h4>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.wallet_wrapper}>
          <div className={styles.content} ref={contentRef}>
            <h2>Keep your $AMO safe in the app!</h2>
            <p>
              The{" "}
              <span>
                $AMO you earn is banked automatically to your account. You can
                use our app's built in wallet
              </span>{" "}
              to store it safely while you save up for the products and
              experiences you want!
            </p>
            <p>
              $AMO can be traded freely with other cryptos, or you can stake it
              while you save.
              <span>
                By staking $AMO you can level up your loyalty tier and unlock
                even more exclusive perks{" "}
              </span>
              within the Amino ecosystem.
            </p>
          </div>
          <div className={styles.video_wrapper}>
            <video
              autoPlay
              playsInline
              muted
              loop
              ref={videoRef}
              preload="auto"
            >
              <source src={walletVideoWebm} type="video/webm" />
              <source src={walletVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WalletSection;
