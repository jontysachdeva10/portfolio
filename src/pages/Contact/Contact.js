import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem 4.5rem;
  background: white;
`;

export const Title = styled.div`
  font-size: 5.8rem;
  font-family: "NeueMontreal";
  color: black;
  letter-spacing: 0.1rem;
  line-height: 1.1;
  /* text-transform: uppercase; */
`;

export const Description = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-family: "NeueMontreal";
`;

export const Dot = styled.div`
  background-color: rgb(41 177 141);
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-top: 11px;
  margin-right: 3px;
`;

export const GetInTouch = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-family: "NeueMontreal";
`;

export const ContactMe = styled.a`
  font-family: "NeueMontrealItalicMedium";
  /* text-decoration: underline; */
  cursor: pointer;
  position: relative;

  &:hover {
    color: black;
  }

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
`;
