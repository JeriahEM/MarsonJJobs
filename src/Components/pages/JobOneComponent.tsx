import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobOneComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            #1: Nvidia
          </h1>
          <h2 className="pt-4">Intern Software Engineer</h2>
          <h3 className="pt-3">
            - Top of the stock market also gives shares for working there{" "}
            <br></br>- working on AI would be interesting <br></br>- Atrioc
            worked there <br></br>B.S. EE/CS or equivalent experience with 4+
            years of experience or MS with 2+ years' experience, or Ph.D. Strong
            programming ability in C, C++, and scripting languages. Solid
            understanding of hardware pipeline concepts, with a willingness to
            work at a detailed implementation level. Demonstrated knowledge of
            computer graphics (DirectX, OpenGL, Vulkan) and/or compute (CUDA).
          </h3>
          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link
              to="https://www.nvidia.com/en-us/about-nvidia/careers/"
              target="_blank"
            >
              Click Here
            </Link>
          </h3>
          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Position:{" "}
            <Link
              to="https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/details/Intern-Software-Engineer_JR1973119-1?q=intern"
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

export default JobOneComponent;
