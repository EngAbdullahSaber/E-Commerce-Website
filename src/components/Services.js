import React from "react";
import { Col } from "react-bootstrap";

const Services = (props) => {
  return (
    <Col md className="d-flex py-4 align-items-center gap-10">
      <img src={props.img} alt="services" />
      <div>
        <h6>{props.title}</h6>
        <p className="mb-0 text-inf">{props.desc}</p>
      </div>
    </Col>
  );
};

export default Services;
