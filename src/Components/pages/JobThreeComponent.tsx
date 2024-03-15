import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobThreeComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            #3: Discogs
          </h1>
          <h2 className="pt-4">Senior User Experience Designer (REMOTE)</h2>
          <h3 className="pt-3">
            Requirements <br /> Bachelor's degree (BA/BS) from four-year college
            or university, or equivalent work experience 5+ years related work
            experience (design experience) E-commerce design experience
            Understanding of designing within complex legacy systems UI design
            skills at high fidelity Experience with web, mobile and responsive
            design Adept with design tools such as Figma. Knowledge of HTML &
            CSS Experience in user research and usability testing. <br /> I
            would have to work for a while to be able to work here but goals are
            a great thing to have and the starting salary is $105,500 and i
            already use this website so it would be a great fit and a great goal{" "}
          </h3>
          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link to="https://www.discogs.com" target="_blank">
              Click Here
            </Link>
          </h3>
          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Position:{" "}
            <Link
              to="https://apply.workable.com/discogs-1/j/13143DEAFE/"
              target="blank"
            >
              Click Here
            </Link>
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default JobThreeComponent;
