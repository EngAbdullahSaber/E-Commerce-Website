import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <Col md={6}>
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2022</p>
            <h5 className="title">A beatuiful sunday morning renaissance</h5>
            <p className="desc">
              lorem ipsum sit amet consectetur adipisicing. Atque
              quaerataccusamsofficia
            </p>
            <Link to="/blogs/:id" className="buttons">
              Read More
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};

export default BlogCard;
