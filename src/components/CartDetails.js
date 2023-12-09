import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../context/GlobalState";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const CartDetails = ({ image, id, title, price, rating, desc }) => {
  const { dispatch } = useAuth();
  const [input, setInput] = useState();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    toast.success("Removed From Basket List");
  };
  return (
    <>
      <ToastContainer />{" "}
      <Col lg={12}>
        <div className="d-flex justify-content-between align-content-center cart-header">
          <h4 className="cart-col-1">Product</h4>
          <h4 className="cart-col-2">Price</h4>
          <h4 className="cart-col-3">Quantity</h4>
          <h4 className="cart-col-4">Total</h4>
        </div>
        <div className="d-flex justify-content-between mb-2 align-content-center cart-data">
          <div className="cart-col-1 d-flex align-item-center ">
            <div className="w-25">
              <img
                src={image}
                style={{ height: "70%", width: "70%" }}
                alt="product"
                className="img-fluid"
              />
            </div>
            <div className="w-75">
              <p>title</p>
              <p>Size: M</p>
              <p>Color: red</p>
            </div>
          </div>
          <div className="cart-col-2">
            <h5 className="price">$ {price}</h5>
          </div>
          <div className="cart-col-3 d-flex align-items-center gap-15">
            <div>
              <input
                type="number"
                name=""
                min={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                max={10}
                className="form-control"
                id=""
              />
            </div>
            <div>
              <AiFillDelete
                className="text-danger"
                onClick={removeFromBasket}
              />
            </div>
          </div>
          <div className="cart-col-4">
            <h5 className="price">$ {input ? price * input : price}</h5>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CartDetails;
