import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../context/GlobalState";
import CompareProductItem from "../components/CompareProductItem";

const CompareProduct = () => {
  const { compare } = useAuth();

  return (
    <>
      <Meta title="Compare Product" />
      <BreadCrumb title="Compare Product" />

      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <Container>
          <Row>
            <>
              {compare.length > 0 ? (
                compare.map((item) => {
                  return (
                    <CompareProductItem
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
        </Container>
      </div>
    </>
  );
};

export default CompareProduct;
