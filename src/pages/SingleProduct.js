import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";
import { Link, useParams } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { productDataSore } from "../utils/Data";

const SingleProduct = (props) => {
  const [orderedProduct, setorderedProduct] = useState(false);
  let param = useParams();
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const showData = () => {
    return productDataSore.find((item) => item.id == param.id);
  };
  const propsImage = {
    width: 300,
    height: 250,
    zoomWidth: 500,
    img: `../${showData().image}`,
  };
  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <Container>
          <Row>
            <Col>
              <div className="main-product-image">
                <ReactImageZoom {...propsImage} />
              </div>
              {/* <div className="other-product-image d-flex flex-wrap gap-15 ">
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY780_.jpg"
                    alt=" watch"
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY780_.jpg"
                    alt=" watch"
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY780_.jpg"
                    alt=" watch"
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY780_.jpg"
                    alt=" watch"
                  />
                </div>
              </div> */}
            </Col>
            <Col>
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{showData().desc}</h3>
                </div>
                <div className="border-bottom">
                  <p className="price">$ {showData().price}</p>
                  <div className="d-flex align-item-center gap-10">
                    <ReactStars
                      count={showData().rating}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review"> (2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom">
                  <div className="d-flex align-item-center gap-10 my-2">
                    <h3 className="product-heading">Type: </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-item-center gap-10 my-2">
                    <h3 className="product-heading">Brand: </h3>
                    <p className="product-data">{showData().title}</p>
                  </div>
                  <div className="d-flex align-item-center gap-10 my-2">
                    <h3 className="product-heading">Category: </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-item-center gap-10 my-2">
                    <h3 className="product-heading">Tags: </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-item-center gap-10 my-2">
                    <h3 className="product-heading">Availability: </h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex align-item-center flex-column gap-10 mb-3 mt-2">
                    <h3 className="product-heading">Size: </h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-item-center flex-column gap-10 my-2">
                    <h3 className="product-heading">Colors: </h3>
                    <Colors />{" "}
                  </div>
                  <div className="d-flex align-item-center flex-row gap-10 mb-3 mt-2">
                    <h3 className="product-heading">Quantity: </h3>
                    <div>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        id=""
                        style={{ width: "70px" }}
                      />
                    </div>
                    <div className="d-flex align-item-center ms-5 gap-30">
                      <button className="buttons border-0">Add To Cart</button>
                      <Link to="/sign-up" className="buttons signup border-0">
                        Buy It Now
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex gap-15 align-item-center">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" /> Add To Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add To Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex  flex-column gap-10 my-3">
                    <h3 className="product-heading">Shipping & Returns </h3>
                    <p className="product-data">
                      Excepteur fugiat enim exercitation eu laboris ullamco aute
                      eiusmod magna nostrud consequat. Aliquip laboris id
                      proident ullamco sunt ad amet excepteur do do id do
                      laborum.{" "}
                    </p>
                  </div>
                  <div className="d-flex align-item-center gap-10 my-2">
                    <h3 className="product-heading"> Product Link</h3>
                    <a
                      href=""
                      onClick={() => {
                        copyToClipboard(
                          "https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY780_.jpg"
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <Container>
          <Row>
            <Col>
              <div className="bg-white p-3">
                <h3>Description</h3>
                <p>
                  Excepteur sit in nostrud commodo enim tempor amet cillum
                  deserunt culpa velit veniam ullamco non. Magna mollit
                  consectetur dolore cillum tempor exercitation enim magna.
                  Aliqua tempor culpa aliqua esse sunt qui aliquip commodo
                  tempor excepteur sit occaecat. Mollit enim reprehenderit
                  fugiat est exercitation duis laborum sit commodo Lorem
                  exercitation aute.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="review-wrapper py-5 home-wrapper-2">
        <Container>
          <Row>
            <Col>
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-item-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0"> Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        href=""
                        className="text-dark text-decoration-underline"
                      >
                        {" "}
                        Write a Reivew
                      </a>
                    </div>
                  )}
                </div>
                <div id="review" className="review-form">
                  <h4>Write a Review</h4>
                  <form action="" className="w-100 d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />{" "}
                    </div>

                    <div>
                      <textarea
                        type="text"
                        name=""
                        cols={30}
                        rows={4}
                        id=""
                        placeholder="Comments"
                        className="form-control w-100"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="buttons">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-item-center">
                      <h6 className="mb-0"> Navdeep</h6>

                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Excepteur sit in nostrud commodo enim tempor amet cillum
                      deserunt culpa velit veniam ullamco non. Magna mollit
                      consectetur dolore cillum tempor exercitation enim magna.
                      Aliqua tempor culpa aliqua esse sunt qui aliquip commodo
                      tempor excepteur sit occaecat. Mollit enim reprehenderit
                      fugiat .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="popular-wrapper py-5 home-wrapper-2 ">
        <Container>
          <h3 className="section-heading">Our Popular Products </h3>
          <Row>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default SingleProduct;
