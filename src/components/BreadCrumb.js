import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb d-flex  justify-content-center align-items-center py-2">
      <Container>
        <Row>
          <Col className="d-flex bg-light justify-content-center align-items-center py-2 mt-2 ">
            <p className="text-center fw-bold mb-0">
              <Link className="text-dark " to="/">
                Home{"  "}
              </Link>{" "}
              / {title}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadCrumb;
