import React from "react";
import styled from "styled-components";
import { Underline } from "../../components/Underline";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const Container = styled.section`
  position: relative;
  overflow: hidden;
  display: grid;
  padding: 2rem 4rem;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
  background: #e1dfdd;
`;

const Header = styled.div`
  font-family: "NeueMontreal";
  color: #eb533b;
  font-size: 1.7rem;
`;

const HeaderTitle = styled.div`
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  color: black;
  float: right;
  letter-spacing: 0.1rem;
`;

const Description = styled.div`
  margin-top: 8rem;
  text-transform: uppercase;
  font-size: 2.7rem;
  font-family: "NeueMontrealMedium";
  width: 46rem;
`;

const SubDescription = styled.div`
  margin-top: 4rem;
  font-size: 1.5rem;
  font-family: "NeueMontrealMedium";
  width: 46rem;
  line-height: 1.4;
`;

const Skills = styled.div`
  ul {
    margin-top: 1rem;
    margin-left: -2.5rem;
    display: flex;
    flex-direction: row;
    /* display: grid;
    grid-template-columns: repeat(2, minmax(10rem, 42rem)); */
    list-style: none;
    overflow: hidden;
    justify-content: space-between;
    line-height: 2;
    font-size: 7rem;
  }

  li:hover {
    color: #eb533b;
    transition: 0.3s ease-in-out;
  }
  /* li::before {
    content: "▹";
    margin-left: -2rem;
  } */
`;

const AboutMe = (props) => {
  return (
    <Container>
      <Header>
        <h4>
          01<span style={{ color: "black" }}>.</span>
        </h4>
      </Header>
      <div>
      <HeaderTitle>ABOUT ME</HeaderTitle>
        <Description>
          I'm a <Underline>web developer</Underline> who has a keen interest in
          animations & designs. I <Underline>give my best</Underline> in
          creating memorable web experiences.
          <br />
          <br />
          When I am not working.. i spend my days studying, building or binge
          watching anime.
        </Description>
        <div></div>
        <SubDescription>
          With a background in software engineering, I have always been more
          inclined towards the frontend. I enjoy bridging the gap between design
          and engineering by combining my technical knowledge. I am competent in
          my frontend and backend abilities to the point that I am able to
          confidently deliver the deliverables to the clients.
          <br />
          <br />
          <Underline>Few technologies that I've been working with</Underline>
          <Skills>
            <ul>
              <li>
                <SiJavascript />
              </li>
              <li>
                <SiCss3 />
              </li>
              <li>
                <SiReact />
              </li>
              <li>
                <SiNodedotjs />
              </li>
              <li>
                <SiMongodb />
              </li>
            </ul>
          </Skills>
        </SubDescription>
      </div>
      <div style={{ height: "2rem" }}></div>
    </Container>
  );
};

export default AboutMe;
