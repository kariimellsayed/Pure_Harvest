import { Container } from "react-bootstrap";
import "./About.css";
import logo from "../../../Css/Assets/Images/NavBar/Logo.webp";
export default function About() {
  return (
    <>
      <section className="about section-padding">
        <Container className="container">
          <div className="about-info">
            <h1>Pure Harvest</h1>
            <img src={logo} alt="logo" />
            <p>
              Pure Harvest is an actual project that was created in order to
              advance modern and pure agriculture, which relies heavily on
              artificial intelligence in its work, which in turn makes it easier
              for those who wish to enter the field of agriculture and do not
              have sufficient experience or knowledge of how to deal with that.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
