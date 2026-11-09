import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import EventsSidebar from "@/components/events-sidebar";
import Paginations from "@/components/paginations";
import { EventData } from "@/data";
import EventsCard from "@/components/events-card";

const EventsOne = () => {
  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          <Col lg={8} sm={8}>
            <Row>
              {EventData.map((post, index) => (
                <Col lg={6} sm={12} md={6} key={index}>
                  <EventsCard data={post} />
                </Col>
              ))}
            </Row>
            <Paginations />
          </Col>
          <Col lg={4} sm={4} className="sidebar">
            <EventsSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventsOne;
