import styled from "styled-components";
import { Underline } from "../../components/Underline";

const Container = styled.section`
  position: relative;
  overflow: hidden;
  padding: 5rem 4.5rem;
  background: white;
`;

const Title = styled.div`
  font-size: 4.7rem;
  font-family: "NeueMontrealMedium";
  color: black;
  letter-spacing: 0.1rem;
  line-height: 1.1;
  text-transform: uppercase;
`;

const Description = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-family: "NeueMontreal";
`;

const Contact = () => {
  return (
    <Container>
      <Title>
        You got a cool project on mind? Let's collaborate and create a{" "}
        <Underline>powerful website</Underline> together.
      </Title>
      <Description>
          <span style={{ color: "rgb(41 177 141)", fontWeight: 'bold' }}>Available</span>&nbsp;for
          freelance work.
      </Description>
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.4rem', fontFamily: 'NeueMontreal'}}>Get in touch!&nbsp;<span style={{ fontFamily: 'NeueMontrealItalicMedium', textDecoration: 'underline'}}>Drop me an email</span></div>
    </Container>
  );
};

export default Contact;
