import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../context/firebase";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          toast.success("Successfully signed up");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Please Try again ");
      });
  };

  return (
    <>
      <ToastContainer />

      <Meta title=" SignUp" />
      <BreadCrumb title="SignUp" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <Row>
          <Col>
            <div className="auth-card">
              <h3 className="text-center mb-3">SignUp</h3>
              <form action="" className="d-flex w-100 flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobil Num."
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="d-flex justify-content-center gap-15 align-item-center">
                    <button className="buttons border-0" onClick={register}>
                      Create Acoount
                    </button>
                    <Link to="/login" className="buttons signup border-0">
                      {" "}
                      Login
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

export default SignUp;
