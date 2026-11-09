import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioHomeData, PortfolioData, PortfolioFilters  } from "@/data";
import { useState } from "react";

const PortfolioHome = () => {
  const { sectionContent } = PortfolioHomeData;
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData = PortfolioData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.categories.includes(activeFilter);
  });
  
  return (
    <section className="commonSection porfolio">
      <Container>
  
      <Row className="mb-4 text-center">
        <Col>
          {PortfolioFilters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.name)}
              className={`filter-btn ${
                activeFilter === filter.name ? "active" : ""
              }`}
            >
              {filter.name}
            </button>
          ))}
        </Col>
      </Row>

      <Row id="Grid" className="custom">
        {filteredData.map((post) => (
          <Col lg={4} md={6} sm={12} key={post.id}>
            <PortfolioCard data={post} />
          </Col>
        ))}
      </Row>



      <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {PortfolioData.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>

      </Container>
    </section>
  );
};

export default PortfolioHome;
