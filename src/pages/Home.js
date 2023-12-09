import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import { productData, services } from "../utils/Data";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <section className="home-wrapper py-5">
        <Container>
          <Row>
            <Col lg>
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="banner "
                />
              </div>

              <div className="main-banner-content position-absolute ">
                <h4 className="py-2">SUPERCHARGED FOR PROS.</h4>
                <h5 className="py-2">iPad S13+ Pro</h5>
                <p className="py-2"> From $999.0 or $41.62</p>
                <Link className="buttons">BUY NOW</Link>
              </div>
            </Col>
            <Col lg>
              <Row className="main__banner__wrapper">
                <Col sm>
                  <div className="small-banner ">
                    <img
                      src="images/catbanner-01.jpg"
                      className="img-fluid rounded-3"
                      alt="banner "
                    />
                  </div>
                  <div className="small-banner-content position-relative ">
                    <h4 className="">Best Sale</h4>
                    <h5 className="">Labtops Max</h5>
                    <p className=""> From $1699.0 or $64.62</p>
                  </div>
                </Col>
                <Col sm>
                  <div className="small-banner ">
                    <img
                      src="images/catbanner-03.jpg"
                      className="img-fluid rounded-3"
                      alt="banner "
                    />
                  </div>
                  <div className="small-banner-content position-relative ">
                    <h4 className=""> New Arrival</h4>
                    <h5 className="">Buy Ipad Air</h5>
                    <p className=""> From $599.0 or $41.62</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <div className="small-banner ">
                    <img
                      src="images/catbanner-02.jpg"
                      className="img-fluid rounded-3"
                      alt="banner "
                    />
                  </div>
                  <div className="small-banner-content position-relative ">
                    <h4 className=""> 15% off</h4>
                    <h5 className="">Smartwatch7 </h5>
                    <p className=""> Shop the last brand </p>
                  </div>
                </Col>
                <Col sm>
                  <div className="small-banner ">
                    <img
                      src="images/catbanner-04.jpg"
                      className="img-fluid rounded-3"
                      alt="banner "
                    />
                  </div>
                  <div className="small-banner-content position-relative ">
                    <h4 className=""> Free Engraving</h4>
                    <h5 className="">AirPods Max</h5>
                    <p className=""> High-fidelity playback</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home-wrapper-2 py5">
        <Container>
          <Row className="services d-flex align-item-center justify-content-between">
            {services.map((item) => {
              return (
                <Services
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="home-wrapper-2 py-5">
        <Container>
          <Row className="categories d-flex justify-content-between  align-items-center">
            <Col
              lg={3}
              xs={6}
              md={4}
              className="d-flex  bg-border  align-content-center align-item-center"
            >
              <div>
                <h6 className="pt-2">Cameras</h6>
                <p className="text-inf">10</p>
              </div>
              <img src="images/camera.jpg" alt="Camera" />
            </Col>
            <Col
              lg={3}
              xs={6}
              md={4}
              className="d-flex bg-border  align-content-center align-item-center"
            >
              <div>
                <h6 className="pt-2"> Music &Gaming</h6>
                <p className="text-inf">10</p>
              </div>
              <img src="images/headphone.jpg" alt="Camera" />
            </Col>
            <Col
              lg={3}
              xs={6}
              md={4}
              className="d-flex  bg-border  align-content-center align-item-center"
            >
              <div>
                <h6 className="pt-2">Smart Tv</h6>
                <p className="text-inf">10</p>
              </div>
              <img src="images/tv.jpg" alt="Camera" />
            </Col>
            <Col
              lg={3}
              xs={6}
              md={4}
              className="d-flex  bg-border  align-content-center align-item-center"
            >
              <div>
                <h6 className="pt-2">Smart Watches</h6>
                <p className="text-inf">10</p>
              </div>
              <img src="images/watch.jpg" alt="Camera" />
            </Col>
            <Col
              lg={3}
              xs={6}
              md={4}
              className="d-flex  bg-border gap-30 align-content-center align-item-center"
            >
              <div>
                <h6 className="pt-2">Cameras</h6>
                <p className="text-inf">10</p>
              </div>
              <img src="images/camera.jpg" alt="Camera" />
            </Col>
            <Col
              lg={3}
              xs={6}
              md={4}
              className="d-flex  bg-border gap-30 align-content-center  align-item-center"
            >
              <div>
                <h6 className="pt-2"> Music &Gaming</h6>
                <p className="text-inf">10</p>
              </div>
              <img src="images/headphone.jpg" alt="Camera" />
            </Col>
            <Col
              lg={3}
              xs={6}
              md={4}
              className="d-flex   bg-border gap-30 align-content-center align-item-center"
            >
              <div>
                <h6 className="pt-2">Smart Tv</h6>
                <p className="text-inf">10</p>
              </div>
              <img src="images/tv.jpg" alt="Camera" />
            </Col>
            <Col
              lg={3}
              xs={6}
              md={4}
              className="d-flex  bg-border gap-30 align-content-center  align-item-center"
            >
              <div>
                <h6 className="pt-2">Smart Watches</h6>
                <p className="text-inf">10</p>
              </div>
              <img src="images/watch.jpg" alt="Camera" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="featued-wrapper py-5 home-wrapper-2 ">
        <Container>
          <h3 className="section-heading">Featured Collection</h3>
          <Row>
            {productData.map((item) => {
              return (
                <ProductCard
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
        </Container>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <Container>
          <h3 className="section-heading">Special Products</h3>

          <Row>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </Row>
        </Container>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2 ">
        <Container>
          <h3 className="section-heading">Our Popular Products </h3>
          <Row>
            {productData.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="marquee-wrapper py-5">
        <Container>
          <Row>
            <Col>
              <div className="marquee-inner-wrapper card-wrapper bg-white p-3">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-01.png"
                      style={{ width: "300%", height: "300%" }}
                      alt="brand image"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-02.png"
                      style={{ width: "300%", height: "300%" }}
                      alt="brand image"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-03.png"
                      style={{ width: "300%", height: "300%" }}
                      alt="brand image"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-04.png"
                      style={{ width: "300%", height: "300%" }}
                      alt="brand image"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-05.png"
                      style={{ width: "300%", height: "300%" }}
                      alt="brand image"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-06.png"
                      style={{ width: "300%", height: "300%" }}
                      alt="brand image"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-07.png"
                      style={{ width: "300%", height: "300%" }}
                      alt="brand image"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-08.png"
                      style={{ width: "300%", height: "300%" }}
                      alt="brand image"
                    />
                  </div>
                </Marquee>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2 ">
        <Container>
          <h3 className="section-heading">Our latest Blog</h3>
          <Row>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
