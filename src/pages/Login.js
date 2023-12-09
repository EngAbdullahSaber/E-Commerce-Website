import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../context/firebase";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        toast.success("Successfully signed up");

        navigate("/");
      } else {
        toast.error("Please Try again ");
      }
    });
  };

  return (
    <>
      <ToastContainer />

      <Meta title=" Login" />
      <BreadCrumb title="Login" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <Row>
          <Col>
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex w-100 flex-column gap-15">
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
                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <Link to="/forget-password"> Forget Password?</Link>
                  <div className="d-flex justify-content-center gap-15 align-item-center">
                    <button className="buttons border-0" onClick={signIn}>
                      Login
                    </button>
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

export default Login;
