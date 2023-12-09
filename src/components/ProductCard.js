import React from "react";
import { Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ grid, image, id, title, price, rating, desc }) => {
  let location = useLocation();
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast.success("Added item to Basket List");
  };
  const addToFavourite = () => {
    dispatch({
      type: "ADD_TO_FAVOURITE",
      item: {
        id: id,
        title: title,
        desc: desc,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast.success("Added item to Favourite List");
  };
  const addToCompare = () => {
    dispatch({
      type: "ADD_TO_COMPARE",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast.success("Added item to Compare List");
  };
  return (
    <div
      style={{ marginBottom: "10px" }}
      className={`${
        location.pathname == "/store"
          ? `gr-${grid}`
          : "col-lg-3 col-md-6 col-sm-12"
      } d-flex flex-wrap`}
    >
      <ToastContainer />

      <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img
              src="images/wish.svg"
              onClick={addToFavourite}
              alt="wish icon"
            />
          </Link>
        </div>
        <div className="product-image">
          <img src={image} alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">{title}</h6>
          <h5 className="product-title">{desc}</h5>
          <ReactStars
            count={rating}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">${price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
              <img
                src="images/prodcompare.svg"
                onClick={addToCompare}
                alt="compare"
              />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>

            <Link>
              <img
                src="images/add-cart.svg"
                onClick={addToBasket}
                alt="add to cart"
              />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
