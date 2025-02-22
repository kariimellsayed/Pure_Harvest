import { Container } from "react-bootstrap";
import Logo from "../../../../Css/Assets/Images/Home/h-logo.webp";
import "../Sc.css";
import InputValue from "../../../../Components/Website/InputValues/InputSc/InputSc";

export default function Sc() {
  return (
    <>
      <section className="sc section-padding">
        <Container className="container">
          <div className="heading">
            <h1>
              Let us recommend <span>Suitable crops</span> to you
              <img src={Logo} alt="logo" loading="lazy" />
            </h1>
          </div>

          <InputValue />
        </Container>
      </section>
    </>
  );
}
