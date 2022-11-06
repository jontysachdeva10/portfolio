import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="container">
      <div className="loading__title">
        <span className="loading__title-text">JONTY SACHDEVA</span>
      </div>

      {/* ---------------------------------------------- LOADING TIMER ---------------------------------------------------- */}

      {/* <div className="loading__title">
        <span className="loading__title--1">Jonty Sachdeva</span>
        <br/>
        <span className="loading__title--2">Portfolio &#169;2022</span>
      </div>
      <div className="loading__container">
        <span className="timer">{''}</span>
      </div> */}

      {/* ---------------------------------------------- LOADING GLITCH --------------------------------------------------- */}

      {/* <h1 className="glitch" data-text="Loading...">
        Loading...
      </h1> */}
    </div>
  );
};

export default Loading;
