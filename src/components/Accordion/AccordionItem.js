import React from "react";
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
    <div className="items" key={item.company}>
      <dt>
        <button
          aria-expanded={ariaExpanded}
          onClick={onClick}
          aria-controls={`acc${index + 1}_desc`}
          className={`title ${fontWeightBold}`}
        >
          {ariaExpanded === "true" ? (
            <FiArrowDownRight
              style={{ float: "left", fontSize: "1.1em", marginTop: "17px" }}
              className="arrow-down"
            />
          ) : (
            <FiArrowUpRight
              style={{ float: "left", fontSize: "1.1em", marginTop: "17px" }}
              className="arrow-up"
            />
          )}
          <span style={{ float: "right" }}>{item.company}</span>
        </button>
      </dt>
      <dd>
        <p id={`acc${index + 1}_desc`} className={`content ${showContent}`}>
          <Underline>{item.role}</Underline>,&nbsp;
          <span style={{ fontFamily: "NeueMontrealItalic" }}>{item.date}</span>
        </p>
      </dd>
    </div>
  );
};

export default AccordionItem;
