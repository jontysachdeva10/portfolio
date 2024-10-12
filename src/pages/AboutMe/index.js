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
        <h4>01.</h4>
      </Header>
      <div>
        <HeaderTitle>ABOUT ME</HeaderTitle>
        <Description>
          passionate web developer & a seasoned front-end engineer dedicated to
          creating immersive and responsive web experiences.
          <br />
          <br />
          When I am not at computer, I'm probably playing games, binge watching
          or making sketches.
        </Description>
        <div></div>
        <SubDescription>
          With a background in software engineering, I have always been more
          inclined towards the frontend. I enjoy bridging the gap between design
          and engineering by combining my technical knowledge.
          <br />
          <br />
          I assist in driving the growth of client's business by leveraging the
          use of my technical skills. I am competent in my front-end as well as
          back-end abilities to the point that I am able to confidently deliver
          the deliverables to the clients.
          <br />
          <br />
          <Underline>
            <span style={{ fontFamily: "NeueMontrealBold", color: "black" }}>
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
