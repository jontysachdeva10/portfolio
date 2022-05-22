import styled from "styled-components";
import { ImQuotesLeft } from "react-icons/im";
import "./Testimonials.scss";
import { BsArrowRight } from "react-icons/bs";

const Container = styled.section`
  position: relative;
  overflow: hidden; 
  padding: 2rem 4rem;
  background: #e1dfdd;
`;

const ArrowButton = styled.button`
  margin-top: 26rem;
  margin-left: 66rem;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 1.4px solid #e1dfdd;
  transition: 0.6s ease-in-out;
  background: black;

  .icon {
    color: #e1dfdd;
  }

  &:hover {
    .icon {
      color: black;
    }
    background-color: #e1dfdd;
    cursor: pointer;
  }
`;

const Testimonials = () => {
  return (
    <Container>
      <div className="carousel-container">
        <input type="radio" id="first" checked name="r" />
        <label for="first" className="first"></label>
        <input name="r" type="radio" id="second" value="PO" />
        <label
          style={{ marginLeft: "2rem" }}
          for="second"
          className="second"
        ></label>

        <div className="one slide">
          <div className="item active">
            <span style={{ marginTop: "1rem", fontSize: "1.8rem" }}>
              <ImQuotesLeft />
            </span>
            <span style={{ marginTop: "-1rem", marginLeft: "2rem" }}>
              Arvind Kannaberan
            </span>
            <br />
            <span
              style={{
                fontSize: "1.5rem",
                fontFamily: "NeueMontrealLight",
                marginLeft: "3.7rem",
              }}
            >
              Cognizant
            </span>
          </div>
          <div className="description">
            "Jonty was reporting directly to me at Cognizant. I have seen the
            curiosity with which he approached problems & did thorough follow
            ups to get the tasks to completion. He never hesitates to raise any
            queries or highlight challenges related to requirements or design.
            He has the zeal to learn new things & would definitely be a great
            asset to any team."
          </div>
        </div>

        <div className="two slide">
          <div className="item">
            <span style={{ marginTop: "1rem", fontSize: "1.8rem" }}>
              <ImQuotesLeft />
            </span>
            <span style={{ marginTop: "-1rem", marginLeft: "2rem" }}>
              Serhiy Vorobyov
            </span>
            <br />
            <span
              style={{
                fontSize: "1.5rem",
                fontFamily: "NeueMontrealLight",
                marginLeft: "3.85rem",
              }}
            >
              PayPal
            </span>
          </div>
          <div className="description">
            "It has been an extreme pleasure working with Jonty
            and seeming him grow. He has developed strong confidence of his
            craft and is able to communicate clearly on issues he is facing and
            next steps he is taking to work through them. I felt very confident
            giving Jonty very loosely defined problems and knew that he would be
            able to work through it (even when he may have had some doubts about
            it). I would highly recommend Jonty as an addition to any
            engineering team as he has the drive and passion to figure it out."
          </div>
        </div>
        <ArrowButton><BsArrowRight className="icon" style={{ fontSize: '2rem', marginTop: '0.3rem' }} /></ArrowButton>
      </div>
      <div style={{ height: '8rem'}}></div>
    </Container>
  );
};

export default Testimonials;
