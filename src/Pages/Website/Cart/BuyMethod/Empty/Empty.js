import React from "react";
import { Container } from "react-bootstrap";
import eimage from "../../../../../Css/Assets/Images/Empty/delete.webp";
import "./Empty.css";

export default function Empty() {
  return (
    <section className="cartempty section-padding">
      <Container>
        <div className="emptycontent">
          <div className="img-contain">
            <img src={eimage} alt="Empty" loading="lazy" />
          </div>
          <h1>Your Cart is Empty</h1>
        </div>
      </Container>
    </section>
  );
}
