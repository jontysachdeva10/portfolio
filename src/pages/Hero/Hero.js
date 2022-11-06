import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8rem 4.5rem;
  background: #e1dfdd;
  /* top: 6rem; */
`;

export const NavPosition = styled.div`
  position: absolute;
  font-size: 1.4rem;
  width: 13rem;
  font-family: "NeueMontrealMedium";
  left: 41%;
  top: 2.5rem;
  align-items: center;
`;

export const Intro = styled.div`
  padding-top: 2rem;
  font-size: 7rem;
  letter-spacing: 0.1rem;
  font-family: "NeueMontreal";
  line-height: 1.1;
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
