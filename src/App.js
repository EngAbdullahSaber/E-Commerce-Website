import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import SingleBlog from "./pages/SingleBlog";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { useEffect, useState } from "react";
import { useAuth } from "./context/GlobalState";
import { auth } from "./context/firebase";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./pages/Orders";
import { loadStripe } from "@stripe/stripe-js";
import Tablets from "./pages/Tablets";
import Laptop from "./pages/Laptop";
import HeadPhones from "./pages/HeadPhones";

function App() {
  let [loading, setLoading] = useState(false);

  const steps = [
    {
      id: "0",
      message: "Hey My Friend!",

      // This calls the next id
      // i.e. id 1 in this case
      trigger: "1",
    },
    {
      id: "1",

      // This message appears in
      // the bot chat bubble
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",

      // Here we want the user
      // to enter input
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: " hi {previousValue}, how can I help you?",
      trigger: 4,
    },
    {
      id: "4",
      user: true,
      trigger: 5,
    },
    {
      id: "5",
      message:
        " Good We Will Review Your Account Info And Will Contact With You Again",

      end: true,
    },
  ];
  const stripePromise = loadStripe(
    "pk_test_51NxswbCdwEEN6PeMIbVJug2zzAtM6x17pExGltFDoWoGEsC499jyBwynjlkNDPAHqm5VHifiKXq3RGgU2TvCLZ3g00Q3kLbeeT"
  );
  // Creating our own theme
  const theme = {
    background: "#febd69",
    headerBgColor: "#494949",
    headerFontSize: "20px",
    botBubbleColor: "#494949",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#f5f5f7",
    userFontColor: "white",
  };

  // Set some properties of the bot
  const config = {
    botAvatar:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    floating: true,
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="">
          <HashLoader color="#36d7b7" style={{ display: "contents" }} />
        </div>
      ) : (
        <>
          {" "}
          <ThemeProvider theme={theme}>
            <ChatBot
              // This appears as the header
              // text for the chat bot
              headerTitle="Markets-Hub Bot Services"
              steps={steps}
              {...config}
            />
          </ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* styled */}
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="store" element={<OurStore />} />
                <Route path="store/:id" element={<SingleProduct />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:id" element={<SingleBlog />} />
                <Route path="compare-product" element={<CompareProduct />} />
                <Route path="wish-list" element={<WishList />} />
                <Route path="login" element={<Login />} />
                <Route path="forget-password" element={<ForgetPassword />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="cart" element={<Cart />} />
                <Route path="reset-password" element={<ResetPassword />} />
                {/* styled */}
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                {/* styled */}
                <Route path="refund-policy" element={<RefundPolicy />} />
                {/* styled */}
                <Route
                  path="terms-conditions"
                  element={<TermsAndConditions />}
                />
                {/* styled */}
                <Route path="shipping-policy" element={<ShippingPolicy />} />
                <Route path="orders" element={<Orders />} />
                <Route path="tablet" element={<Tablets />} />
                <Route path="laptop" element={<Laptop />} />
                <Route path="headphone" element={<HeadPhones />} />

                <Route
                  path="checkout"
                  element={
                    <>
                      <Elements stripe={stripePromise}>
                        <CheckOut />
                      </Elements>
                    </>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
