import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";


const Container = styled.nav`
  background-color: black;
  mix-blend-mode: difference;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.5rem 4.5rem;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100000;
`;

const NavIntro = styled.div`
  color: #e1dfdd;
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
`;

const NavMenu = styled.div`
  color: #e1dfdd;
  position: relative;
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";

  a {
    text-decoration: none;
    display: inline-block;
    position: relative;
    cursor: pointer;
    color: #e1dfdd;

    &.underline-effect:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 0;
      display: inline-block;
      height: 1.3em;
      width: 100%;
      border-bottom: 1.5px solid;
      opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s transform 0.35s;
      -webkit-transform: scale(0, 1);
      transform: scale(0, 1);
    }

    &.underline-effect:hover:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavIntro>
        <span>Jon®</span>
      </NavIntro>
      <NavMenu>
        <Link
          className="underline-effect"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          About
        </Link>
        ,&nbsp;
        <Link
          className="underline-effect"
          to="work"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Work
        </Link>
        ,&nbsp;
        <Link
          className="underline-effect"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
        >
          Contact
        </Link>
      </NavMenu>
    </Container>
  );
};

export default Navbar;
