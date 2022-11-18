import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Job.scss";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { Underline } from "../../components/Underline";
import { Container, Header, HeaderTitle } from "./Job";

const Job = () => {
  const [selected, setSelected] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  let data = [
    {
      company: "Publicis Sapient",
      role: "Software Engineer - II",
      date: "Nov 2021 - Present",
      contribution: [],
    },
    {
      company: "Cognizant",
      role: "Jr. Software Engineer",
      date: "June 2019 - Oct 2021",
      contribution: [],
    },
  ];

  useEffect(() => {
    if(selected) setIsOpen(true);
  });

  return (
    <Container id="work">
      <Header>
        <h4>
          02<span style={{ color: "#e1dfdd" }}>.</span>
        </h4>
      </Header>
      <div>
        <HeaderTitle>WHERE I'VE WORKED</HeaderTitle>

        <div className="accordion">
          {data.map((item, i) => (
            <div className="items" key={item.company}>
              <div className="title" onClick={() =>  setSelected(i) }>
                <span style={{ transition: "all 0.5s ease-in-out" }}>
                  {selected === i ? (
                    <FiArrowDownRight
                      className="arrow-down"
                      style={{ fontSize: "1.1em", marginTop: '-17px' }}
                    />
                  ) : (
                    <FiArrowUpRight
                      className="arrow-up"
                      style={{ fontSize: "1.1em", marginTop: '-17px'}}
                    />
                  )}
                </span>
                <span style={isOpen ? { float: "right", fontFamily: 'NeueMontrealBold' } : { float: "right", fontFamily: 'NeueMontreal' }}>{item.company}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <div style={{ float: "right" }}>
                  <Underline>
                    <span style={{ fontFamily: "NeueMontrealBold" }}>
                      {item.role}
                    </span>
                  </Underline>
                  ,<span> {item.date}</span>
                </div>
                <br />
                <br />
                <ul>
                  {item?.contribution.map((x) => (
                    <li key={x.length}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "8em" }}></div>
    </Container>
  );
};

export default Job;
