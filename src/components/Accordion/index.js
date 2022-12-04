import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "../../pages/Job/Job.scss";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="accordion">
      {data.map((item, i) => {
        const showContent = i === selected ? "show" : "";
        const fontWeightBold = i === selected ? "bold" : "";
        const ariaExpanded = i === selected ? "true" : "false";
        return (
          <AccordionItem
            showContent={showContent}
            fontWeightBold={fontWeightBold}
            ariaExpanded={ariaExpanded}
            item={item}
            index={i}
            onClick={() => setSelected(i)}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
