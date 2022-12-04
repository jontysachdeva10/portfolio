import React, { useEffect, useRef } from "react";
// import { CgArrowDown } from "react-icons/cg";
// import { motion } from "framer-motion";
import { Container, NavPosition, Intro, Resume } from "./Hero";
import { Underline } from "../../components/Underline";
import Transition from "../../components/Transition/index";
import gsap, { Power4 } from "gsap";
// import { FiArrowUpRight } from "react-icons/fi";
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
      {/* <Transition timeline={hero} /> */}
      <Container ref={containerRef}>
        {/* <NavPosition>Front-end Developer at Publicis Sapient</NavPosition> */}
        <Intro
        // as={motion.div}
        // initial={{ opacity: 0, translateY: 400 }}
        // animate={{ opacity: 1, translateY: 0 }}
        // transition={{ delay: 0.5, duration: 1 }}
        >
          {/* <motion.span> */}
          <span className="hidden-title">
            Full Stack Web developer who builds{" "}
            <span style={{ fontFamily: "NeueMontrealBold" }}>
              <Underline>and</Underline>{" "}
            </span>
          </span>
          <span className="hidden-title">
            <span style={{ fontFamily: "NeueMontrealBold" }}>
              <Underline>occassionally</Underline>{" "}
            </span>
          </span>
          <span className="hidden-title">
            <span style={{ fontFamily: "NeueMontrealBold" }}>
              <Underline>designs</Underline>{" "}
            </span>
            User Experiences.
          </span>
          {/* </motion.span> */}
        </Intro>
        {/* <div className="resume-btn">
          <div className="resume-btn__content">
            <span style={{ display: "flex", justifyContent: "center" }}>
              <FiArrowUpRight className="arrow-up" style={{ fontSize: "6rem" }} />
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: "8px",
                fontFamily: "NeueMontrealBold",
                fontSize: "1.1rem",
              }}
            >
              GET MY<br />RESUME
            </span>
          </div>
        </div> */}
        <div style={{ height: "10em" }}></div>
      </Container>
    </div>
  );
};

export default Hero;
