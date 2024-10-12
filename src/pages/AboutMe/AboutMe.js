import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  display: grid;
  padding: 2rem 4.5rem;
  grid-template-columns: 1fr 3fr;
  grid-gap: 3rem;
  background: #e1dfdd;
`;

export const Header = styled.div`
  font-family: "NeueMontreal";
  /* color: #eb533b; */
  font-size: 1.7rem;
`;

export const HeaderTitle = styled.div`
  font-size: 1.4rem;
  font-family: "NeueMontrealMedium";
  color: black;
  float: right;
  letter-spacing: 0.1rem;
`;

export const Description = styled.div`
  margin-top: 8rem;
  text-transform: uppercase;
  font-size: 2.3rem;
  font-family: "NeueMontrealMedium";
  width: 90%;
`;

export const SubDescription = styled.div`
  margin-top: 8rem;
  font-size: 1.5rem;
  font-family: "NeueMontrealMedium";
  width: 90%;
  line-height: 1.4;
`;

export const Skills = styled.div`
  ul {
    margin-top: 1rem;
    margin-left: -2.5rem;
    display: flex;
    flex-direction: row;
    /* display: grid;
    grid-template-columns: repeat(2, minmax(10rem, 42rem)); */
    list-style: none;
    overflow: hidden;
    justify-content: space-between;
    line-height: 2;
    font-size: 7rem;
  }

  /* li:hover {
    color: #eb533b;
    transition: 0.3s ease-in-out;
  } */
  /* li::before {
    content: "▹";
    margin-left: -2rem;
  } */
`;
