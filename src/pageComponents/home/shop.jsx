import React, { useContext, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../../scss/pageComponents/shopSection.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { UserContext } from "../../context";
gsap.registerPlugin(ScrollTrigger);

const ShopSection = () => {
  const brandsRow1 = [
    "/images/brands/brand_1.png",
    "/images/brands/brand_2.png",
    "/images/brands/brand_3.png",
    "/images/brands/brand_4.png",
    "/images/brands/brand_5.png",
    "/images/brands/brand_6.png",
    "/images/brands/brand_7.png",
    "/images/brands/brand_8.png",
    "/images/brands/brand_9.png",
    "/images/brands/brand_10.png",
  ];

  const brandsRow2 = [
    "/images/brands/brand_11.png",
    "/images/brands/brand_12.png",
    "/images/brands/brand_13.png",
    "/images/brands/brand_14.png",
    "/images/brands/brand_15.png",
    "/images/brands/brand_16.png",
    "/images/brands/brand_17.png",
    "/images/brands/brand_18.png",
    "/images/brands/brand_19.png",
    "/images/brands/brand_20.png",
    "/images/brands/brand_21.png",
  ];

  const brandsRow3 = [
    "/images/brands/brand_22.png",
    "/images/brands/brand_23.png",
    "/images/brands/brand_24.png",
    "/images/brands/brand_25.png",
    "/images/brands/brand_26.png",
    "/images/brands/brand_27.png",
    "/images/brands/brand_28.png",
    "/images/brands/brand_29.png",
    "/images/brands/brand_30.png",
    "/images/brands/brand_31.png",
  ];

  const { loader, windowWidth } = useContext(UserContext);
  const [list1Transform, setList1Transform] = useState(0);
  const [list2Transform, setList2Transform] = useState(0);
  const [list3Transform, setList3Transform] = useState(0);

  const shopRef = useRef(null);
  const shopWrapperRef = useRef(null);
  const step1Ref = useRef(null);
  const step1ParaRef = useRef(null);
  const step1ImgRef = useRef(null);
  const step1WalletImg = useRef(null);
  const step1CardImg = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step4ImgRef = useRef(null);
  const brand1ListRef = useRef(null);
  const brand2ListRef = useRef(null);
  const brand3ListRef = useRef(null);
  const circleRef = useRef(null);
  // ===== animation refs =================
  const animation1Ref = useRef(null);
  const animation2Ref = useRef(null);
  const animation3Ref = useRef(null);

  useEffect(() => {
    const calculateTransform = (element) => {
      const value =
        element?.current?.scrollWidth -
        (element?.current?.offsetParent?.offsetWidth - 42);
      console.log(
        "value",
        element?.current?.scrollWidth,
        element?.current?.offsetParent?.offsetWidth
      );
      return value;
    };
    if (brand3ListRef.current) {
      console.log("values set");
      setList1Transform(calculateTransform(brand1ListRef));
      setList2Transform(calculateTransform(brand2ListRef));
      setList3Transform(calculateTransform(brand3ListRef));
    }
  }, [windowWidth, loader, brand3ListRef]);

  useEffect(() => {
    const section = shopRef.current;
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              // scroller: "#mainContainer",
              trigger: section,
              start: "top top",
              // pin: "#mainContainer",
              pin: true,
              pinSpacing: true,
              // end: "top -40%",
              end: "+=370%",
              scrub: true,
              // markers: true, // for debugging purposes only
            },
          });

          tl.fromTo(
            step1ImgRef.current,
            {
              transform: "translate(0%, 25%)",
            },
            {
              transform: "translate(0%, -50%)",
              duration: 1,
            }
          )
            .fromTo(
              step1ImgRef.current,
              {
                right: "0%",
                transform: "translate(00%, -50%)",
              },
              {
                right: "100%",
                transform: "translate(0%, -50%)",
                duration: 1,
              }
            )
            .fromTo(
              step1WalletImg.current,
              {
                y: "-100%",
                x: "50%",
                opacity: 0,
              },
              {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 1,
              },
              "<+=0%"
            )
            .fromTo(
              step1CardImg.current,
              {
                y: "100%",
                x: "-50%",
                opacity: 0,
              },
              {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 1,
              },
              "<+=0%"
            )
            .fromTo(
              step1ParaRef.current,
              {
                opacity: 0,
              },
              {
                opacity: 1,
                duration: 1,
              },
              "<+=0%"
            )
            .fromTo(
              shopWrapperRef.current,
              {
                x: 0,
              },
              {
                x: "-100%",
                duration: 1,
              }
            )
            .fromTo(
              circleRef.current,
              {
                opacity: 0.2,
                y: 100,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
              },
              "<+=50%"
            )
            .fromTo(
              circleRef.current,
              {
                opacity: 1,
                y: 0,
                maxHeight: "100%",
              },
              {
                opacity: 0.2,
                y: 70,
                x: -70,
                maxHeight: "40%",
                duration: 1,
              }
            )
            .fromTo(
              shopWrapperRef.current,
              {
                x: "-100%",
              },
              {
                x: "-200%",
                duration: 1,
              },
              "<+=0%"
            )
            .fromTo(
              shopWrapperRef.current,
              {
                x: "-200%",
              },
              {
                x: "-300%",
                duration: 1,
              }
            )
            .fromTo(
              step4ImgRef.current,
              {
                y: "50%",
              },
              {
                y: 0,
                duration: 1,
              },
              "<+=0%"
            );

          return () => {
            tl.kill();
          };
        });
      }, 0);
    }
  }, [loader]);

  useEffect(() => {
    if (!loader) {
      setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(max-width: 991px)", () => {
          const commonTimeline = (trigger) => {
            return gsap.timeline({
              scrollTrigger: {
                invalidateOnRefresh: true,
                start: "bottom 80%",
                end: "top 15%",
                scrub: true,
                trigger: trigger,
              },
            });
          };
          const list1Timeline = commonTimeline(brand1ListRef.current);
          const list2Timeline = commonTimeline(brand2ListRef.current);
          const list3Timeline = commonTimeline(brand3ListRef.current);
          animation1Ref.current?.kill();
          animation2Ref.current?.kill();
          animation3Ref.current?.kill();
          animation1Ref.current = list1Timeline.fromTo(
            brand1ListRef.current,
            { x: -list1Transform },
            { x: 0 }
          );
          animation2Ref.current = list2Timeline.fromTo(
            brand2ListRef.current,
            { x: 0 },
            { x: -list2Transform }
          );
          animation3Ref.current = list3Timeline.fromTo(
            brand3ListRef.current,
            { x: -list3Transform },
            { x: 0 }
          );

          return () => {
            list1Timeline.kill();
            list2Timeline.kill();
            list3Timeline.kill();
          };
        });
      }, 0);
    }
  }, [loader, list3Transform]);
  return (
    <div className={styles.shop} ref={shopRef} id="shopSection">
      <div className={styles.shopWrapper} ref={shopWrapperRef}>
        <div className={styles.step1} ref={step1Ref}>
          <Container>
            <div className={styles.image} ref={step1ImgRef}>
              <img src="/images/shop/cashbackScreens.png" alt="" />
            </div>

            <div className={styles.textContent}>
              <h1>EARN CASHBACK</h1>
              <h4 className={styles.mobileHeading}>
                Earn cashback on amazing products
              </h4>
              <p ref={step1ParaRef}>
                Earn up to 30% cash back in $AMO with the Amino Shop app! Bonus
                $AMO is rewarded at Amino approved health and fitness retailers.{" "}
              </p>
              <div className={styles.walletImg}>
                <img
                  src="/images/shop/wallet.png"
                  alt="wallet"
                  ref={step1WalletImg}
                />
              </div>
              <div className={styles.cardsImg}>
                <img
                  src="/images/shop/cards.png"
                  alt="cards"
                  ref={step1CardImg}
                />
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.step2} ref={step2Ref}>
          <Container>
            {/* <div className={styles.image}>
              <img src="/images/shop/cashbackScreens.png" alt="cashback" />
            </div> */}
            <div className={styles.textContent}>
              <h1>
                ON AMAZING <br />
                PRODUCTS
              </h1>
              <div className={styles.circleWrapper} ref={circleRef}>
                <div className={`${styles.circle} ${styles.circle1}`}>
                  <img src="/images/shop/drink.png" alt="drink" />
                </div>
                <div className={`${styles.circle} ${styles.circle2}`}>
                  <img src="/images/shop/watch.png" alt="drink" />
                </div>
                <div className={`${styles.circle} ${styles.circle3}`}>
                  <img src="/images/shop/bag.png" alt="drink" />
                </div>
                <div className={`${styles.circle} ${styles.circle4}`}>
                  <img src="/images/shop/dumbbell.png" alt="drink" />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.step3} ref={step3Ref}>
          <Container>
            {/* <div className={styles.image}>
              <img src="/images/shop/cashbackScreens.png" alt="cashback" />
            </div> */}
            <div className={styles.textContent}>
              <h1>
                FROM THE
                <br /> BEST BRANDS
              </h1>
              <div className={styles.brands_wrap}>
                <div className={styles.brands} ref={brand1ListRef}>
                  {brandsRow1.map((item) => (
                    <div className={styles.item} key={item}>
                      <img src={item} alt="brand" />
                    </div>
                  ))}
                </div>

                <div className={styles.brands} ref={brand2ListRef}>
                  {brandsRow2.map((item) => (
                    <div className={styles.item} key={item}>
                      <img src={item} alt="brand2" />
                    </div>
                  ))}
                </div>

                <div className={styles.brands} ref={brand3ListRef}>
                  {brandsRow3.map((item) => (
                    <div className={styles.item} key={item}>
                      <img src={item} alt="brand3" />
                    </div>
                  ))}
                </div>
              </div>
              <p>
                +100s more coming soon. Some retailers signed, others pending
                approval.
              </p>
            </div>
          </Container>
        </div>
        <div className={styles.step4} ref={step4Ref}>
          <Container>
            <div className={styles.step4_wrapper}>
              <div className={styles.image} ref={step4ImgRef}>
                <div className={styles.circle}></div>
                <img src="/images/shop/shopMobileScreen.png" alt="screen" />
              </div>
              <div className="heading">
                <img className={styles.logo} src="/images/logo.svg" alt="" />
                <h1>SHOP</h1>
                <h4>Launching Q4 2023</h4>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
