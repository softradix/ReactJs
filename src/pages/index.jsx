import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Bars } from "react-loader-spinner";
import Scrollbar from "smooth-scrollbar";
import { UserContext } from "../context";
import PopUp from "../pageComponents/common/PopUp";
import Footer from "../pageComponents/common/footer";
import GetInTouch from "../pageComponents/common/getInTouch";
import Header from "../pageComponents/common/header";
import Banner from "../pageComponents/home/banner";
import CatalogSection from "../pageComponents/home/catalog";
import AminoEcosystem from "../pageComponents/home/ecosystem";
import GetRewardedSection from "../pageComponents/home/getRewarded";
import HowItWorks from "../pageComponents/home/howItWorks";
import MeetAmino from "../pageComponents/home/meetAmino";
import MoveBenefits from "../pageComponents/home/moveBenefits";
import OurMobileApp from "../pageComponents/home/ourMobileApp";
import ShopSection from "../pageComponents/home/shop";
import WalletSection from "../pageComponents/home/wallet";
import bannerVideoWebM from "../assets/videos/bannerVideo1.webm";
import styles from "../scss/pages/home.module.scss";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
  const containerRef = useRef(null);
  const [scrollInitialized, setScrollInitialized] = useState(false);
  const {
    setPreloader,
    preloader,
    setLoader,
    loader,
    setScroller,
    setWindowWidth,
    setWindowHeight,
    setJoinPopup,
    joinPopup,
  } = useContext(UserContext);

  const toggleModal = () => {
    setJoinPopup(!joinPopup);
  };

  useEffect(() => {
    const handleLoad = () => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = bannerVideoWebM;
      document.head.appendChild(link);
      setPreloader(false);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      document.addEventListener("readystatechange", handleLoad);
    }
    return () => {
      document.removeEventListener("readystatechange", handleLoad);
    };
  }, []);
  useEffect(() => {
    const scroller = document.querySelector("#mainContainer");
    if (!preloader) {
      const bodyScrollBar = Scrollbar.init(scroller, {
        damping: 0.04,
        speed: 0.05,
        delegateTo: document,

        // alwaysShowTracks: true,
      });
      ScrollTrigger.defaults({ scroller: scroller });
      ScrollTrigger.scrollerProxy("#mainContainer", {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        },
      });
      bodyScrollBar.addListener(ScrollTrigger.update);
      setScroller(bodyScrollBar);
      setScrollInitialized(true);
    }
  }, [preloader]);
  useEffect(() => {
    const handleResize = () => {
      // const timeout = setTimeout(() => {
      //   window.location.reload();
      // }, 500);
      // clearTimeout(resizeTimeout);
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      ScrollTrigger.refresh();
    };

    if (scrollInitialized) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (scrollInitialized) {
        window.removeEventListener("resize", handleResize);
        // clearTimeout(resizeTimeout);
      }
    };
  }, [scrollInitialized]);
  useEffect(() => {
    if (scrollInitialized) {
      setTimeout(() => {
        setLoader(false);
      }, 1800);
      setInterval(() => {
        ScrollTrigger.refresh();
      }, 5000);
    }
  }, [scrollInitialized]);

  return (
    <>
      {loader ? (
        <div className="pageLoader">
          <Bars />
        </div>
      ) : (
        <></>
      )}
      {joinPopup ? <PopUp toggle={toggleModal} /> : null}

      <div className="mainContainer" ref={containerRef} id="mainContainer">
        <div className={styles.headerBanner_wrap}>
          <Header />
          <Banner />
          <HowItWorks />
        </div>
        <MeetAmino />
        <AminoEcosystem />
        {/* <OurPartners /> */}
        <div className={styles.blueSection_wrap}>
          <MoveBenefits />
          <OurMobileApp />
        </div>
        <div className={styles.blackSections_wrap}>
          <ShopSection />
          <GetRewardedSection />
          {/* <LifeSupportTech /> */}
          <CatalogSection />
          <WalletSection />
        </div>
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default Home;
