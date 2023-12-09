import { React, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useAuth } from "../context/GlobalState";
import { getBasketTotal } from "../context/AppReducer";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, basket } = useAuth();

  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <div className="upper-bar">
        <MDBContainer className="text-center text-white py-2 ">
          <MDBRow>
            <MDBCol size="md">Free Shipping Over 100$ & Free Returns</MDBCol>
            <MDBCol size="md">
              <span>Hotline : </span>
              <a className="text-white" href="tel :(+02)01126 054 336">
                (+02)01126 054 336
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="middle-bar">
        <MDBNavbar expand="lg" className="search-bar" light>
          <MDBContainer fluid>
            <MDBNavbarBrand href="#" className="text-white fw-bolder">
              Market.Hub
            </MDBNavbarBrand>
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <form className="d-flex mx-4 input-group w-50">
              <input
                type="search"
                className="form-control"
                placeholder="Search Product Here...."
                aria-label="Search"
              />
              <MDBBtn className="button-search shadow-0">
                <BsSearch />
              </MDBBtn>
            </form>
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem className="d-flex ">
                  <Link
                    className=" text-white d-flex align-item-center gap-10"
                    active
                    aria-current="page"
                    to="/compare-product"
                  >
                    <img src="..\images\compare.svg " alt="Compared Icons" />
                    <p className="mb-0">
                      {" "}
                      Compare
                      <br />
                      Product
                    </p>
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link
                    className=" text-white d-flex align-item-center gap-10"
                    to="/wish-list"
                  >
                    <img src="..\images\wishlist.svg " alt="Compared Icons" />

                    <p className="mb-0">
                      {" "}
                      Favoruite <br />
                      Wishlist
                    </p>
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link
                    className=" text-white d-flex align-item-center gap-10"
                    to="login"
                  >
                    <img src="..\images\user.svg " alt="Compared Icons" />
                    <p className="mb-0  ">
                      {" "}
                      Log in <br />
                      My Account
                    </p>
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link
                    to="/cart"
                    className="d-flex align-item-center gap-10"
                    href="#"
                  >
                    <img src="..\images\cart.svg " alt="Compared Icons" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">
                        {`${basket?.length} Product`}
                      </span>
                      <p className="mb-0 text-white" style={{ margin: "auto" }}>
                        {" "}
                        $ {getBasketTotal(basket)}
                      </p>
                    </div>
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
      <div className="bottom-menu ">
        <MDBNavbar expand="lg" light>
          <MDBContainer fluid>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link text-white"
                  role="button"
                >
                  <img src="\images\menu.svg" className="mx-3 " alt="Menu" />
                  Shop Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className="ms-5    mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <Link className="text-white ms-5" to="/">
                    Home
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link className="text-white text-center ms-5" to="/store">
                    Our Strore
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link className="text-white ms-5" to="/blogs">
                    {" "}
                    Blogs
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link className="text-white ms-5" to="/contact">
                    {" "}
                    Contact Us
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </>
  );
};

export default Header;
