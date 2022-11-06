import { ImQuotesLeft } from "react-icons/im";
import "./Testimonials.scss";
import { BsArrowRight } from "react-icons/bs";
import { Container, ArrowButton } from "./Testimonials";
import Carousel from "react-bootstrap/Carousel";

const Testimonials = () => {
  const data = [
    {
      id: "one",
      name: "Arvind Kannaberan",
      company: "Cognizant",
      description:
        "Jonty was reporting directly to me at Cognizant. I have seen the curiosity with which he approached problems & did thorough follow ups to get the tasks to completion. He never hesitates to raise any queries or highlight challenges related to requirements or design. He has the zeal to learn new things & would definitely be a great asset to any team.",
    },
    {
      id: "two",
      name: "Serhiy Vorobyov",
      company: "PayPal",
      description:
        "It has been an extreme pleasure working with Jonty and seeming him grow. He has developed strong confidence of his craft and is able to communicate clearly on issues he is facing and next steps he is taking to work through them. I felt very confident giving Jonty very loosely defined problems and knew that he would be able to work through it. I would highly recommend Jonty as an addition to any engineering team as he has the drive and passion to figure it out.",
    },
  ];

  return (
    <Container>
      <div className="carousel-container">
        <Carousel>
          {data.length > 0 &&
            data.map((x) => (
              <Carousel.Item key={x.id}>
                <div className="one">
                  <div className="item">
                    <ImQuotesLeft
                      style={{ marginTop: "-0.5rem", fontSize: "1.7rem" }}
                    />
                    <span
                      style={{
                        fontFamily: "NeueMontrealBold",
                        marginLeft: "2rem",
                      }}
                    >
                      {x.name}
                    </span>
                    <br />
                    <span style={{ fontSize: "1.4rem", marginLeft: "3.7rem", position: 'absolute', marginTop: '-0.5rem' }}>
                      {x.company}
                    </span>
                  </div>
                  <div className="description">"{x.description}"</div>
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
      <div style={{ height: "12em" }}></div>
    </Container>
  );
};

export default Testimonials;
