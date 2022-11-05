import { Underline } from "../../components/Underline";
import { Container, Title, Description } from "./Contact";

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
        <div
          style={{
            backgroundColor: "rgb(41 177 141)",
            height: "12px",
            width: "12px",
            borderRadius: "50%",
            display: "inline-block",
            marginTop: '10px'
          }}
        ></div>
        <span style={{ color: "rgb(41 177 141)", fontWeight: "bold", marginLeft: '4px' }}>
          Available
        </span>
        &nbsp;for freelance work.
      </Description>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.4rem",
          fontFamily: "NeueMontreal",
        }}
      >
        Get in touch!&nbsp;
        <span
          style={{
            fontFamily: "NeueMontrealItalicMedium",
            textDecoration: "underline",
          }}
        >
          Drop me an email
        </span>
      </div>
      {/* <div style={{ height: "8em" }}></div> */}
    </Container>
  );
};

export default Contact;
