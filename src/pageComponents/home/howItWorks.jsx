import { gsap } from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../context";
import styles from "../../scss/pageComponents/howItWorks.module.scss";
import { gradientCircle } from "../../assets/icons";

const HowItWorks = () => {
  const cardsData = [
    {
      title: "Shop 1",
      description:
        "Sign up to Amino. Download one of our free apps to get started!",
      // hoverDesc: "Sign up today and start with 100 $AMO in your account!",
      step: 1,
      image: "/images/3dPhone.png",
    },
    {
      title: "Earn",
      description:
        "Enjoy improving your health and fitness, while earning $AMO to your built in amino wallet.",
      // hoverDesc:
      //   "Earn cash back in $AMO for shopping at Amino approved retailers.",
      step: 2,
      image: "/images/cash.png",
    },
    {
      innerCards: [
        {
          step: 3,
          title: "Claim",
          description:
            "Spend $AMO using your Amino VISA debit card with your favourite retailers and brands to earn $AMO cashback rewards.",
          // hoverDesc:
          //   "Pick from Merch, Equipment, Sports Tech and other exclusive items and experiences.",
          image: "/images/shopBag.png",
        },
        {
          title: "Claim",
          description:
            "Pick amazing sports & lifestyle items or exclusive fan experiences from our catalog to redeem with your $AMO tokens. ",
          // hoverDesc:
          //   "Pick from Merch, Equipment, Sports Tech and other exclusive items and experiences.",
          image: "/images/webshop.png",
        },
        {
          title: "Claim",
          description:
            "Swap between $AMO and other cryptos, or you can hold and stake $AMO in the app to earn additional perks and bonuses. ",
          // hoverDesc:
          //   "Pick from Merch, Equipment, Sports Tech and other exclusive items and experiences.",
          image: "/images/piggyBank.png",
        },
      ],
    },
  ];
  const { loader } = useContext(UserContext);
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!loader) {
      setTimeout(() => {
        // const sectionTransform =
        //   sectionRef?.current?.scrollWidth - sectionRef?.current?.offsetWidth;
        let mm = gsap.matchMedia();
        mm.add("(min-width: 1281px)", () => {
          const lifeTimeline = gsap.timeline({
            scrollTrigger: {
              scroller: "#mainContainer",
              trigger: section,
              start: "bottom 110%",
              end: "top 20%",
              scrub: true,
              // markers: true,
            },
          });

          lifeTimeline
            .fromTo(
              card1Ref.current,
              { y: "100%", opacity: 0 },
              { y: 0, opacity: 1 }
            )
            .fromTo(
              card2Ref.current,
              { y: "100%", opacity: 0 },
              { y: 0, opacity: 1 },
              "<+=30%"
            )
            .fromTo(
              card3Ref.current,
              { y: "100%", opacity: 0 },
              { y: 0, opacity: 1 },
              "<+=30%"
            );
          // .fromTo(
          //   section,
          //   { x: 0 },
          //   {
          //     x: `${-(1700 - sectionRef?.current?.offsetWidth)}px`,
          //   },
          //   "<+=90%"
          // );
          return () => {
            lifeTimeline.kill();
          };
        });
      }, 0);
    }
  }, [loader]);
  return (
    <div
      className={styles.howWork}
      // style={{ backgroundImage: "url(/images/waveBg.jpg)" }}
      id="howSection"
    >
      <Container>
        <div className={styles.heading}>
          <h2>
            How it
            <br /> works
          </h2>
        </div>
        <div className={styles.howWork_wrapper} ref={sectionRef}>
          {cardsData.map((item, index) => (
            <div
              key={index}
              className={`${styles.card_col} ${
                item?.innerCards?.length ? styles.hasInnerCard : null
              }`}
              ref={index === 0 ? card1Ref : index === 1 ? card2Ref : card3Ref}
            >
              <div className={styles.card}>
                {item?.innerCards?.length ? (
                  <div className={styles.innerCards_wrap}>
                    {item.innerCards.map((innerCard, i) => (
                      <div className={styles.innerCard} key={i}>
                        <div className={styles.head}>
                          <div className={styles.left_content}>
                            {innerCard.step && (
                              <h4 className={styles.step_number}>
                                <span className={styles.circle_icn}>
                                  {gradientCircle}
                                </span>
                                {innerCard.step}
                              </h4>
                            )}
                            {/* <h4>{innerCard.title}</h4> */}
                          </div>
                          <div className={styles.right_img}>
                            <img src={innerCard.image} alt="" />
                          </div>
                        </div>
                        <p>
                          <span className={styles.desc}>
                            {innerCard.description}
                          </span>
                          <span className={styles.hoverDesc}>
                            {innerCard.hoverDesc}
                          </span>
                        </p>
                        {/* <div className={styles.btn_wrap}>
                        <Button variant="outline-light" size="lg">
                          Learn More
                        </Button>
                      </div> */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className={styles.head}>
                      <div className={styles.left_content}>
                        <h4 className={styles.step_number}>
                          <span className={styles.circle_icn}>
                            {gradientCircle}
                          </span>
                          {item.step}
                        </h4>
                        {/* <h4>{item.title}</h4> */}
                      </div>
                      <div className={styles.right_img}>
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                    <p>
                      <span className={styles.desc}>{item.description}</span>
                      <span className={styles.hoverDesc}>{item.hoverDesc}</span>
                    </p>
                    {/* <div className={styles.btn_wrap}>
                    <Button variant="outline-light" size="lg">
                      Learn More
                    </Button>
                  </div> */}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.howWork_wrapperOuter}>
        </div> */}
      </Container>
    </div>
  );
};

export default HowItWorks;
