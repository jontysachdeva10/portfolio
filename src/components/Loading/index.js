import React from "react";
import "./Loading.scss";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 2.5rem 4.5rem;
  overflow: hidden;
  background: #e1dfdd;
  height: 86vh;
`;


const Loading = () => {
  return (
    <Container>
      <div className="loading__title">
        <span className="loading__title--1">Jonty Sachdeva</span>
        <br/>
        <span className="loading__title--2">Portfolio &#169;2022</span>
      </div>
      <div className="loading__container">
        <span className="timer">{''}</span>
      </div>
      {/* <h1 className="glitch" data-text="Loading...">
        Loading...
      </h1> */}
    </Container>
  );
};

export default Loading;