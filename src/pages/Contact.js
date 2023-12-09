import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l9pqs8x",
        "template_61y92dm",
        form.current,
        "C0reWgcJIG-wsNX12"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("myForm").reset();
  };

  return (
    <div>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <Container>
          <Row>
            <Col lg={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185002925!2d31.340866823406216!3d30.05961134371354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1695898273820!5m2!1sar!2seg"
                className="border-0 w-100"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col lg={12} className="mt-5">
              <Row className="contact-inner-wrapper d-flex justify-content-between">
                <Col>
                  <h3 className="contact-title">Contatct</h3>
                  <form
                    action=""
                    id="myForm"
                    ref={form}
                    onSubmit={sendEmail}
                    className="d-flex flex-column gap-15"
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control my-1"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control my-1"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Mobile Telephone"
                        className="form-control my-1"
                      />
                    </div>
                    <div>
                      <textarea
                        type="text"
                        name=""
                        cols={30}
                        rows={4}
                        id=""
                        placeholder="Comments"
                        className="form-control w-100"
                      ></textarea>
                    </div>
                    <div>
                      <button className="buttons">Submit</button>
                    </div>
                  </form>
                </Col>
                <Col>
                  <h3 className="contact-title">Get in touch with us </h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 align-item-center gap-15 d-flex">
                        <AiOutlineHome className="fs-5" />
                        <address>
                          Hno :277 village chopal , Aswan , Egypt
                        </address>
                      </li>
                      <li className="mb-3 align-item-center gap-15 d-flex">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel : (+02)112 605 4336">(+02)112 605 4336</a>
                      </li>
                      <li className="mb-3 align-item-center gap-15 d-flex">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto : abc@gmail.com"> abc@gmail.com</a>
                      </li>
                      <li className="mb-3 align-item-center gap-15 d-flex">
                        <BsInfoCircle className="fs-5" />
                        <p className="mb-0"> Monday - Friday 10 Am - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
