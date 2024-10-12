import React, { useEffect } from "react";
import { Underline } from "../Underline";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";


const AccordionItem = ({
  showContent,
  fontWeightBold,
  ariaExpanded,
  item,
  index,
  onClick,
}) => {
  return (
    <div className='items' key={item.company}>
        <button
          aria-expanded={ariaExpanded}
          onClick={onClick}
          aria-controls={`acc${index + 1}_desc`}
          className={`title ${fontWeightBold}`}
        >
          <FiArrowDownRight
              style={{ float: "left", fontSize: "1.1em", marginTop: "17px" }}
              className="item"
            />
          <span style={{ float: "right" }}>{item.company}</span>
        </button>
        <p className={`content ${showContent}`}>
          <Underline>{item.role}</Underline>,&nbsp;
          <span style={{ fontFamily: "NeueMontrealItalic" }}>{item.date}</span>
        </p>
    </div>
  );
};

export default AccordionItem;
