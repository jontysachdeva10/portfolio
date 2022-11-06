import React, { useEffect, useRef } from "react";
import { CgArrowDown } from "react-icons/cg";
import { motion } from "framer-motion";
import {
  Container,
  NavPosition,
  Intro,
} from "./Hero";
import { Underline } from "../../components/Underline";
import { Link } from "react-scroll";
import Transition from "../../components/Transition/index";
import gsap, { Power4 } from "gsap";

const Hero = () => {
  const hero = gsap.timeline();
  const textRef = useRef(null);

  useEffect(() => {
    hero.from(
      textRef.current,
      {
        duration: 1.5,
        y: "100%",
        ease: Power4.easeOut,
      }
    );
  });

  return (
    <div>
      {/* <Transition timeline={hero} /> */}
      <Container>
        <NavPosition>Front-end Developer at Publicis Sapient</NavPosition>
        <Intro
        // as={motion.div}
        // initial={{ opacity: 0, translateY: 400 }}
        // animate={{ opacity: 1, translateY: 0 }}
        // transition={{ delay: 0.5, duration: 1 }}
        >
          {/* <motion.span> */}
          <span className="hidden-title" ref={textRef}>
            Full Stack developer who builds{" "}
            <Underline>
              <span style={{ fontFamily: "NeueMontrealBold" }}>and </span>
            </Underline>
          </span>
          <span className="hidden-title">
            <Underline>
              <span style={{ fontFamily: "NeueMontrealBold" }}>
                occassionally
              </span>
            </Underline>{" "}
          </span>
          <span className="hidden-title">
            <Underline>
              <span style={{ fontFamily: "NeueMontrealBold" }}>design</span>
            </Underline>{" "}
            user experiences.
          </span>
          {/* </motion.span> */}
        </Intro>
        <div style={{ height: "8em" }}></div>
      </Container>
    </div>
  );
};

export default Hero;
