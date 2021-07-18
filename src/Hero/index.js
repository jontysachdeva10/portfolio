import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./Hero.scss";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  font-size: 1.1rem;
  font-family: "Roboto Mono", monospace;
  color: #ff00c1;
  /* text-shadow: 2px 2px 2px #00fff9; */
`;

const Name = styled.div`
  margin-top: 0rem;
  font-size: 5rem;
  font-weight: 500;
  justify-content: space-around;
  font-family: "Dosis", sans-serif;
  span {
    font-family: "AvenirRoman";
    margin: 0;
    color: grey;
  }
`;

const Description = styled.div`
  /* font-size: 1.2rem; */
  font-family: "Noto Sans JP", sans-serif;
  margin-top: 0rem;
  color: #575757;
`;

const GetInTouch = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 1.1rem;
  margin-top: 2.5rem;
  color: #ff00c1;

  a {
    color: black;
    font-family: "Noto Sans JP", sans-serif;
    text-decoration: none;
    display: inline-block;
    position: relative;

    &.underline-effect:after {
      content: "";
      position: absolute;
      left: 0;
      display: inline-block;
      height: 1.2em;
      width: 100%;
      border-bottom: 1.5px solid;
      opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s transform 0.35s;
      -webkit-transform: scale(0, 1);
      transform: scale(0, 1);
    }

    &.underline-effect:hover:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const Hero = (props) => {
  return (
    <Container>
      <Intro>Hi, my name is</Intro>
      <Name>
        Jonty Sachdeva.<br />
        <span>I build things for web.</span>
      </Name>
      <Description>
        I am a design minded web developer, who aspires to build
        <br /> beautiful interfaces and experiences.
      </Description>
      <GetInTouch>
        Get In Touch
        {/* <span className="emoji_hand"></span> */}
        <a href="#" className="underline-effect">
          er.jontysachdeva@gmail.com
        </a>
      </GetInTouch>
    </Container>
  );
};

Hero.propTypes = {};

export default Hero;
