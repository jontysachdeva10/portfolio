import React, { useEffect, useRef } from "react";
import "./Transition.scss";
import { Power4 } from "gsap";

const Transition = ({ timeline }) => {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
        duration: 1.5,
        y: '-100%',
        ease: Power4.easeOut
    });
  });
  return <div className="transition-effect" ref={trans}></div>;
};

export default Transition;
