import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Container, Row } from "react-bootstrap";
import { useAuth } from "../context/GlobalState";
import WishListItem from "../components/WishListItem";

const WishList = () => {
  const { favourite } = useAuth();
  return (
    <>
      <Meta title="WishList" />
      <BreadCrumb title="WishList " />

      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <Container>
          <Row>
            <>
              {favourite.length > 0 ? (
                favourite.map((item) => {
                  return (
                    <WishListItem
                      id={item.id}
                      key={item.id}
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
        </Container>
      </div>
    </>
  );
};

export default WishList;
