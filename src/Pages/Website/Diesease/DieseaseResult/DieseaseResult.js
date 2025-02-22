import { Container } from "react-bootstrap";
// import Uploader from "../../../../Components/Website/UploadImage/Uploader";
import "../Diesease.css";
import Logo from "../../../../Css/Assets/Images/Home/h-logo.webp";
import Fertlizers from "../../../../Components/Website/Fertlizers/Fertlizers";

export default function DieseaseResult() {
  return (
    <section className="diesease section-padding">
      <Container className="container">
        <div className="heading">
          <h1>
            Let us recommend <span>Suitable crops</span> to you
            <img src={Logo} alt="logo" loading="lazy" />
          </h1>
        </div>
        <Fertlizers />
      </Container>
    </section>
  );
}
