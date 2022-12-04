import { Underline } from "../../components/Underline";
import { Container, Title, Description, Dot, GetInTouch, ContactMe } from "./Contact";

const Contact = () => {
  return (
    <Container id="contact">
      <Title>
        You got a cool project on mind? Let's collaborate and create a{" "}
        <Underline>
          <span style={{ fontFamily: "NeueMontrealBold" }}>
            powerful website
          </span>
        </Underline>{" "}
        together.
      </Title>
      <Description>
        <Dot></Dot>
        <span style={{ color: "rgb(41 177 141)", fontWeight: "bold", marginLeft: '4px' }}>
          Available
        </span>
        &nbsp;for freelance work.
      </Description>
      <GetInTouch>
        Get in touch!&nbsp;
        {/* <ContactMe className="underline-effect">
          Drop me an email
        </ContactMe>
        &nbsp;
        or
        &nbsp; */}
        <ContactMe className="underline-effect" href="https://www.linkedin.com/in/jonty-sachdeva-20001b149/" target="_blank">
          Connect over LinkedIn
        </ContactMe>
      </GetInTouch>
    </Container>
  );
};

export default Contact;
