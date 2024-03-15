import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobFourComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            #4: Spoitfy
          </h1>
          <h2 className="pt-4">Intern</h2>
          <h3 className="pt-3">
            The qualifications you need to apply for a job at Spotify will
            depend on the position you are applying for. Generally, you will
            need a relevant educational background, such as a degree in computer
            science, engineering, or a related field. You will also need to have
            relevant experience in the area you are applying for and strong
            communication and problem-solving skills. Additionally, you should
            have a good understanding of the music industry and the ability to
            work collaboratively with other teams. <br /> again i love music and
            this would be a very interesting place for me to work
          </h3>
          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link to="https://www.lifeatspotify.com" target="_blank">
              Click Here
            </Link>
          </h3>
          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Position:{" "}
            <Link to="https://www.lifeatspotify.com/jobs" target="blank">
              Click Here
            </Link>
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default JobFourComponent;
