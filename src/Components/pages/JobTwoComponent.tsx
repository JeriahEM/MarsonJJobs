import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobTwoComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            #2: Codestack
          </h1>

          <h3 className="pt-3">
            - close to my mom <br />
            - the enviroment is great <br />- would be great experience we all
            know the enviroment is great and I will find out even more so when I
            intern
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default JobTwoComponent;
