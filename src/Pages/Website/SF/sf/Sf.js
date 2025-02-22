import { Container } from "react-bootstrap";
import Logo from "../../../../Css/Assets/Images/Home/h-logo.webp";
import "../Sf.css";
import { Outlet } from "react-router-dom";

export default function Sf() {
  return (
    <>
      <section className="sf section-padding">
        <Container className="container">
          <div className="heading">
            <h1>
              Let us recommend <span>Suitable Fertilizer</span> to you
              <img src={Logo} alt="logo" loading="lazy" />
            </h1>
          </div>
          <Outlet />
        </Container>
      </section>
    </>
  );
}
