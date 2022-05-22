import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  overflow: hidden;
  display: grid;
  /* flex-direction: column; */
  padding: 2rem 4rem;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
  background: #e1dfdd;
`;

const Header = styled.div`
  font-family: "NeueMontreal";
  /* margin-top: -1.6rem; */
  font-size: 1.7rem;
`;

const Description = styled.div`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: "NeueMontrealMedium";
  width: 46rem;
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
      <Header><h4>01/</h4></Header>
      <Description>
        Passionate about web technologies. I enjoy bridging the gap between engineering
        and designing by combinig my technical knowledge with keen eye for design.
        {/* <Skills></Skills> */}
      </Description>
      {/* <Header>ABOUT ME</Header> */}
      {/* <Description>
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
      </Skills> */}
    </Container>
  );
};

export default AboutMe;
