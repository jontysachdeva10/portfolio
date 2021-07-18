import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  letter-spacing: 0.2em;
  color: black;
  line-height: 1.2;
  font-size: 1.5rem;

  &:before {
    color: #ff00c1;
    position: relative;
    content: "0" counter(section) ".";
    counter-increment: section 1;
    font-family: "Roboto Mono", monospace;
    margin-right: 10px;
    font-size: 1.2rem;
  }

  &:after {
    content: "";
    display: block;
    position: relative;
    top: -0.8rem;
    margin-left: 14rem;
    height: 1px;
    background-color: #ff00c1;
    width: 300px;
  }
`;

const Description = styled.div`
  margin-top: 2rem;
  color: #575757;
  p {
    margin-left: 0rem;
    max-width: 500px;
    font-family: "Noto Sans JP", sans-serif;
  }

  span {
      margin-left: 0rem;
      color: #ff00c1;
  }

  a {
    color: #ff00c1;
    font-family: "Noto Sans JP", sans-serif;
    text-decoration: none;
    display: inline-block;
    position: relative;
    margin-left: 0rem;
    margin-top: 0rem;

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

const Skills = styled.div`
  margin-top: -2.7rem;
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 300px));
    margin-left: -2rem;
    list-style: none;
    overflow: hidden;
  }

  li {
    color: #575757;
    font-family: "Roboto Mono", monospace;
  }

  ul,
  li::before {
    content: "▹";
    position: absolute;
    margin-left: -2.3rem;
    color: #ff00c1;
    line-height: 12px;
  }
`;

const AboutMe = (props) => {
  return (
    <Container>
      <Header>ABOUT ME</Header>
      <Description>
        <p>
          Hello! I am a Jr. Software Engineer at{" "}
          <a classname="underline-effect" href="#">
            Cognizant
          </a>
          , currently, working for{" "}
          <a classname="underline-effect" href="#">
            PayPal
          </a>{" "}
          client as a Full Stack Web Developer.
        </p>
        <p>
          As a Software Engineer, i enjoy bridging the gap between engineering
          and designing by combining my technical knowledge with keen eye for
          design to create a beautiful product. <span>I am still in learning stage,
          aspiring to be a amazing designer</span>.
        </p>
        <p>Here's my skills that I am currently working with:</p>
      </Description>
      <Skills>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>Express</li>
          <li>Node</li>
          <li>Git & Github</li>
        </ul>
      </Skills>
    </Container>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
