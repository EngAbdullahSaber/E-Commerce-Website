import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <Meta title=" Forget Password" />
      <BreadCrumb title="Forget Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <Row>
          <Col>
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 my-2">
                We Will send you an email to reset your password
              </p>{" "}
              <form action="" className="d-flex w-100 flex-column gap-15">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>

                <div>
                  <div className="d-flex justify-content-center flex-column gap-15 align-item-center">
                    <button className="buttons border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ForgetPassword;
