import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardFive from "@/components/service-card-five";
import {ServicePostDataKurse } from "@/data";

const ServiceFive = () => {
  return (
    <section className="service_section_2 commonSection">
      <Container>
        <Row>
          {ServicePostDataKurse.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardFive data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceFive;
