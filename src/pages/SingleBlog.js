import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Row, Col, Container } from "react-bootstrap";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <Meta title=" Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <Container>
          <Row>
            <Col>
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-item-center gap-10 ">
                  {" "}
                  <BsArrowLeftShort className="fs-4" />
                  Go Back to Blogs
                </Link>
                <h3 className="title">
                  {" "}
                  A Beatuiful Day Mornining Renaissance
                </h3>
                <img
                  src="public/images/blog-1.webp"
                  className="img-fluid"
                  alt="blog"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
