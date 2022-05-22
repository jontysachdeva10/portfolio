import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
  padding: 2.5rem 4.5rem;
  overflow: hidden;
  background: #e1dfdd;
  height: 7rem;
  display: flex;
  flex-direction: row;
`;

const NavIntro = styled.div`
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  position: fixed;
`;

const NavPosition = styled.div`
  font-size: 1.4rem;
  width: 13rem;
  font-family: "NeueMontrealMedium";
  margin-left: 28rem;
`;


const NavMenu = styled.div`
  position: fixed;
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  margin-left: 56.5rem;

  a {
    color: black;
    text-decoration: none;
    display: inline-block;
    position: relative;

    &.underline-effect:after {
      content: "";
      position: absolute;
      left: 0;
      display: inline-block;
      height: 1.2em;
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

const Nav = () => {
    return (
        <Navbar>
          <NavIntro>Jonty Sachdeva</NavIntro>
          <NavPosition>Frontend Developer at Publicis Sapient</NavPosition>
          <NavMenu>
            <a className="underline-effect" href="#">
              Work,&nbsp;&nbsp;
            </a>
            <a className="underline-effect" href="#">
              About,&nbsp;&nbsp;
            </a>
            <a className="underline-effect" href="#">
              Contact
            </a>
          </NavMenu>
        </Navbar>
    )
}

export default Nav;