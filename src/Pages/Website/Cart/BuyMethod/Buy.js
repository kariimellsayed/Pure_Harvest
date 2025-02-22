import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Buy.css";
import delivery from "../../../../Css/Assets/Images/Checkout/dollar-circle.svg";
import visa from "../../../../Css/Assets/Images/Checkout/visa.svg";
import paypal from "../../../../Css/Assets/Images/Checkout/paypal.svg";

import PlaceOrder from "../../../../Components/Website/Cart/Checkout/PlaceOrder";
import { Link } from "react-router-dom";
import Popup from "./Popup/Popup";
import Faild from "./Popup/Faild";
export const Buy = () => {
  const [address, setAddress] = useState(true);
  const [payment, setPayment] = useState(true);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonFaild, setButtonFaild] = useState(false);

  const handleChange = (data) => {
    if (data === "address") {
      setAddress(data);
    }
    if (data === "payment") {
      setPayment(data);
    }
  };
  // console.log(address);
  // console.log(payment);

  return (
    <section className="buy section-padding">
      <Container className="container d-flex gap-4 flex-wrap">
        <div className="buyitems">
          <div className="header">
            <h3>Check out</h3>
          </div>
          <div className="buybody">
            <div className="address">
              <div className="addlink">
                <h3>Select address</h3>
                <Link className="link">Add new address</Link>
              </div>
              <div className="title">
                <div className="mansoura">
                  <div className="text d-flex align-items-center gap-4">
                    <i className="fa-solid fa-location-dot location"></i>

                    <div className="titles">
                      <h3>Mansoura</h3>
                      <p>s simply dummy text of the printing and typesetting</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    className="radio"
                    name="address"
                    value={address}
                    onChange={() => handleChange("address")}
                  />
                </div>
                <div className="cairo">
                  <div className="text d-flex align-items-center gap-4">
                    <i className="fa-solid fa-location-dot location"></i>

                    <div className="titles">
                      <h3>Cairo</h3>
                      <p>s simply dummy text of the printing and typesetting</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    className="radio"
                    name="address"
                    value={address}
                    onChange={() => handleChange("address")}
                  />
                </div>
              </div>
            </div>
            <div className="payment">
              <div className="addlink">
                <h3>Select Payment method</h3>
                <Link className="link">Add new Payment method</Link>
              </div>
              <div className="methods">
                <div className="delivery">
                  <div className="logo d-flex align-items-center gap-3">
                    <img src={delivery} alt="delivery" />
                    <span>Cash on delivery</span>
                  </div>
                  <input
                    type="radio"
                    className="radio"
                    name="payment"
                    value={payment}
                    onChange={() => handleChange("payment")}
                  />
                </div>
                <div className="visa">
                  <div className="logo">
                    <img src={visa} alt="visa" />
                  </div>
                  <input
                    type="radio"
                    className="radio"
                    name="payment"
                    value={payment}
                    onChange={() => handleChange("payment")}
                  />
                </div>
                <div className="paypal">
                  <div className="logo">
                    <img src={paypal} alt="paypal" />
                  </div>
                  <input
                    type="radio"
                    className="radio"
                    name="payment"
                    value={payment}
                    onChange={() => handleChange("payment")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order">
          <PlaceOrder
            setButtonPopup={setButtonPopup}
            setButtonFaild={setButtonFaild}
            address={address}
            payment={payment}
          />
        </div>
      </Container>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
      <Faild trigger={buttonFaild} setTrigger={setButtonFaild} />
    </section>
  );
};
