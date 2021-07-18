import React from "react";
import styled from "styled-components";
import "./Job.scss";

const Container = styled.div`
  height: 70vh;
  position: relative;
  overflow: hidden;
  width: 100%;
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
    counter-increment: section 2;
    font-family: "Roboto Mono", monospace;
    margin-right: 10px;
    font-size: 1.2rem;
  }

  &:after {
    content: "";
    display: block;
    position: relative;
    top: -0.8rem;
    margin-left: 24rem;
    height: 1.5px;
    background-color: #ff00c1;
    width: 300px;
  }
`;

const TabList = styled.div`
  margin-left: 0rem;
  color: #ff00c1;
  font-family: "Roboto Mono", monospace;
  button {
    cursor: pointer;
    border: 0px;
    border-radius: 0px;
  }
`;

const TabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 10rem;
  margin-top: -4.2rem;
  h3 {
    font-family: "Noto Sans JP", sans-serif;
    .company {
      color: #ff00c1;
      margin-left: 0.4rem;
    }
    .range {
      font-size: 0.7em;
      margin-top: 0rem;
      font-weight: 200;
      color: #575757;
    }
    .client {
      color: #ff00c1;
      letter-spacing: 0.2em;
      margin-top: 1rem;
      font-size: 0.8em;
    }
    ul {
      margin-top: -1rem;
      list-style: none;
      overflow: hidden;
    }

    li {
      color: black;
      font-family: "Roboto Mono", monospace;
      font-weight: 400;
      font-size: 1rem;
      span {
          margin: 0;
          color: #ff00c1;
      }
    }

    ul,
    li::before {
      content: "▹";
      position: absolute;
      margin-left: -1.3rem;
      color: #ff00c1;
      line-height: 17px;
    }

    .range-2 {
        font-size: 0.7em;
        color: #575757;
        font-weight: 200;
    }
  }
`;

const Job = () => {
  return (
    <Container>
      <Header>WHERE I'VE WORKED</Header>
      <TabList>
        <button className="my-button">Cognizant</button>
      </TabList>
      <TabPanels>
        <h3>
          <span>Jr. Software Engineer</span>
          <span className="company">@ Cognizant</span>
          <p className="range">June 2019 - Present</p>
          <p className="client">CLIENT / PROJECT</p>
          <ul>
            <li>PayPal, <span>Full Stack Web Developer</span></li>
            <span className="range-2">Aug 2020 - Present</span>
            <li>MetLife, <span>Backend Java Developer</span></li>
            <span className="range-2">Dec 2019 - July 2020</span>
          </ul>
        </h3>
      </TabPanels>
    </Container>
  );
};

export default Job;
