import React, { useState, useEffect, useMemo } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import { Col, Container, Row } from "react-bootstrap";
import ProductOfStore from "../components/ProductOfStore";
import Colors from "../components/Colors";
import { tabletsData } from "../utils/Data";
const Tablets = () => {
  const [grid, setGrid] = useState(4);

  return (
    <div>
      <>
        <Meta title="Our Store" />
        <BreadCrumb title="Our Store" />

        <div className="store-wrapper home-wrapper-2 py-5">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div>
                    <ul className="ps-0">
                      <li>Watches</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptpo</li>
                      <li>HeadPhone</li>
                      <li>Tablets</li>
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By </h3>
                  <div>
                    <h5 className="sub-title">Availabilty</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          {" "}
                          In Stock(1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          Out Of Stock ( 0)
                        </label>
                      </div>
                    </div>
                    <h5 className="sub-title">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating ">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="From"
                        />
                        <label htmlFor="floatingInput">From</label>
                      </div>
                      <div className="form-floating ">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput1"
                          placeholder="To"
                        />
                        <label htmlFor="floatingInput1">To</label>
                      </div>
                    </div>
                    <h5 className="sub-title">Colors</h5>
                    <div>
                      <div className="d-flex flex-wrap">
                        <Colors />
                      </div>
                    </div>
                    <h5 className="sub-title">Size</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-1"
                        />
                        <label className="form-check-label" htmlFor="size-1">
                          S (2)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-2"
                        />
                        <label className="form-check-label" htmlFor="size-2">
                          M (5)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-align-items-center gap-10">
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        HeadPhones
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Tablets
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Mobiles
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Pc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Random Product</h3>
                  <div>
                    <div className="random-products pt-3  d-flex">
                      <div className="w-25">
                        <img src="images/watch.jpg" alt="watch" />
                      </div>
                      <div className="w-75">
                        <h5 className="product-title">
                          Kids headphones bulk 10 pack colored for students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">$100</p>
                      </div>
                    </div>
                    <div className="random-products pt-3 d-flex">
                      <div className="w-25">
                        <img src="images/watch.jpg" alt="watch" />
                      </div>
                      <div className="w-75">
                        <h5 className="product-title">
                          Kids headphones bulk 10 pack colored for students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">$100</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="filter-sort-grid mb-0">
                  <div className="d-flex justify-content-between align-item-center">
                    <div className="d-flex align-item-center gap-10">
                      <p className="mb-0 d-block" style={{ width: "100px" }}>
                        Sort By{" "}
                      </p>
                      <select
                        className="form-control form-select"
                        name=""
                        id=""
                      >
                        <option value="manual">Featured</option>
                        <option value="best-selleing" selected="selected">
                          {" "}
                          Best Selling
                        </option>
                        <option value="title-ascending">
                          Alphabiticaly, A to z
                        </option>
                        <option value="title-descending">
                          Alphabiticaly , Z to A
                        </option>
                        <option value="price-ascending">
                          Price Low to High
                        </option>
                        <option value="price-descending">
                          Price High to Low
                        </option>
                        <option value="created-ascending">
                          Date old to new
                        </option>
                        <option value="created-descending">
                          Date New to Old
                        </option>
                      </select>
                    </div>
                    <div className="d-flex align-item-center gap-10">
                      <p className="total-product">21 Product</p>
                      <div className="d-flex gap-10 align-item-center grid">
                        <img
                          src="images/gr.svg"
                          className="img-fluid d-block"
                          alt="grid"
                          onClick={() => {
                            setGrid(3);
                          }}
                        />
                        <img
                          src="images/gr2.svg"
                          className="img-fluid d-block"
                          alt="grid"
                          onClick={() => {
                            setGrid(4);
                          }}
                        />
                        <img
                          src="images/gr3.svg"
                          className="img-fluid d-block"
                          alt="grid"
                          onClick={() => {
                            setGrid(6);
                          }}
                        />
                        <img
                          src="images/gr4.svg"
                          className="img-fluid d-block"
                          alt="grid"
                          onClick={() => {
                            setGrid(12);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-list pb-5">
                  <div className="d-flex gap-10">
                    <Row>
                      {tabletsData.map((item) => {
                        return (
                          <ProductOfStore
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            desc={item.desc}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                          />
                        );
                      })}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </div>
  );
};

export default Tablets;
