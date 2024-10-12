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
  top: 2.5rem;
  display: flex;
  align-self: center;
`;

export const Intro = styled.div`
  /* padding-top: 1.5rem; */
  font-size: 6rem;
  /* letter-spacing: 0.1rem; */
  padding-bottom: 2rem;
  font-family: "NeueMontreal";
  font-weight: 600;
  line-height: 1.1;
`;

export const SubIntro = styled.div`
  font-size: 2.7rem;
  line-height: 1.05;
  font-family: "NeueMontreal";
  width: 55%;
  padding-bottom: 2rem;
`;
