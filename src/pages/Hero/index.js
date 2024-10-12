import React, { useEffect, useRef } from "react";
import { Container, NavPosition, Intro, Resume, SubIntro } from "./Hero";
import { Underline } from "../../components/Underline";
import Transition from "../../components/Transition/index";
import gsap, { Power4 } from "gsap";
import "./Hero.scss";

const Hero = () => {
  const hero = gsap.timeline();

  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    hero.from(textRef.current, {
      duration: 1.5,
      y: "100%",
      ease: Power4.easeOut,
    });
  });

  return (
    <div>
      <Container ref={containerRef}>
        <Intro>
         JONTY SACHDEVA<br />
         FRONTEND ENGINEER 
        </Intro>
        <SubIntro>
          I build <Underline><span style={{ fontFamily: "NeueMontrealBold" }}>and occassionally design</span></Underline> User Experiences for web.
        </SubIntro>
        <div style={{ height: "10em" }}></div>
      </Container>
    </div>
  );
};

export default Hero;
