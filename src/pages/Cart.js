import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useAuth } from "../context/GlobalState";
import CartDetails from "../components/CartDetails";

const Cart = () => {
  const { basket } = useAuth();

  return (
    <>
      <Meta title=" Cart" />
      <BreadCrumb title="Cart" />

      <section className="cart-wrapper home-wrapper-2 py-5">
        <Container>
          <Row>
            <>
              {basket.length > 0 ? (
                basket.map((item) => {
                  return (
                    <CartDetails
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      desc={item.desc}
                      price={item.price}
                      image={item.image}
                    />
                  );
                })
              ) : (
                <h1>no item</h1>
              )}
            </>
          </Row>
          <div className="py-2 mt-4" lg={12}>
            <div className="d-flex justify-content-between align-item-baseline">
              <Link className="buttons" to="/store">
                {" "}
                Continue To Shopping
              </Link>
            </div>
            <div className="d-flex align-items-end flex-column">
              <p>Taxes and Shipping calculated at checkout </p>
              <Link className="buttons" to="/checkout">
                CheckOut
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Cart;
