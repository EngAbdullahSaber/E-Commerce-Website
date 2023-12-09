import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../context/GlobalState";
import { ToastContainer, toast } from "react-toastify";

const WishListItem = ({ image, id, title, price, rating, desc }) => {
  const { dispatch } = useAuth();

  const removeFromFavourite = () => {
    dispatch({
      type: "REMOVE_FROM_FAVOURITE",
      id: id,
    });
    toast.success("Removed From Favourite List");
  };

  return (
    <Col>
      <ToastContainer />

      <div className="wishlist-card position-relative">
        <img
          src="images/cross.svg"
          alt="cross"
          onClick={removeFromFavourite}
          className="position-absolute cross img-fluid"
        />
        <div className="wishlist-card-image">
          <img src={image} className="product" alt="watch" />
        </div>
        <div className="  py-3">
          <h5 className="title">{title}</h5>
          <h6 className="price">$ {price}</h6>
          <h5 className="product-title">{desc}</h5>
        </div>
      </div>
    </Col>
  );
};

export default WishListItem;
