import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useAuth } from "../context/GlobalState";
import { getBasketTotal } from "../context/AppReducer";
import axios from "../components/axios";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../context/firebase";
import Orders from "./Orders";

const CheckOut = () => {
  const { basket, user, dispatch } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/checkout/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      return response;
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
        setDoc(ref, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders", { replace: true });
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(error ? error.message : "");
  };

  return (
    <>
      <div className="checkout-wrapper">
        <Container>
          <Row>
            <Col>
              <div className="checkout-left-data">
                <h3 className="website-name">Markets-Hub.</h3>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Basket </Breadcrumb.Item>
                  <Breadcrumb.Item href="#">CheckOut </Breadcrumb.Item>
                </Breadcrumb>
                <section className="h-100 gradient-custom">
                  <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center my-4">
                      <MDBCol md="8">
                        <MDBCard className="mb-4">
                          <MDBCardBody>
                            <p>
                              <strong>Expected shipping delivery</strong>
                            </p>
                            <p className="mb-0">12.10.2020 - 14.10.2020</p>
                          </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                          <MDBCardBody>
                            <p>
                              <strong>We accept</strong>
                            </p>
                            <MDBCardImage
                              className="me-2"
                              width="45px"
                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                              alt="Visa"
                            />
                            <MDBCardImage
                              className="me-2"
                              width="45px"
                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                              alt="American Express"
                            />
                            <MDBCardImage
                              className="me-2"
                              width="45px"
                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                              alt="Mastercard"
                            />
                            <MDBCardImage
                              className="me-2"
                              width="45px"
                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                              alt="PayPal acceptance mark"
                            />
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-4">
                          <MDBCardHeader>
                            <MDBTypography tag="h5" className="mb-0">
                              Summary
                            </MDBTypography>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBListGroup flush>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>${getBasketTotal(basket)}</span>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                Shipping
                                <span>Gratis</span>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                  <strong>Total amount</strong>
                                  <strong>
                                    <p className="mb-0">(including VAT)</p>
                                  </strong>
                                </div>
                                <span>
                                  <strong>
                                    ${getBasketTotal(basket) + 120}
                                  </strong>
                                </span>
                              </MDBListGroupItem>
                            </MDBListGroup>

                            <form onSubmit={handleSubmit}>
                              <CardElement onChange={handleChange} />
                              <div className="payment-priceContainer">
                                <CurrencyFormat
                                  renderText={(value) => (
                                    <h3>Order Total : {value}</h3>
                                  )}
                                  decimalScale={2}
                                  value={getBasketTotal(basket) + 120}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"$"}
                                />
                                <button
                                  type="submit"
                                  disabled={processing || disabled || succeeded}
                                >
                                  <span>
                                    {processing ? <p>Processing</p> : "Buy Now"}
                                  </span>
                                </button>
                              </div>
                              {error && <div>{error}</div>}
                            </form>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CheckOut;
