import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Job.scss";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { Underline } from "../../components/Underline";
import { Container, Header, HeaderTitle } from "./Job";
import Accordion from "../../components/Accordion";

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

  // useEffect(() => {
  //   if(selected) setIsOpen(true);
  // });

  return (
    <Container id="work">
      <Header>
        <h4>
          02.
        </h4>
      </Header>
      <div>
        <HeaderTitle>WHERE I'VE WORKED</HeaderTitle>
        <Accordion data={data} />
      </div>

      <div style={{ height: "8em" }}></div>
    </Container>
  );
};

export default Job;
