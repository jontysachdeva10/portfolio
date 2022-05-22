import React from "react";
import { CgArrowDown } from "react-icons/cg";
import styled from "styled-components";
import { Underline } from "../../components/Underline";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2.5rem 4.5rem;
  overflow: hidden;
  background: #e1dfdd;
`;

const Navbar = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavIntro = styled.div`
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  /* position: fixed; */
`;

const NavPosition = styled.div`
  font-size: 1.4rem;
  width: 13rem;
  font-family: "NeueMontrealMedium";
  /* margin-left: 28rem; */
`;


const NavMenu = styled.div`
  /* position: fixed; */
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  /* margin-left: 56.5rem; */

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

const Intro = styled.div`
  margin-top: 1rem;
  font-size: 7rem;
  letter-spacing: 0.2rem;
  font-family: "NeueMontrealMedium";
  line-height: 1.1;
  text-transform: uppercase;
`;

const Image = styled.div`
  background-color: black;
  width: 60rem;
  height: 2rem;
  z-index: 999;
`;

const SecondContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
`;

const DownArrow = styled.span`
  font-size: 8rem;
  margin-top: 5.4rem;
  margin-left: -2rem;
`;

const Description = styled.p`
  text-transform: uppercase;
  font-family: "NeueMontrealMedium";
  font-size: 1.4rem;
  margin-top: 7.2rem;
  padding-left: 2rem;
  margin-left: 1.1rem;
`;

const Name = styled.div`
  font-size: 7rem;
  font-family: "NeueMontrealMedium";
  line-height: 0.9;
  letter-spacing: 0.2rem;
  justify-content: flex-end;
`;

const Hero = () => {
  return (
      <Container>
        <Navbar>
          <NavIntro>Jonty Sachdeva</NavIntro>
          <NavPosition>Frontend Developer at Publicis Sapient</NavPosition>
          <NavMenu>
            <a className="underline-effect" href="#">
              About,&nbsp;&nbsp;
            </a>
            <a className="underline-effect" href="#">
              Work,&nbsp;&nbsp;
            </a>
            <a className="underline-effect" href="#">
              Contact
            </a>
          </NavMenu>
        </Navbar>
        <Intro>
          I build <Underline>and{' '}</Underline><Underline>occassionally</Underline> <Underline>design</Underline> digital experiences.
        </Intro>
        {/* <Image></Image> */}
        {/* <SecondContainer>
          <DownArrow>
            <CgArrowDown />
          </DownArrow>
          <Description>
            WEB DEVELOPER
          </Description>
          <Name>
            <span style={{ paddingLeft: "14.3rem", zIndex: "1" }}>JONTY</span>
            <br />
            SACHDEVA
          </Name>
        </SecondContainer> */}
        <div style={{ height: '8rem'}}></div>
      </Container>
  );
};

export default Hero;
