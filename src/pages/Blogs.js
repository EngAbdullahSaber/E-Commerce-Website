import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Labtop</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <Row>
                <BlogCard />
                <BlogCard />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blogs;
