import { timeline } from "motion";
import React, { useEffect, useRef } from "react";
import "./Loading.scss";

function getSectionHeight(element) {
  const { height } = element.getBoundingClientRect();
  const { childElementCount } = element;

  return height / childElementCount;
}

const Loading = () => {

  const countRef = useRef(null);
  const countRef2 = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    if(countRef.current && countRef2.current) {
      const transformAmount = getSectionHeight(countRef.current);

      const sequence = new Array(3).fill("").flatMap((_, index) => [
        [countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
        [
          countRef2.current,
          { y: `-${transformAmount * (index + 1)}px` },
          { at: "-1.7" },
        ],
      ]);

      timeline(sequence, {
        defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 2}
      });
    }
  }, []);

  useEffect(() => {
    const sequence = [
      [loaderRef.current, { y: "-100vh" }, { at: "-0.5" }],
    ];
    timeline(sequence, {
      defaultOptions: {
        easing: [0.77, 0, 0.175, 1],
        duration: 1,
        delay: 7.5
      }
    })
  }, [])

  return (
    <div className="container" ref={loaderRef}>
      <div className="counter-container">
        <ul className="counter-list" ref={countRef}>
          <li>
            <h3>1</h3>
          </li>
          <li>
            <h3>{Math.floor(Math.random()* (5 - 2) + 2)}</h3>
          </li>
          <li>
            <h3>{Math.floor(Math.random()* (9 - 6) + 6)}</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
        </ul>
      </div>
    
      <div className="counter-container">
        <ul className="counter-list" ref={countRef2}>
          <li>
            <h3>{Math.floor(Math.random()* 10)}</h3>
          </li>
          <li>
            <h3>{Math.floor(Math.random()* 10)}</h3>
          </li>
          <li>
            <h3>{Math.floor(Math.random()* 10)}</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
        </ul>
      </div>

      {/* ----------------------------LOADING NAME ------------------------------------------------------- */}

      {/* <div className="loading__title">
        <span className="loading__title-text">JONTY SACHDEVA</span>
      </div> */}

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
