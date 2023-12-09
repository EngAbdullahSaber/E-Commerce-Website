import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Colors from "../components/Colors";
import { useAuth } from "../context/GlobalState";
import { ToastContainer, toast } from "react-toastify";

const CompareProductItem = ({ image, id, title, price, rating, desc }) => {
  const { dispatch } = useAuth();

  const removeFromCompare = () => {
    dispatch({
      type: "REMOVE_FROM_COMPARE",
      id: id,
    });
    toast.success("Removed From Compared List");
  };
  return (
    <>
      <ToastContainer />

      <Col>
        <div className="compare-product-card position-relative">
          <img
            src="images/cross.svg"
            alt="cross"
            onClick={removeFromCompare}
            className="position-absolute cross"
          />
          <div className="product-card-image">
            <img src={image} className="product" alt="watch" />
          </div>
          <div className="compare-product-details">
            <h5 className="title">{desc}</h5>
            <h6 className="price mt-3">${price}</h6>
          </div>
          <div className="product-detail">
            <h5>Brand :</h5>
            <p>{title}</p>
          </div>
          <div className="product-detail">
            <h5>Type :</h5>
            <p>Watches</p>
          </div>
          <div className="product-detail">
            <h5>Availability :</h5>
            <p>In Stock</p>
          </div>
          <div className="product-detail">
            <h5>Colors :</h5>
            <p>
              <Colors />
            </p>
          </div>
          <div className="product-detail">
            <h5>Size :</h5>
            <div className="d-flex gap-10">
              <p>S</p>
              <p>M</p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CompareProductItem;
