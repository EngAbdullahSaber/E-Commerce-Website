import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <>
      <Meta title=" Reset Password" />
      <BreadCrumb title="Reset Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <Row>
          <Col>
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex w-100 flex-column gap-15">
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forget-password"> Forget Password?</Link>
                  <div className="d-flex justify-content-center gap-15 align-item-center">
                    <button className="buttons border-0">Ok</button>
                    <Link to="/sign-up" className="buttons signup border-0">
                      {" "}
                      Sign Up
                    </Link>
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

export default ResetPassword;
