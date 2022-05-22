import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import "./Job.scss";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { Underline } from "../../components/Underline";

const Container = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem 4.5rem;
  background: black;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Header = styled.div`
  font-family: "NeueMontreal";
  color: #eb533b;
  font-size: 1.7rem;
`;

const HeaderTitle = styled.div`
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  color: #e1dfdd;
  float: right;
  letter-spacing: 0.1rem;
`;

const Job = () => {
  const [selected, setSelected] = useState(null);

  let data = [
    {
      company: "Publicis Sapient",
      role: "Software Engineer - II",
      date: "Nov 2021 - Present",
      contribution: [
      ]
    },
    {
      company: "Cognizant",
      role: "Jr. Software Engineer",
      date: "Dec 2019 - Oct 2021",
      contribution: [
        "Contributed in automating one of client's web application built on React & Node.js",
        "Designed, Provisioned & Implemented a new JMS service from scratch.",
        "Wrote automated functional tests using Nemo.js",
        "Fixed code quality & bugs across their various applications."
      ]
    },
  ];

  return (
    <Container>
      <Header>
        <h4>
          02<span style={{ color: "#e1dfdd" }}>.</span>
        </h4>
      </Header>
      <div>
        <HeaderTitle>WHERE I'VE WORKED</HeaderTitle>
        <div className="accordion">
          {data.map((item, i) => (
            <div className="items">
              <div className="title" onClick={() => setSelected(i)}>
                <span>
                  {selected === i ? <FiArrowDownRight /> : <FiArrowUpRight />}
                </span>
                <span style={{ float: 'right' }}>{item.company}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <p><Underline>{item.role}</Underline>,<span>{' '}{item.date}</span></p>
                <br/>
                <br/>
                <ul>
                  {item.contribution.map(x => <li>{x}</li> )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: '2rem'}}></div>
    </Container>
  );
};

export default Job;
