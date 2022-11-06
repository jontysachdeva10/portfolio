import React, { useEffect, useRef } from "react";
import { CgArrowDown } from "react-icons/cg";
import { motion } from "framer-motion";
import {
  Container,
  Navbar,
  NavIntro,
  NavPosition,
  NavMenu,
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
        {/* <Navbar
          as={motion.div}
          initial={{ opacity: 0, translateY: -400 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <NavIntro>Jonty Sachdeva</NavIntro>
          <NavPosition>Frontend Developer at Publicis Sapient</NavPosition>
          <NavMenu>
            <Link
              className="underline-effect"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About
            </Link>
            ,&nbsp;
            <Link
              className="underline-effect"
              to="work"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Work
            </Link>
            ,&nbsp;
            <Link
              className="underline-effect"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              Contact
            </Link>
          </NavMenu>
        </Navbar> */}
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
        {/* <Image></Image> */}
        {/* <SecondContainer>
          <DownArrow>
            <CgArrowDown />
          </DownArrow>
          <Description>
            WEB DEVELOPER
          </Description>
          <Name>
            <span style={{ paddingLeft: "14.3rem", zIndex: "1" }}>JONTY</span>
            <br />
            SACHDEVA
          </Name>
        </SecondContainer> */}
        <div style={{ height: "8em" }}></div>
      </Container>
    </div>
  );
};

export default Hero;
