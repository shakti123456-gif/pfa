import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import "./Contact.css";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { scrollToTop } from "../../Utils/Common";

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="contact">
      <Layout title="Contact Page">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col col-md-6 text-start">
              <div className="mb-5">
                <h2 className="future-text">
                  YOUR FUTURE
                  <br /> STARTS HERE
                </h2>
              </div>
              <div className="mb-4">
                <p className="name-text mb-1">Saroj Joshi (Founder and CEO)</p>
                <a href="tel:918850451664">
                  <strong>+91-1124109460</strong>
                  <strong>+91-1124107462</strong>
                </a>
              </div>
              <div className="mb-4">
                <p className="name-text mb-1">
                  Sachin Kumar (Owner & accountable manager at Flyafc)
                </p>
                <a href="tel:918850451664">
                  <strong className="number-text">+91-91-9811028381</strong>
                </a>
              </div>
              <div className="mb-4">
                <a href="mailto:ambitionsaviationacademy@gmail.com">
                  <strong className="number-text">
                    <CgMail size={"1.5em"} /> pioneerflying_academy@hotmail.com
                  </strong>
                </a>
              </div>
              <div className="mb-4 address-txt">
                <div>Club Address</div>
                <div>Dhanipur Airstrip, NH-91, Aligarh- 202001, U.P</div>
                <div> Get Direction: View on map</div>
              </div>
              <div>
                <div>
                  <ImWhatsapp size={"1.5em"} /> &nbsp;{" "}
                  <FaFacebookSquare size={"1.5em"} /> &nbsp;{" "}
                  <BsInstagram size={"1.5em"} /> &nbsp;{" "}
                  <BsLinkedin size={"1.5em"} />
                </div>
              </div>
            </div>
            <div className="col col-md-6">
              <form class="row g-3">
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Name"
                  />
                </div>
                <div class="col-6">
                  <input
                    type="email"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Email"
                  />
                </div>
                <div class="col-6">
                  <input
                    type="number"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="Subject"
                  />
                </div>
                <div class="col-md-12">
                  <textarea
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="Message"
                  />
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-dark btn-lg">
                    Send the message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
