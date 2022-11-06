import React from "react";
import { Underline } from "../../components/Underline";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import {
  Container,
  Header,
  HeaderTitle,
  Description,
  SubDescription,
  Skills,
} from "./AboutMe";

const AboutMe = (props) => {
  return (
    <Container id="about">
      <Header>
        <h4>
          01<span style={{ color: "black" }}>.</span>
        </h4>
      </Header>
      <div>
        <HeaderTitle>ABOUT ME</HeaderTitle>
        <Description>
          Hi, my name is <Underline>Jonty Sachdeva</Underline>. I'm a passionate web developer who has a keen interest in animations &
          designs. I give my best in creating memorable web experiences.
          <br />
          <br />
          When I am not working.. I spend my days studying & exploring web
          experiences or binge watching anime.
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
          <Underline>
            <span style={{ fontFamily: "NeueMontrealBold" }}>
              Few technologies that I've been working with
            </span>
          </Underline>
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
      <div style={{ height: "8em" }}></div>
    </Container>
  );
};

export default AboutMe;
