import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 7rem 4.5rem;
  background: #e1dfdd;
  /* top: 6rem; */
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 4rem;
`;

export const NavIntro = styled.div`
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  position: fixed;
`;

export const NavPosition = styled.div`
  position: absolute;
  font-size: 1.4rem;
  width: 13rem;
  font-family: "NeueMontrealMedium";
  left: 45%;
`;

export const NavMenu = styled.div`
  position: fixed;
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  left: 77%;

  a {
    color: black;
    text-decoration: none;
    display: inline-block;
    position: relative;
    cursor: pointer;

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

export const Intro = styled.div`
  padding-top: 2rem;
  font-size: 7rem;
  /* padding-left: 6rrem; */
  letter-spacing: 0.1rem;
  font-family: "NeueMontreal";
  line-height: 1.1;
  /* text-transform: uppercase; */
  /* text-align: center; */
`;

export const Image = styled.div`
  background-color: black;
  width: 60rem;
  height: 2rem;
  z-index: 999;
`;

export const SecondContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
`;

export const DownArrow = styled.span`
  font-size: 8rem;
  margin-top: 5.4rem;
  margin-left: -2rem;
`;

export const Description = styled.p`
  text-transform: uppercase;
  font-family: "NeueMontrealMedium";
  font-size: 1.4rem;
  margin-top: 7.2rem;
  padding-left: 2rem;
  margin-left: 1.1rem;
`;

export const Name = styled.div`
  font-size: 7rem;
  font-family: "NeueMontrealMedium";
  line-height: 0.9;
  letter-spacing: 0.2rem;
  justify-content: flex-end;
`;
