import { Container } from "react-bootstrap";
import Logo from "../../../Css/Assets/Images/Home/h-logo.webp";

import "./shop.css";
import { Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <section className="shop section-padding">
        <Container className="container">
          <div className="shop-title">
            <h1>
              Explore our <span>market</span>
              <img src={Logo} alt="Logo" loading="lazy" />
            </h1>
          </div>
          <div className="shiffle">
            <Outlet />
          </div>
        </Container>
      </section>
    </>
  );
}
