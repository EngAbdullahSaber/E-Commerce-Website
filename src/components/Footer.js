import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import footerImage from "../images/newsletter.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <MDBFooter className="text-start footer" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="py-3">
            <MDBRow>
              <MDBCol lg="5" md="12" className="mb-4 mb-md-0 d-flex">
                <img src={footerImage} alt="News Letter" className="mx-2" />
                <h5> Sign Up ForNews Letter</h5>
              </MDBCol>
              <MDBCol lg="5" md="12" className="mb-4 mb-md-0">
                <form className="d-flex input-group w-100">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Product Here...."
                    aria-label="Search"
                  />
                  <MDBBtn className="button-search shadow-0 text-black fw-bold">
                    Subscribe
                  </MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>
          </section>

          <section className=" py-3">
            <MDBRow>
              <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
                <h5 className="">Contact US</h5>

                <ul className="list-unstyled mb-0">
                  <li>Demo Store</li>
                  <li>No.1256 Freedom, New York , 111111</li>
                  <li>United State</li>
                  <li>(+02)112 650 4336</li>
                  <li>Demo@Example.com</li>
                </ul>
                <section className="mb-4">
                  <MDBBtn
                    className="m-1 p-1 shadow-0 rounded-circle"
                    style={{
                      backgroundColor: "#3b5998",
                      borderColor: "transparent",
                      width: "25px",
                      height: "25px",
                    }}
                    href="#!"
                  >
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>

                  <MDBBtn
                    className="m-1 p-1 shadow-0 rounded-circle"
                    href="#!"
                    style={{
                      backgroundColor: "#55acee",
                      borderColor: "transparent",
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>

                  <MDBBtn
                    style={{
                      backgroundColor: "#dd4b39",
                      borderColor: "transparent",
                      width: "25px",
                      height: "25px",
                    }}
                    className="m-1 p-1 shadow-0 rounded-circle"
                    href="#!"
                  >
                    <MDBIcon fab icon="google" />
                  </MDBBtn>

                  <MDBBtn
                    style={{
                      backgroundColor: "#ac2bac",
                      borderColor: "transparent",
                      width: "25px",
                      height: "25px",
                    }}
                    className="m-1 p-1 shadow-0 rounded-circle"
                    href="#!"
                  >
                    <MDBIcon fab icon="instagram" />
                  </MDBBtn>

                  <MDBBtn
                    style={{
                      backgroundColor: "#0082ca",
                      borderColor: "transparent",
                      width: "25px",
                      height: "25px",
                    }}
                    className="m-1 p-1 shadow-0  rounded-circle"
                    href="#!"
                  >
                    <MDBIcon fab icon="linkedin-in" />
                  </MDBBtn>

                  <MDBBtn
                    className="m-1 p-1 shadow-0 rounded-circle outline-transparent"
                    style={{
                      backgroundColor: "#333333",
                      borderColor: "transparent",
                      width: "25px",
                      height: "25px",
                    }}
                    href="#!"
                  >
                    <MDBIcon fab icon="github" />
                  </MDBBtn>
                </section>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="">Informations</h5>

                <ul className="list-unstyled mb-0">
                  <li className="my-2">
                    <Link to="/privacy-policy" className=" text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to="/refund-policy" className=" text-white">
                      {" "}
                      Refund Policy
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to="/shipping-policy" className=" text-white">
                      Shipping Policy
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to="/terms-conditions" className=" text-white">
                      Terms Of Services
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to="/blogs" className=" text-white">
                      {" "}
                      Blogs
                    </Link>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="">Accounts</h5>

                <ul className="list-unstyled mb-0">
                  <li className="my-2">
                    <Link className=" text-white">Search</Link>
                  </li>
                  <li className="my-2">
                    <Link to="/about" className=" text-white">
                      About Us
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link className=" text-white">Faq</Link>
                  </li>
                  <li className="my-2">
                    <Link to="/contact" className=" text-white">
                      Contact
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link className=" text-white">Size Chart</Link>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
                <h5 className="">Quick Links</h5>

                <ul className="list-unstyled mb-0">
                  <li className="my-2">
                    <Link className=" text-white">Accessories</Link>
                  </li>
                  <li className="my-2">
                    <Link className=" text-white" to="laptop">
                      Labtops
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link className=" text-white" to="/headphone">
                      HeadPhones
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link className=" text-white">Smart Watches</Link>
                  </li>
                  <li className="my-2">
                    <Link className=" text-white" to="/tablet">
                      Tablets
                    </Link>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3  text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} Copyright: Powered By Abdullah Saber
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
