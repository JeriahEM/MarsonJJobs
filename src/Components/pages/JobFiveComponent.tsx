import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobFiveComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ display: "flex", justifyContent: "center" }}>#5: YZY</h1>
          <h2 className="pt-4">Web app developer</h2>
          <h3 className="pt-3">
            Yzy is in need of an app as Ye said and it would be awesome to work
            on the project because Im intereseted in the brand and I would work
            on it have it on retainer and I could work on other projects or one
            of the other jobs
          </h3>
          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link
              to="https://yeezy.com/?utm_source=google&sirge_campaign_id=21001606015&sirge_adset_id={adsetId}&sirge_ad_id={adId}&sirge_source_name=google&gad_source=1&gclid=CjwKCAiAi6uvBhADEiwAWiyRdtnWuiSFm4jtuOqPFoiw-HAoSb5kPGTGMKO8rQP554NR5Je4w7HZ6xoCzq4QAvD_BwE"
              target="_blank"
            >
              Click Here
            </Link>
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default JobFiveComponent;
