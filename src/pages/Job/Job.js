import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem 4.5rem;
  background: black;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const Header = styled.div`
  font-family: "NeueMontreal";
  color: #eb533b;
  font-size: 1.7rem;
`;

export const HeaderTitle = styled.div`
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  color: #e1dfdd;
  float: right;
  letter-spacing: 0.1rem;
`;